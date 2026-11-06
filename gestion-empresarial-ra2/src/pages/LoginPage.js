// Pantalla de Inicio de Sesión
import { authService } from '../services/authService.js';
 
export function LoginPage() {
  const contenedor = document.createElement('div');
  contenedor.className = 'login-container';
 
  const card = document.createElement('div');
  card.className = 'login-card';
 
  const titulo = document.createElement('h1');
  titulo.textContent = 'Gestión Empresarial';
 
  const subtitulo = document.createElement('p');
  subtitulo.textContent = 'Inicie sesión para continuar';
 
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.style.display = 'none';
 
  const form = document.createElement('form');
 
  // Grupo Usuario
  const grupoUsuario = document.createElement('div');
  grupoUsuario.className = 'form-group';
  const labelUsuario = document.createElement('label');
  labelUsuario.textContent = 'Usuario';
  const inputUsuario = document.createElement('input');
  inputUsuario.type = 'text';
  inputUsuario.required = true;
  inputUsuario.placeholder = 'Ingrese su usuario';
  grupoUsuario.appendChild(labelUsuario);
  grupoUsuario.appendChild(inputUsuario);
 
  // Grupo Contraseña
  const grupoPassword = document.createElement('div');
  grupoPassword.className = 'form-group';
  const labelPassword = document.createElement('label');
  labelPassword.textContent = 'Contraseña';
  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.required = true;
  inputPassword.placeholder = '••••••••';
  grupoPassword.appendChild(labelPassword);
  grupoPassword.appendChild(inputPassword);
 
  // Acciones (Recordarme y Enlaces)
  const acciones = document.createElement('div');
  acciones.className = 'form-actions';
  
  const labelRecordar = document.createElement('label');
  labelRecordar.style.display = 'flex';
  labelRecordar.style.alignItems = 'center';
  labelRecordar.style.gap = '0.5rem';
  const checkRecordar = document.createElement('input');
  checkRecordar.type = 'checkbox';
  labelRecordar.appendChild(checkRecordar);
  labelRecordar.appendChild(document.createTextNode('Recordarme'));
  
  acciones.appendChild(labelRecordar);
 
  // Botón Ingresar
  const btnIngresar = document.createElement('button');
  btnIngresar.type = 'submit';
  btnIngresar.className = 'btn-primary';
  btnIngresar.textContent = 'Ingresar';
 
  form.appendChild(grupoUsuario);
  form.appendChild(grupoPassword);
  form.appendChild(acciones);
  form.appendChild(btnIngresar);
 
  // Enlace Registro
  const links = document.createElement('div');
  links.className = 'auth-links';
  const enlaceRegistro = document.createElement('a');
  enlaceRegistro.href = '#/registro';
  enlaceRegistro.textContent = '¿No tienes cuenta? Crear cuenta';
  links.appendChild(enlaceRegistro);
 
  // Evento Submit y validaciones interactivas (Enter)
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorDiv.style.display = 'none';
    btnIngresar.disabled = true;
    btnIngresar.textContent = 'Validando...';
 
    try {
      await authService.login({
        usuario: inputUsuario.value.trim(),
        password: inputPassword.value
      }, checkRecordar.checked);
 
      window.location.hash = '#/inicio';
    } catch (err) {
      errorDiv.textContent = err.message;
      errorDiv.style.display = 'block';
      btnIngresar.disabled = false;
      btnIngresar.textContent = 'Ingresar';
    }
  });
 
  card.appendChild(titulo);
  card.appendChild(subtitulo);
  card.appendChild(errorDiv);
  card.appendChild(form);
  card.appendChild(links);
  contenedor.appendChild(card);
 
  return contenedor;
}
