// Toggle menú responsive
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
  navMenu.classList.toggle('active');
});

// Formulario simple con JS
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Validación simple ya hecha por required en HTML
    formMessage.textContent = 'Gracias por contactarnos, ' + form.nombre.value + '. Pronto te responderemos.';
    form.reset();
  });
}

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
      // Obtener URL absoluta del enlace
      const linkUrl = new URL(this.href);
      // Obtener URL actual
      const currentUrl = window.location;
  
      // Comparar pathname y search (ruta y query string)
      if (linkUrl.pathname === currentUrl.pathname && linkUrl.search === currentUrl.search) {
        // Si es la misma página, prevenir recarga
        event.preventDefault();
        // Opcional: puedes añadir alguna acción, como cerrar menú responsive
        console.log('Ya estás en esta página, no se recarga.');
      }
    });
  });

  
// //efectos en las imagenes de ancho completo al pasar sobre el boton.
// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelectorAll('.full-width-image-container').forEach(container => {
//       const btn = container.querySelector('.floating-btn');
//       const img = container.querySelector('.background-image');
  
//       if (btn && img) {
//         btn.addEventListener('mouseenter', () => img.classList.add('blurred'));
//         btn.addEventListener('mouseleave', () => img.classList.remove('blurred'));
//         btn.addEventListener('focus', () => img.classList.add('blurred'));
//         btn.addEventListener('blur', () => img.classList.remove('blurred'));
//       }
//     });
//   });
  
