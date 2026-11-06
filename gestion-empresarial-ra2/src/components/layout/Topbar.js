import { authService } from '../../services/authService.js';
 
export function Topbar() {
  const topbar = document.createElement('header');
  topbar.className = 'topbar';
 
  const usuario = authService.obtenerUsuarioActual();
 
  topbar.innerHTML = `
    <div class="topbar-search">
      <input type="text" placeholder="Buscar en el sistema..." style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); border-radius:var(--radius);" />
    </div>
    <div class="topbar-user">
      <div style="text-align:right;">
        <div style="font-weight:600; font-size:0.9rem;">${usuario ? usuario.nombre : 'Usuario'}</div>
        <div style="font-size:0.75rem; color:var(--text-muted);">${usuario ? usuario.rol : ''}</div>
      </div>
      <button id="btn-logout-top" class="btn-primary" style="padding:0.4rem 0.8rem; font-size:0.85rem;">Cerrar Sesión</button>
    </div>
  `;
 
  topbar.querySelector('#btn-logout-top').addEventListener('click', () => {
    authService.logout();
    window.location.hash = '#/login';
  });
 
  return topbar;
}
