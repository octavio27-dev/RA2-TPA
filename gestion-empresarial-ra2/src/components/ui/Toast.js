export function showToast(mensaje, tipo = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${tipo}`;
  toast.textContent = mensaje;
  document.body.appendChild(toast);
 
  setTimeout(() => {
    toast.remove();
  }, 3000);
}
