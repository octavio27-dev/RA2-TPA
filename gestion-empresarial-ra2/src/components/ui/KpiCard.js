export function KpiCard({ titulo, valor, variacion }) {
  const card = document.createElement('div');
  card.className = 'kpi-card';
 
  const esPositivo = variacion >= 0;
  const badgeClass = esPositivo ? 'badge-up' : 'badge-down';
  const signo = esPositivo ? '+' : '';
 
  card.innerHTML = `
    <div class="kpi-title">${titulo}</div>
    <div class="kpi-value">${valor}</div>
    <span class="kpi-badge ${badgeClass}">${signo}${variacion}% vs anterior</span>
  `;
  return card;
}
