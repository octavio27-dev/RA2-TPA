// Utilidades para formato de moneda, fechas y textos
import { CONFIG } from '../config.js';
 
export function formatearMoneda(valor) {
  const numero = Number(valor) || 0;
  return `${CONFIG.MONEDA} ${numero.toFixed(2)}`;
}
 
export function formatearFecha(fechaStr) {
  if (!fechaStr) return '';
  const fecha = new Date(fechaStr);
  return isNaN(fecha.getTime()) ? fechaStr : fecha.toLocaleDateString('es-PE');
}
