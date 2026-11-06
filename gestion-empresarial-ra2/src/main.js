// Punto de entrada principal de la aplicación
import { iniciarEnrutador } from './router.js';
 
document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('app');
  if (appContainer) {
    iniciarEnrutador(appContainer);
  }
});
