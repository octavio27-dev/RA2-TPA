// Pantalla de acceso denegado por falta de permisos de rol
export function AccesoDenegadoPage() {
  const contenedor = document.createElement('div');
  contenedor.className = 'login-container';
 
  const card = document.createElement('div');
  card.className = 'login-card';
  card.style.textAlign = 'center';
 
  const titulo = document.createElement('h1');
  titulo.textContent = 'Acceso Denegado';
  titulo.style.color = 'var(--danger-color)';
 
  const mensaje = document.createElement('p');
  mensaje.textContent = 'No cuentas con los permisos necesarios para acceder a este módulo según tu rol asignado.';
 
  const btnInicio = document.createElement('button');
  btnInicio.className = 'btn-primary';
  btnInicio.textContent = 'Ir al Inicio';
  btnInicio.style.marginTop = '1rem';
  btnInicio.addEventListener('click', () => {
    window.location.hash = '#/inicio';
  });
 
  card.appendChild(titulo);
  card.appendChild(mensaje);
  card.appendChild(btnInicio);
  contenedor.appendChild(card);
 
  return contenedor;
}
