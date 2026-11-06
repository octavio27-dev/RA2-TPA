export function Modal({ titulo, contenido, onClose }) {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
 
  const modal = document.createElement('div');
  modal.className = 'modal-content';
 
  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.justifyContent = 'space-between';
  header.style.marginBottom = '1rem';
  header.innerHTML = `<h3>${titulo}</h3>`;
 
  const btnClose = document.createElement('button');
  btnClose.textContent = '✕';
  btnClose.style.background = 'none';
  btnClose.style.border = 'none';
  btnClose.style.cursor = 'pointer';
  btnClose.addEventListener('click', () => {
    backdrop.remove();
    if (onClose) onClose();
  });
 
  header.appendChild(btnClose);
  modal.appendChild(header);
  modal.appendChild(contenido);
  backdrop.appendChild(modal);
 
  // Cierre con tecla Escape
  const keyHandler = (e) => {
    if (e.key === 'Escape') {
      backdrop.remove();
      document.removeEventListener('keydown', keyHandler);
      if (onClose) onClose();
    }
  };
  document.addEventListener('keydown', keyHandler);
 
  return backdrop;
}
