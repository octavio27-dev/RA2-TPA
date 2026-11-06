# Registro de Validaciones del Sistema (RA2)
 
| Campo | Regla Aplicada | Mensaje de Error Visual |
|-------|----------------|--------------------------|
| Usuario | Mínimo 4 caracteres, sin espacios | "El usuario debe tener al menos 4 caracteres y no contener espacios" |
| Correo | Formato RFC regex válido | "El formato del correo electrónico no es válido" |
| Contraseña | 8 caracteres, 1 mayúscula, 1 número | "La contraseña debe contener al menos 8 caracteres, una mayúscula y un número" |
| RUC Perú | Algoritmo módulo 11 (11 dígitos) | "El número de RUC peruano no es válido" |
| DNI Perú | Exactamente 8 dígitos numéricos | "El DNI debe contener 8 dígitos numéricos" |
