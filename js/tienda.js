
/**
 * Configuración del carrusel Swiper para la sección "Productos Destacados" en la página Tienda
 * 
 * Este carrusel muestra los productos más destacados de la tienda con navegación completa:
 * - Paginación con puntos interactivos
 * - Botones de navegación anterior/siguiente
 * - Loop infinito para navegación continua
 * - Diseño responsive que se adapta a diferentes dispositivos
 */

const productosSwiper = new Swiper('.productos', {
  slidesPerView: 1.2,        
  centeredSlides: true,     
  spaceBetween: 10,          
  loop: true,    

  // Configuración de paginación con puntos
  pagination: {
    el: '.swiper-pagination',
    clickable: true,         
  },
  
  // Configuración de botones de navegación
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // Puntos de quiebre responsive para diferentes tamaños de pantalla
  breakpoints: {
    480: {                   // Pantallas >= 480px
      slidesPerView: 1,
      spaceBetween: 15
    },
    768: {                   // Pantallas >= 768px (tablets)
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    1024: {                  // Pantallas >= 1024px (desktop)
      slidesPerView: 3,
      spaceBetween: 10
    },
  },
});