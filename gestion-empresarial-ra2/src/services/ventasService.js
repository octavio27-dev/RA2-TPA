const ventasDB = [
  { id: 101, cliente: 'Juan Pérez', fecha: '2026-11-01', subtotal: 100.00, igv: 18.00, total: 118.00, estado: 'Completado' },
  { id: 102, cliente: 'María Gómez', fecha: '2026-11-04', subtotal: 500.00, igv: 90.00, total: 590.00, estado: 'Pendiente' }
];
 
export const ventasService = {
  async listar() { return [...ventasDB]; },
  async crear(data) {
    const nueva = { id: ventasDB.length + 100, ...data };
    ventasDB.push(nueva);
    return nueva;
  }
};
