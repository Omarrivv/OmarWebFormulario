document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registroForm');
  const aceptarCondiciones = document.getElementById('aceptarCondiciones');
  const contrasena = document.getElementById('contrasena');
  // Habilitar el botón de envío cuando se aceptan las condiciones
  aceptarCondiciones.addEventListener('change', function() {
    form.querySelector('button').disabled = !aceptarCondiciones.checked;
  });
  // Validar formato de fecha
  const fechaNacimiento = document.getElementById('fechaNacimiento');
  fechaNacimiento.addEventListener('input', function() {
    const regexFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!regexFecha.test(fechaNacimiento.value)) {
      fechaNacimiento.setCustomValidity('Formato de fecha inválido. Use dd/mm/aaaa');
    } else {
      fechaNacimiento.setCustomValidity('');
    }
  });

  // Función para mostrar/ocultar la contraseña
  window.mostrarContrasena = function() {
    contrasena.type = contrasena.type === 'password' ? 'text' : 'password';
  };
});
