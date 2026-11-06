// Servicio de roles con datos de prueba
const rolesDB = [
  { id: 1, nombre: 'Administrador', descripcion: 'Acceso total al sistema', modulosPermitidos: ['inicio', 'almacen', 'compras', 'ventas', 'delivery', 'seguridad'] },
  { id: 2, nombre: 'Vendedor', descripcion: 'Acceso a ventas y delivery', modulosPermitidos: ['inicio', 'ventas', 'delivery'] },
  { id: 3, nombre: 'Almacenero', descripcion: 'Acceso a inventario y compras', modulosPermitidos: ['inicio', 'almacen', 'compras'] }
];
 
export const rolesService = {
  async listar() {
    return [...rolesDB];
  },
  async obtenerPorNombre(nombre) {
    return rolesDB.find(r => r.nombre.toLowerCase() === nombre.toLowerCase());
  }
};
