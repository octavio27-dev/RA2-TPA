const productosDB = [
  { id: 1, codigo: 'PROD-01', nombre: 'Teclado Mecánico RGB', categoria: 'Periféricos', precio: 150.00, stock: 25, stockMinimo: 5 },
  { id: 2, codigo: 'PROD-02', nombre: 'Monitor IPS 25 300Hz', categoria: 'Monitores', precio: 890.00, stock: 8, stockMinimo: 3 },
  { id: 3, codigo: 'PROD-03', nombre: 'Mouse Inalámbrico', categoria: 'Periféricos', precio: 85.00, stock: 2, stockMinimo: 5 }
];
 
export const productoService = {
  async listar() { return [...productosDB]; },
  async crear(data) {
    const nuevo = { id: productosDB.length + 1, ...data };
    productosDB.push(nuevo);
    return nuevo;
  },
  async eliminar(id) {
    const index = productosDB.findIndex(p => p.id === id);
    if (index !== -1) productosDB.splice(index, 1);
  }
};
