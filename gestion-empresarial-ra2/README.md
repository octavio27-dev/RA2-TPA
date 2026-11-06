# Sistema de Gestión Empresarial - Prototipo RA2
 
Aplicación web modular en JavaScript Vanilla (ES Modules) para el curso Taller de Programación de Aplicaciones.
 
## Instrucciones de Ejecución
Requiere Node.js 18 o superior.

**Opción A - Sin dependencias (servidor Node incluido):**
1. Iniciar: `npm start`
2. Abrir en navegador: `http://localhost:3000`

**Opción B - Con Vite (recarga en caliente):**
1. Instalar dependencias: `npm install`
2. Iniciar servidor de desarrollo: `npm run dev` (abre `http://localhost:3000`)
3. Compilar para producción: `npm run build`

## Cuentas de Prueba
- **Administrador:** `admin` / `Admin123` (Acceso Total)
- **Vendedor:** `vendedor` / `Venta123` (Inicio, Ventas, Delivery)
- **Almacenero:** `almacenero` / `Alma123` (Inicio, Almacén, Compras)
 
## Tabla de Equivalencias (Vanilla JS vs React/Flutter)
- **Componente:** Función que retorna un HTMLElement.
- **Estado:** Variables locales en la página / módulo.
- **Render:** Re-ejecución del renderizado al cambiar datos del servicio.
