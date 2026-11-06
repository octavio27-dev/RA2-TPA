// Página provisional para módulos que aún no tienen pantalla propia
export function ModuloPendientePage(nombreModulo) {
  const contenedor = document.createElement('div');
  const titulo = document.createElement('h2');
  titulo.textContent = `Módulo de ${nombreModulo}`;
  const texto = document.createElement('p');
  texto.style.color = 'var(--text-muted)';
  texto.style.marginTop = '0.5rem';
  texto.textContent = 'Este módulo está en desarrollo.';
  contenedor.appendChild(titulo);
  contenedor.appendChild(texto);
  return contenedor;
}
