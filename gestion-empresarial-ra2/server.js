// Servidor estático mínimo en Node.js (sin dependencias).
// Uso: npm start   ->  http://localhost:3000
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = resolve(fileURLToPath(new URL('.', import.meta.url)));
const PUERTO = Number(process.env.PORT) || 3000;

const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};

const servidor = http.createServer(async (req, res) => {
  try {
    const { pathname } = new URL(req.url, 'http://localhost');
    let ruta = normalize(decodeURIComponent(pathname));
    if (ruta === '/' || ruta === '\\') ruta = '/index.html';

    const archivo = join(RAIZ, ruta);
    // Evita salir de la carpeta del proyecto (path traversal)
    if (!archivo.startsWith(RAIZ)) {
      res.writeHead(403).end('Prohibido');
      return;
    }

    const info = await stat(archivo);
    if (!info.isFile()) throw new Error('No es archivo');

    const contenido = await readFile(archivo);
    res.writeHead(200, {
      'Content-Type': TIPOS[extname(archivo)] || 'application/octet-stream',
      'Cache-Control': 'no-cache'
    });
    res.end(contenido);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('404 - No encontrado');
  }
});

servidor.listen(PUERTO, () => {
  console.log(`Sistema de Gestión Empresarial corriendo en http://localhost:${PUERTO}`);
});
