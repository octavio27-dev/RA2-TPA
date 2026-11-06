export const productoFormSchema = [
  { nombre: 'codigo', etiqueta: 'Código del Producto', tipo: 'text', obligatorio: true },
  { nombre: 'nombre', etiqueta: 'Nombre', tipo: 'text', obligatorio: true },
  { nombre: 'categoria', etiqueta: 'Categoría', tipo: 'text', obligatorio: true },
  { nombre: 'precio', etiqueta: 'Precio (S/)', tipo: 'number', obligatorio: true },
  { nombre: 'stock', etiqueta: 'Stock Inicial', tipo: 'number', obligatorio: true },
  { nombre: 'stockMinimo', etiqueta: 'Stock Mínimo', tipo: 'number', obligatorio: true }
];
