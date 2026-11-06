// Pantalla de Registro de Cuenta nueva (Rol Vendedor)
import { authService } from '../services/authService.js';
import { validadores } from '../utils/validadores.js';
 
export function RegistroPage() {
  const contenedor = document.createElement('div');
  contenedor.className = 'login-container';
 
  const card = document.createElement('div');
  card.className = 'login-card';
  card.style.maxWidth = '450px';
 
  const titulo = document.createElement('h1');
  titulo.textContent = 'Crear Cuenta';
 
  const subtitulo = document.createElement('p');
  subtitulo.textContent = 'Registro de nuevo usuario (Rol Vendedor)';
 
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.style.display = 'none';
 
  const form = document.createElement('form');
 
  // Función auxiliar para crear campos
  function crearCampo(labelTxt, tipo, placeholder) {
    const grupo = document.createElement('div');
    grupo.className = 'form-group';
    const label = document.createElement('label');
    label.textContent = labelTxt;
    const input = document.createElement('input');
    input.type = tipo;
    input.required = true;
    input.placeholder = placeholder;
    grupo.appendChild(label);
    grupo.appendChild(input);
    return { grupo, input };
  }
 
  const fNombres = crearCampo('Nombres', 'text', 'Tus nombres');
  const fApellidos = crearCampo('Apellidos', 'text', 'Tus apellidos');
  const fUsuario = crearCampo('Usuario (mín. 4 caracteres, sin espacios)', 'text', 'usuario123');
  const fCorreo = crearCampo('Correo Electrónico', 'email', 'correo@ejemplo.com');
  
  const fPassword = crearCampo('Contraseña (mín. 8 caracteres, 1 mayúscula, 1 número)', 'password', '••••••••');
  
  // Medidor de fuerza de contraseña
  const meterDiv = document.createElement('div');
  meterDiv.className = 'strength-meter';
  const strengthBar = document.createElement('div');
  strengthBar.className = 'strength-bar';
  meterDiv.appendChild(strengthBar);
  fPassword.grupo.appendChild(meterDiv);
 
  fPassword.input.addEventListener('input', () => {
    const val = fPassword.input.value;
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/\d/.test(val)) score++;
    
    if (score === 1) { strengthBar.style.width = '33%'; strengthBar.style.backgroundColor = 'var(--danger-color)'; }
    else if (score === 2) { strengthBar.style.width = '66%'; strengthBar.style.backgroundColor = 'var(--warning-color)'; }
    else if (score === 3) { strengthBar.style.width = '100%'; strengthBar.style.backgroundColor = 'var(--success-color)'; }
    else { strengthBar.style.width = '0%'; }
  });
 
  const fConfirmar = crearCampo('Confirmar Contraseña', 'password', '••••••••');
 
  const btnRegistrar = document.createElement('button');
  btnRegistrar.type = 'submit';
  btnRegistrar.className = 'btn-primary';
  btnRegistrar.textContent = 'Registrarse';
 
  form.appendChild(fNombres.grupo);
  form.appendChild(fApellidos.grupo);
  form.appendChild(fUsuario.grupo);
  form.appendChild(fCorreo.grupo);
  form.appendChild(fPassword.grupo);
  form.appendChild(fConfirmar.grupo);
  form.appendChild(btnRegistrar);
 
  const links = document.createElement('div');
  links.className = 'auth-links';
  const enlaceLogin = document.createElement('a');
  enlaceLogin.href = '#/login';
  enlaceLogin.textContent = '¿Ya tienes cuenta? Inicia sesión';
  links.appendChild(enlaceLogin);
 
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorDiv.style.display = 'none';
 
    // Validaciones lógicas detalladas
    if (!validadores.usuario(fUsuario.input.value)) {
      errorDiv.textContent = 'El usuario debe tener al menos 4 caracteres y no contener espacios.';
      errorDiv.style.display = 'block';
      return;
    }
    if (!validadores.correo(fCorreo.input.value)) {
      errorDiv.textContent = 'El formato del correo electrónico no es válido.';
      errorDiv.style.display = 'block';
      return;
    }
    if (!validadores.contrasena(fPassword.input.value)) {
      errorDiv.textContent = 'La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.';
      errorDiv.style.display = 'block';
      return;
    }
    if (fPassword.input.value !== fConfirmar.input.value) {
      errorDiv.textContent = 'Las contraseñas no coinciden.';
      errorDiv.style.display = 'block';
      return;
    }
 
    btnRegistrar.disabled = true;
    btnRegistrar.textContent = 'Registrando...';
 
    try {
      await authService.registrar({
        nombres: fNombres.input.value.trim(),
        apellidos: fApellidos.input.value.trim(),
        usuario: fUsuario.input.value.trim(),
        correo: fCorreo.input.value.trim(),
        password: fPassword.input.value
      });
 
      alert('¡Cuenta creada con éxito! Ahora puedes iniciar sesión.');
      window.location.hash = '#/login';
    } catch (err) {
      errorDiv.textContent = err.message;
      errorDiv.style.display = 'block';
      btnRegistrar.disabled = false;
      btnRegistrar.textContent = 'Registrarse';
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
