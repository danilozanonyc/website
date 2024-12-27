/* ==================================================
     LOADING
  ================================================== */

  document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
  
    // Oculta el loader después de que la página esté completamente cargada
    window.addEventListener("load", () => {
      setTimeout(() => {
        loader.classList.add("hidden");
      }, 1500); // Agrega un retraso para que la transición sea visible
    });
  });
  
  /* ==================================================
       HEADER
    ================================================== */
  
    document.addEventListener("DOMContentLoaded", () => {
      const navbar = document.querySelector(".navbar");
      const navLinks = document.querySelectorAll(".nav-link");
    
      // Cambiar estilo del navbar al hacer scroll
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    
      // Resaltar enlace activo
      const sections = document.querySelectorAll("section");
      const options = {
        threshold: 0.5, // Activa el enlace si el 50% de la sección es visible
      };
    
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.remove("active");
              if (link.getAttribute("href").slice(1) === entry.target.id) {
                link.classList.add("active");
              }
            });
          }
        });
      }, options);
    
      sections.forEach((section) => observer.observe(section));
    });
  



// Selección de botones y contenido
const langElements = document.querySelectorAll('[data-lang]');
const langButtons = document.querySelectorAll('.dropdown-item');

// Función para cambiar el idioma
function switchLanguage(language) {
  langElements.forEach((element) => {
    if (element.getAttribute('data-lang') === language) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
}

// Asignar eventos a los botones del submenú
langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const language = button.id.split('-')[1]; // Extrae "en" o "es" del id
    switchLanguage(language);
  });
});

// Idioma predeterminado
switchLanguage('en');

// Función para cambiar idioma
function switchLanguage(language) {
  // Cambiar texto del botón
  const buttonText = document.getElementById('btn-text');
  if (language === 'en') {
    buttonText.textContent = 'Get Started!';
  } else if (language === 'es') {
    buttonText.textContent = '¡Empieza ahora!';
  }

  // Mostrar/ocultar texto según idioma
  document.querySelectorAll('[data-lang]').forEach((element) => {
    if (element.getAttribute('data-lang') === language) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
}

// Idioma predeterminado
switchLanguage('en');

// Asignar evento a los botones de idioma
document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
document.getElementById('lang-es').addEventListener('click', () => switchLanguage('es'));

  
  /* ==================================================
       ANIMACIONES AL CARGAR
    ================================================== */
  window.addEventListener("load", () => {
    // GSAP Animations for the Banner
    gsap.timeline()
      .from(".background-video", {
        duration: 1.5,
        scale: 1.1,
        opacity: 0.5,
      })
      .from(".video-overlay", {
        duration: 1.2,
        opacity: 0,
      }, "-=1") // Inicia junto con el video
      .from("#banner-title", {
        duration: 1.5,
        y: -20,
        opacity: 0,
        ease: "power3.out",
      })
      .from("#banner-subtitle", {
        duration: 1.5,
        y: 20,
        opacity: 0,
        ease: "power3.out",
      }, "-=1") // Comienza antes de que termine la animación del título
      .from("#banner-btn", {
        duration: 1.2,
        scale: 0.8,
        opacity: 0,
        ease: "elastic.out(1, 0.75)",
      }, "-=1"); // Comienza medio segundo antes de que termine la animación del subtítulo
  });
  
  function typeEffect(element, text, delay = 50) { // Ajusta el delay a 50ms
    let i = 0;
  
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i); // Añadir letra por letra
        i++;
        setTimeout(type, delay); // Esperar entre letras
      } else {
        console.log("Texto completado");
      }
    }
  
    type(); // Inicia la función
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("banner-title");
    title.innerHTML = ""; // Limpia el contenido antes de empezar
    typeEffect(title, "World-Class Salsa Training", 50); // Ajusta el retraso a 50ms
  });
  
  
  
  
  
  // BOTÓN INTERACTIVO
  const bannerBtn = document.querySelector("#banner-btn");
  
  // Hover Animation
  bannerBtn.addEventListener("mouseenter", () => {
    gsap.to(bannerBtn, { duration: 0.3, scale: 1.1, backgroundColor: "#28a745" });
  });
  bannerBtn.addEventListener("mouseleave", () => {
    gsap.to(bannerBtn, { duration: 0.3, scale: 1, backgroundColor: "#32cd32" });
  });
  
  // Bounce Animation
  gsap.to(bannerBtn, {
    duration: 1,
    y: -10,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
  
  // SCROLL REVEAL
  const bannerContent = document.querySelector(".banner-content");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(bannerContent, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 });
        }
      });
    },
    { threshold: 0.5 }
  );
  
  observer.observe(bannerContent);
  
  
  /* ==================================================
       PARTICULAS
    ================================================== */
  particlesJS("banner", {
    particles: {
      number: {
        value: 50,
        density: { enable: true, value_area: 800 },
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: false },
      move: { enable: true, speed: 1, random: true },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
      },
      modes: {
        grab: { distance: 200, line_linked: { opacity: 0.5 } },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  });
  
  
  
  /* ==================================================
       STATS
    ================================================== */
  
    document.addEventListener("DOMContentLoaded", () => {
      const counters = document.querySelectorAll(".counter"); // Selecciona todos los contadores
    
      // Configuración del observador
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const counter = entry.target; // Obtén el elemento del contador
              const target = +counter.getAttribute("data-target"); // Convierte el valor de data-target a número
              const speed = 100; // Velocidad de animación
    
              const updateCount = () => {
                const current = +counter.innerText; // Obtén el valor actual del contador
                const increment = Math.ceil(target / speed); // Define el incremento
    
                if (current < target) {
                  counter.innerText = current + increment; // Actualiza el valor del contador
                  setTimeout(updateCount, 20); // Llama recursivamente a la función
                } else {
                  counter.innerText = target; // Asegúrate de que el contador termine en el valor objetivo
                }
              };
    
              updateCount(); // Inicia la animación
              observer.unobserve(counter); // Deja de observar este elemento
            }
          });
        },
        { threshold: 0.5 } // La animación inicia cuando el elemento es visible al 50%
      );
    
      // Observa cada contador
      counters.forEach(counter => observer.observe(counter));
    });
  
  
  /* ==================================================
       ESTILOS DINAMICOS PARA ABOUT ME
    ================================================== */
  
  document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector("#about");
    const aboutElements = document.querySelectorAll("#about img, #about h2, #about p, #about ul, #about .btn-info");
  
    // GSAP y Observer para animaciones
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Aplica animaciones con GSAP
            gsap.fromTo(
              aboutElements,
              { opacity: 0, y: 50 }, // Estado inicial
              { opacity: 1, y: 0, stagger: 0.2, duration: 1.2, ease: "power2.out" } // Animación
            );
  
            // Deja de observar después de activar las animaciones
            observer.unobserve(aboutSection);
          }
        });
      },
      { threshold: 0.3 } // Se activa cuando el 30% de la sección es visible
    );
  
    observer.observe(aboutSection);
  });
  
  
  document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar todos los iconos sociales
    const socialIcons = document.querySelectorAll(".social-icon");
  
    // Agregar animaciones al pasar el mouse
    socialIcons.forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, { scale: 1.2, duration: 0.3, ease: "power1.out" });
      });
  
      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, { scale: 1, duration: 0.3, ease: "power1.out" });
      });
    });
  });
  
  
  /* ==================================================
       WHATSAPP
    ================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    const phoneNumber = "+13478325040"; // Número de WhatsApp con código de país
    const buttons = document.querySelectorAll(".book-now");
  
    buttons.forEach(button => {
      button.addEventListener("click", event => {
        event.preventDefault();
  
        // Obtén los datos del paquete desde el botón
        const packageName = button.dataset.package;
        const price = button.dataset.price;
        const classes = button.dataset.classes;
  
        // Genera el mensaje dinámico
        const customMessage = `Hi, I am interested in the ${packageName}. Here are the details:
  - Price: $${price}
  - Classes: ${classes}
  
  Can you provide more information or help me book this package?`;
  
        // Codifica el mensaje para incluirlo en el enlace de WhatsApp
        const encodedMessage = encodeURIComponent(customMessage);
  
        // Crea el enlace dinámico
        const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
        // Redirige al enlace de WhatsApp
        window.open(waLink, "_blank");
      });
    });
  });
  
    /* ==================================================
  FAQ
    ================================================== */
  
    document.querySelectorAll(".faq-question").forEach((item) => {
      item.addEventListener("click", () => {
        const answer = item.nextElementSibling;
        const button = item.querySelector(".toggle-btn");
    
        // Verificar si la respuesta ya está abierta
        if (answer.classList.contains("open")) {
          answer.classList.remove("open"); // Cierra la respuesta
          button.textContent = "+"; // Cambia el botón a '+'
        } else {
          // Cierra cualquier otra respuesta abierta
          document.querySelectorAll(".faq-answer.open").forEach((openAnswer) => {
            openAnswer.classList.remove("open");
            openAnswer.previousElementSibling.querySelector(".toggle-btn").textContent = "+";
          });
    
          // Abre la respuesta actual
          answer.classList.add("open");
          button.textContent = "-"; // Cambia el botón a '-'
        }
      });
    });
    
  
  /* ==================================================
    MOVIMIENTO SMOOTH
    ================================================== */
  
  // Obtén todos los enlaces que comienzan con '#'
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Agrega un evento al hacer clic en esos enlaces
    anchor.addEventListener('click', function (e) {
      // Previene el comportamiento predeterminado (salto directo)
      e.preventDefault();
  
      // Desplaza suavemente a la sección especificada en el atributo 'href'
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'  // Esto hace que el desplazamiento sea suave
      });
    });
  });
  
  
  