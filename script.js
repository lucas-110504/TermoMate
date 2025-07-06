AOS.init({
  duration: 1000,
  once: false
});



// =======================
// Funciones cuando el DOM ya está listo
// =======================
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.getElementById('navbarNav');
  const navLinks = document.querySelectorAll('.nav-link');
  const boton = document.querySelector(".btn-dark");

  // Efecto de scroll en navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Cerrar el menú hamburguesa al hacer clic en un enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    });
  });
});

// =======================
// Cerrar menú al hacer clic fuera (cuando está abierto)
// =======================
document.addEventListener('click', function (event) {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (
    navbarCollapse.classList.contains('show') &&
    !navbarCollapse.contains(event.target) &&
    !navbarToggler.contains(event.target)
  ) {
    new bootstrap.Collapse(navbarCollapse, {
      toggle: true
    }).hide();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('.contact-form');
  const nombre = document.getElementById('nombre');
  const apellido = document.getElementById('apellido');
  const email = document.getElementById('email');
  const mensaje = document.getElementById('mensaje');
  const contador = document.getElementById('contador-caracteres');

  const errores = {
    nombre: document.getElementById('error-nombre'),
    apellido: document.getElementById('error-apellido'),
    email: document.getElementById('error-email'),
    mensaje: document.getElementById('error-mensaje')
  };

  mensaje.addEventListener("input", () => {
    contador.innerText = `${mensaje.value.length}/300 caracteres`;
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let valido = true;

    // Limpiar errores
    for (const error of Object.values(errores)) {
      error.innerText = "";
    }

    if (nombre.value.trim() === "") {
      errores.nombre.innerText = "El nombre es obligatorio.";
      valido = false;
    }

    if (apellido.value.trim() === "") {
      errores.apellido.innerText = "El apellido es obligatorio.";
      valido = false;
    }

    if (!email.value.includes("@") || email.value.trim() === "") {
      errores.email.innerText = "Correo no válido.";
      valido = false;
    }

    if (mensaje.value.trim().length < 10) {
      errores.mensaje.innerText = "El mensaje debe tener al menos 10 caracteres.";
      valido = false;
    }

    if (valido) {
      form.reset();
      contador.innerText = "";
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        text: 'Gracias por contactarnos. Te responderemos pronto.',
        confirmButtonColor: '#111'
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const imagenes = document.querySelectorAll('#productos img');
  console.log("Script CARGADO");

  if (document.body.classList.contains('body-login')) {
    console.log("Página de login detectada");
    // ... tu lógica acá
  } else {
    console.log("No es la página de login");
  }
  imagenes.forEach(img => {
    img.addEventListener('click', (e) => {
      e.preventDefault();
      e.target.blur(); // Quita foco para evitar scroll

      Swal.fire({
        icon: 'info',
        title: 'Sin stock',
        text: 'No hay más productos, pronto tendremos stock.',
        confirmButtonColor: '#111'
      });
    });
  });

  const btnVerMas = document.querySelector('#productos button');

  btnVerMas.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.blur(); // Quita foco para evitar scroll

    Swal.fire({
      icon: 'warning',
      title: 'Sin stock',
      text: 'No hay stock.',
      confirmButtonColor: '#111'
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Solo se ejecuta si estamos en login.html (usa body con clase "body-login")
  if (document.body.classList.contains('body-login')) {
    const formLogin = document.querySelector('form');
    const emailInput = formLogin.querySelector('input[type="email"]');
    const passwordInput = formLogin.querySelector('input[type="password"]');

    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (!email || !password) {
        Swal.fire({
          icon: 'error',
          title: 'Campos incompletos',
          text: 'Por favor, completa el email y la contraseña.',
          confirmButtonColor: '#111'
        });
        return;
      }

      // Simulación de login exitoso
      Swal.fire({
        icon: 'success',
        title: '¡Bienvenido!',
        text: 'Inicio de sesión exitoso.',
        confirmButtonColor: '#111'
      }).then(() => {
        formLogin.reset();
        // Redirección opcional:
        // window.location.href = "index.html";
      });
    });
  }
});

    document.addEventListener('DOMContentLoaded', function () {
      const logo = document.getElementById('logo-login');
      if (logo) {
        logo.addEventListener('click', () => {
          window.location.href = 'index.html';
        });
      }
    });