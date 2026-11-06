import { authService } from '../services/authService.js';
import { KpiCard } from '../components/ui/KpiCard.js';
 
export function InicioPage() {
  const usuario = authService.obtenerUsuarioActual();
  const contenedor = document.createElement('div');
 
  const saludo = document.createElement('h1');
  saludo.textContent = `¡Bienvenido de nuevo, ${usuario ? usuario.nombre : 'Usuario'}!`;
  saludo.style.marginBottom = '1.5rem';
  contenedor.appendChild(saludo);
 
  const gridKpis = document.createElement('div');
  gridKpis.style.display = 'grid';
  gridKpis.style.gridTemplateColumns = 'repeat(auto-fit, minmax(220px, 1fr))';
  gridKpis.style.gap = '1rem';
 
  gridKpis.appendChild(KpiCard({ titulo: 'Ventas del Día', valor: 'S/ 1,450.00', variacion: 12.5 }));
  gridKpis.appendChild(KpiCard({ titulo: 'Pedidos Pendientes', valor: '5', variacion: -4.2 }));
  gridKpis.appendChild(KpiCard({ titulo: 'Stock Bajo', valor: '2', variacion: 0 }));
  gridKpis.appendChild(KpiCard({ titulo: 'Entregas en Curso', valor: '3', variacion: 8.0 }));
 
  contenedor.appendChild(gridKpis);
  return contenedor;
}
