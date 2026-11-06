// Reglas de validación para formularios y datos
export const validadores = {
  requerido: (valor) => {
    if (typeof valor === 'string') return valor.trim().length > 0;
    return valor !== null && valor !== undefined;
  },
 
  correo: (correo) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(correo).toLowerCase());
  },
 
  usuario: (usuario) => {
    // Mínimo 4 caracteres, sin espacios
    const re = /^\S{4,}$/;
    return re.test(usuario);
  },
 
  contrasena: (pass) => {
    // Mínimo 8 caracteres, al menos una mayúscula y un número
    const re = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return re.test(pass);
  },
 
  rucPeru: (ruc) => {
    // Validación matemática del RUC peruano (11 dígitos)
    if (!/^(10|15|17|20)\d{9}$/.test(ruc)) return false;
    const factores = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    let suma = 0;
    for (let i = 0; i < 10; i++) {
      suma += parseInt(ruc.charAt(i)) * factores[i];
    }
    const residuo = suma % 11;
    const digitoVerificador = 11 - residuo;
    let digitoFinal = digitoVerificador;
    if (digitoVerificador === 10) digitoFinal = 0;
    else if (digitoVerificador === 11) digitoFinal = 1;
 
    return digitoFinal === parseInt(ruc.charAt(10));
  },
 
  dniPeru: (dni) => {
    return /^\d{8}$/.test(dni);
  }
};
