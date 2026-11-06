import { Sidebar } from './Sidebar.js';
import { Topbar } from './Topbar.js';
 
export function Layout(contenidoPagina) {
  const appLayout = document.createElement('div');
  appLayout.className = 'app-layout';
 
  const sidebar = Sidebar();
  const mainContent = document.createElement('div');
  mainContent.className = 'main-content';
 
  const topbar = Topbar();
  const pageContainer = document.createElement('main');
  pageContainer.className = 'page-container';
  pageContainer.appendChild(contenidoPagina);
 
  mainContent.appendChild(topbar);
  mainContent.appendChild(pageContainer);
 
  appLayout.appendChild(sidebar);
  appLayout.appendChild(mainContent);
 
  return appLayout;
}
