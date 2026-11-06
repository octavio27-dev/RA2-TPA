// Servicio de usuarios con datos de prueba
const usuariosDB = [
  { id: 1, usuario: 'admin', nombre: 'Administrador General', correo: 'admin@empresa.com', rol: 'Administrador', activo: true, passwordHash: 'Admin123' },
  { id: 2, usuario: 'vendedor', nombre: 'Carlos Vendedor', correo: 'vendedor@empresa.com', rol: 'Vendedor', activo: true, passwordHash: 'Venta123' },
  { id: 3, usuario: 'almacenero', nombre: 'Luis Almacén', correo: 'almacen@empresa.com', rol: 'Almacenero', activo: true, passwordHash: 'Alma123' }
];
 
export const usuariosService = {
  async listar() {
    return [...usuariosDB];
  },
  async crear(nuevoUsuario) {
    const existe = usuariosDB.find(u => u.usuario === nuevoUsuario.usuario || u.correo === nuevoUsuario.correo);
    if (existe) throw new Error('El usuario o correo ya existe');
    const usuarioCreado = { id: usuariosDB.length + 1, activo: true, ...nuevoUsuario };
    usuariosDB.push(usuarioCreado);
    return usuarioCreado;
  },
  async buscarPorUsuario(nombreUsuario) {
    return usuariosDB.find(u => u.usuario === nombreUsuario);
  }
};
