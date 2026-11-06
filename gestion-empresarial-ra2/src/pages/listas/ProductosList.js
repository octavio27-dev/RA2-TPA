import { productoService } from '../../services/productoService.js';
import { DataTable } from '../../components/ui/DataTable.js';
import { showToast } from '../../components/ui/Toast.js';
 
export function ProductosList() {
  const contenedor = document.createElement('div');
 
  const titulo = document.createElement('h2');
  titulo.textContent = 'Gestión de Productos (Almacén)';
  contenedor.appendChild(titulo);
 
  async function cargar() {
    const productos = await productoService.listar();
    const tabla = DataTable({
      columnas: [
        { titulo: 'Código', campo: 'codigo' },
        { titulo: 'Nombre', campo: 'nombre' },
        { titulo: 'Categoría', campo: 'categoria' },
        { titulo: 'Precio', campo: 'precio' },
        { titulo: 'Stock', campo: 'stock' }
      ],
      datos: productos,
      acciones: [
        {
          texto: 'Eliminar',
          ejecutar: async (row) => {
            if (confirm(`¿Desea eliminar ${row.nombre}?`)) {
              await productoService.eliminar(row.id);
              showToast('Producto eliminado');
              render();
            }
          }
        }
      ]
    });
    contenedor.innerHTML = '';
    contenedor.appendChild(titulo);
    contenedor.appendChild(tabla);
  }
 
  function render() { cargar(); }
  render();
 
  return contenedor;
}
