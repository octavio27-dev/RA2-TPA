// Servicio de autenticación simulado
import { usuariosService } from './usuariosService.js';
import { rolesService } from './rolesService.js';
 
export const authService = {
  async login(credenciales, recordar = false) {
    // TODO: Reemplazar validación simulada por llamada fetch a API REST con token Bearer
    const usuarioEncontrado = await usuariosService.buscarPorUsuario(credenciales.usuario);
    
    if (!usuarioEncontrado || !usuarioEncontrado.activo || usuarioEncontrado.passwordHash !== credenciales.password) {
      throw new Error('Credenciales incorrectas o usuario inactivo');
    }
 
    const rolData = await rolesService.obtenerPorNombre(usuarioEncontrado.rol);
    const sesionData = {
      usuario: usuarioEncontrado.usuario,
      nombre: usuarioEncontrado.nombre,
      correo: usuarioEncontrado.correo,
      rol: usuarioEncontrado.rol,
      permisos: rolData ? rolData.modulosPermitidos : [],
      token: 'token-simulado-jwt-' + Math.random().toString(36).substring(2)
    };
 
    const storage = recordar ? localStorage : sessionStorage;
    storage.setItem('sesion_actual', JSON.stringify(sesionData));
    return sesionData;
  },
 
  async registrar(datosRegistro) {
    // Registro asigna rol por defecto "Vendedor"
    const nuevo = await usuariosService.crear({
      usuario: datosRegistro.usuario,
      nombre: `${datosRegistro.nombres} ${datosRegistro.apellidos}`,
      correo: datosRegistro.correo,
      rol: 'Vendedor',
      passwordHash: datosRegistro.password
    });
    return nuevo;
  },
 
  logout() {
    sessionStorage.removeItem('sesion_actual');
    localStorage.removeItem('sesion_actual');
  },
 
  obtenerUsuarioActual() {
    const sesionStr = sessionStorage.getItem('sesion_actual') || localStorage.getItem('sesion_actual');
    if (!sesionStr) return null;
    try {
      return JSON.parse(sesionStr);
    } catch {
      return null;
    }
  },
 
  estaAutenticado() {
    return this.obtenerUsuarioActual() !== null;
  }
};
