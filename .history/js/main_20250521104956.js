document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    // Función para alternar el menú
    const toggleMenu = () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        
        // Actualizar estado ARIA
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        
        // Alternar clases
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Bloquear/desbloquear scroll
        body.classList.toggle('no-scroll', !isExpanded);
    };

    // Evento click en el botón
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Evitar propagación
        toggleMenu();
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !e.target.closest('.nav-menu') && 
            !e.target.closest('.menu-toggle')) {
            toggleMenu();
        }
    });

    // Cerrar menú al hacer click en enlaces
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    // Generar calendario dinámico
function generarCalendario() {
  const meses = document.querySelectorAll('.mes-calendario');
  
  meses.forEach((mes, index) => {
    const fecha = new Date();
    fecha.setMonth(fecha.getMonth() + index);
    
    const mesActual = fecha.toLocaleString('default', { month: 'long' });
    const año = fecha.getFullYear();
    mes.querySelector('.mes-titulo').textContent = `${mesActual} ${año}`;
    
    const primerDia = new Date(fecha.getFullYear(), fecha.getMonth(), 1).getDay();
    const ultimoDia = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate();
    
    let diasHTML = '';
    
    // Días vacíos iniciales
    for(let i = 1; i < primerDia; i++) {
      diasHTML += '<span class="dia-vacio"></span>';
    }
    
    // Días del mes
    for(let i = 1; i <= ultimoDia; i++) {
      const claseEvento = (i % 5 === 0) ? 'dia-evento' : '';
      diasHTML += `<span class="${claseEvento}">${i}</span>`;
    }
    
    mes.querySelector('.dias-mes').innerHTML = diasHTML;
  });
}

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', generarCalendario);
});