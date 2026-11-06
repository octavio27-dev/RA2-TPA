// Principios matemáticos aplicados (Funciones puras)
import { CONFIG } from '../config.js';
 
export const matematica = {
  // Variación porcentual: (actual - anterior) / anterior * 100
  variacionPorcentual(actual, anterior) {
    if (!anterior || anterior === 0) return actual > 0 ? 100 : 0;
    return Number((((actual - anterior) / anterior) * 100).toFixed(2));
  },
 
  // Cálculo de Subtotal, IGV y Total
  calcularImpuestos(subtotal) {
    const sub = Number(subtotal) || 0;
    const igv = Number((sub * CONFIG.IGV_TASA).toFixed(2));
    const total = Number((sub + igv).toFixed(2));
    return { subtotal: sub, igv, total };
  },
 
  // Ticket promedio: suma de ventas / cantidad de ventas
  ticketPromedio(sumaVentas, cantidadVentas) {
    if (!cantidadVentas || cantidadVentas === 0) return 0;
    return Number((sumaVentas / cantidadVentas).toFixed(2));
  },
 
  // Valor del inventario: suma de (precio * stock)
  valorInventario(productos) {
    if (!Array.isArray(productos)) return 0;
    return productos.reduce((acc, p) => acc + (Number(p.precio) || 0) * (Number(p.stock) || 0), 0);
  },
 
  // Filtrar productos con stock bajo (menor o igual al stock mínimo)
  esStockBajo(stock, stockMinimo) {
    return Number(stock) <= Number(stockMinimo);
  }
};
