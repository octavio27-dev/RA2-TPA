import { KpiCard } from '../components/ui/KpiCard.js';
import { ProductosList } from './listas/ProductosList.js';
 
export function AlmacenPage() {
  const contenedor = document.createElement('div');
  contenedor.innerHTML = `<h2>Dashboard de Almacén e Inventario</h2>`;
 
  const kpiGrid = document.createElement('div');
  kpiGrid.style.display = 'grid';
  kpiGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
  kpiGrid.style.gap = '1rem';
  kpiGrid.style.margin = '1rem 0';
 
  kpiGrid.appendChild(KpiCard({ titulo: 'Total Productos', valor: '48', variacion: 5.0 }));
  kpiGrid.appendChild(KpiCard({ titulo: 'Stock Bajo', valor: '3', variacion: -15.0 }));
  kpiGrid.appendChild(KpiCard({ titulo: 'Valor Inventario', valor: 'S/ 45,200.00', variacion: 3.2 }));
  kpiGrid.appendChild(KpiCard({ titulo: 'Movimientos Hoy', valor: '12', variacion: 20.0 }));
 
  contenedor.appendChild(kpiGrid);
  contenedor.appendChild(ProductosList());
 
  return contenedor;
}
