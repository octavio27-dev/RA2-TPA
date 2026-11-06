// Enrutador por hash con protección de rutas y control de permisos
import { authService } from './services/authService.js';
import { LoginPage } from './pages/LoginPage.js';
import { RegistroPage } from './pages/RegistroPage.js';
import { AccesoDenegadoPage } from './pages/AccesoDenegadoPage.js';
import { InicioPage } from './pages/InicioPage.js';
import { AlmacenPage } from './pages/AlmacenPage.js';
import { VentasPage } from './pages/VentasPage.js';
import { ModuloPendientePage } from './pages/ModuloPendientePage.js';
import { Layout } from './components/layout/Layout.js';

// Tabla de rutas: módulo -> función que construye la página
const paginas = {
  inicio: () => InicioPage(),
  almacen: () => AlmacenPage(),
  ventas: () => VentasPage(),
  compras: () => ModuloPendientePage('Compras'),
  delivery: () => ModuloPendientePage('Delivery'),
  seguridad: () => ModuloPendientePage('Seguridad')
};

export function iniciarEnrutador(contenedorApp) {
  function manejarRuta() {
    const hash = window.location.hash || '#/login';
    const autenticado = authService.estaAutenticado();
    const usuarioActual = authService.obtenerUsuarioActual();

    contenedorApp.innerHTML = '';

    // Protección de rutas públicas / privadas
    if (!autenticado) {
      if (hash === '#/registro') {
        contenedorApp.appendChild(RegistroPage());
      } else if (hash !== '#/login') {
        window.location.hash = '#/login'; // dispara hashchange y vuelve a renderizar
      } else {
        contenedorApp.appendChild(LoginPage());
      }
      return;
    }

    // Si está autenticado y quiere ir al login, registro o raíz, redirigir al inicio
    if (hash === '#/login' || hash === '#/registro' || hash === '#/') {
      window.location.hash = '#/inicio';
      return;
    }

    // Extracción del módulo principal de la ruta (#/modulo/submodulo)
    const segmentoModulo = hash.split('/')[1]; // ej: 'almacen' de '#/almacen/productos'

    // Validación de permisos por rol
    if (segmentoModulo !== 'inicio') {
      const permisos = usuarioActual ? usuarioActual.permisos : [];
      if (!permisos.includes(segmentoModulo)) {
        contenedorApp.appendChild(AccesoDenegadoPage());
        return;
      }
    }

    // Página dentro del Layout (sidebar + topbar)
    const construir = paginas[segmentoModulo];
    if (!construir) {
      window.location.hash = '#/inicio';
      return;
    }
    contenedorApp.appendChild(Layout(construir()));
  }

  window.addEventListener('hashchange', manejarRuta);
  manejarRuta(); // main.js ya se ejecuta tras DOMContentLoaded, 'load' puede no volver a dispararse
}
