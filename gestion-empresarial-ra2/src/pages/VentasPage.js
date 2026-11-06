import { KpiCard } from '../components/ui/KpiCard.js';
 
export function VentasPage() {
  const contenedor = document.createElement('div');
  contenedor.innerHTML = `
    <h2>Dashboard de Ventas</h2>
    <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:1rem; margin-top:1rem;">
      <div>${KpiCard({ titulo: 'Ventas del Mes', valor: 'S/ 18,900.00', variacion: 14.2 }).outerHTML}</div>
      <div>${KpiCard({ titulo: 'Ticket Promedio', valor: 'S/ 340.00', variacion: 2.1 }).outerHTML}</div>
      <div>${KpiCard({ titulo: 'Clientes Nuevos', valor: '14', variacion: 10.0 }).outerHTML}</div>
    </div>
  `;
  return contenedor;
}
