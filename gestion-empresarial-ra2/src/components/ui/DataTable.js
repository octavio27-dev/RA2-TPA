export function DataTable({ columnas, datos, acciones }) {
  const table = document.createElement('table');
  table.className = 'data-table';
 
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  columnas.forEach(col => {
    const th = document.createElement('th');
    th.textContent = col.titulo;
    headerRow.appendChild(th);
  });
  if (acciones) {
    const thAcciones = document.createElement('th');
    thAcciones.textContent = 'Acciones';
    headerRow.appendChild(thAcciones);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);
 
  const tbody = document.createElement('tbody');
  datos.forEach(row => {
    const tr = document.createElement('tr');
    columnas.forEach(col => {
      const td = document.createElement('td');
      td.textContent = row[col.campo] !== undefined ? row[col.campo] : '';
      tr.appendChild(td);
    });
 
    if (acciones) {
      const tdAcc = document.createElement('td');
      acciones.forEach(acc => {
        const btn = document.createElement('button');
        btn.textContent = acc.texto;
        btn.style.marginRight = '0.5rem';
        btn.addEventListener('click', () => acc.ejecutar(row));
        tdAcc.appendChild(btn);
      });
      tr.appendChild(tdAcc);
    }
    tbody.appendChild(tr);
  });
 
  table.appendChild(tbody);
  return table;
}
