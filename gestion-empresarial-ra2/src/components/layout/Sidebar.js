import { authService } from '../../services/authService.js';
 
export function Sidebar() {
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
 
  const usuario = authService.obtenerUsuarioActual();
  const permisos = usuario ? usuario.permisos : [];
 
  const modulos = [
    { id: 'inicio', nombre: 'Inicio', icon: '🏠', hash: '#/inicio' },
    { id: 'almacen', nombre: 'Almacén', icon: '📦', hash: '#/almacen' },
    { id: 'compras', nombre: 'Compras', icon: '🛒', hash: '#/compras' },
    { id: 'ventas', nombre: 'Ventas', icon: '💰', hash: '#/ventas' },
    { id: 'delivery', nombre: 'Delivery', icon: '🚚', hash: '#/delivery' },
    { id: 'seguridad', nombre: 'Seguridad', icon: '🛡️', hash: '#/seguridad' }
  ];
 
  const navHtml = modulos
    .filter(m => m.id === 'inicio' || permisos.includes(m.id))
    .map(m => `
      <li class="nav-item">
        <a href="${m.hash}" class="nav-link${window.location.hash.startsWith(m.hash) ? ' active' : ''}" data-modulo="${m.id}">
          <span class="nav-icon">${m.icon}</span>
          <span class="nav-text">${m.nombre}</span>
        </a>
      </li>
    `).join('');
 
  sidebar.innerHTML = `
    <div class="sidebar-header">
      <span class="sidebar-logo">EmpresaPro</span>
      <button id="btn-toggle-sidebar" style="background:none; border:none; cursor:pointer;">☰</button>
    </div>
    <ul class="sidebar-nav">${navHtml}</ul>
  `;
 
  sidebar.querySelector('#btn-toggle-sidebar').addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
  });
 
  return sidebar;
}
