  /* ==================================================
       HEADER
    ================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    // Cambiar estilo del navbar al hacer scroll
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });

    // Resaltar enlace activo
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const activeId = entry.target.id;
          for (const link of navLinks) {
            link.classList.toggle("active", link.getAttribute("href").slice(1) === activeId);
          }
        }
      }
    }, { threshold: 0.5 });

    for (const section of sections) observer.observe(section);
  });

// Selección de botones y contenido
const langElements = document.querySelectorAll('[data-lang]');
const langButtons = document.querySelectorAll('.dropdown-item');
const buttonText = document.getElementById('btn-text');

// Función optimizada para cambiar idioma
function switchLanguage(language) {
  // Cambiar texto del botón
  buttonText.textContent = language === 'en' ? 'Get Started!' : '¡Empieza ahora!';

  // Mostrar/ocultar texto según idioma
  for (const element of langElements) {
    element.style.display = element.getAttribute('data-lang') === language ? 'block' : 'none';
  }
}

// Asignar eventos a los botones
for (const lang of ['en', 'es']) {
  document.getElementById(`lang-${lang}`).addEventListener('click', () => switchLanguage(lang));
}

// Idioma predeterminado
switchLanguage('en');

/* ==================================================
     ANIMACIONES AL CARGAR
  ================================================== */
window.addEventListener("load", () => {
  gsap.timeline()
    .from(".background-video", {
      duration: 1.5,
      scale: 1.1,
      opacity: 0.5,
    })
    .from(".video-overlay", {
      duration: 1.2,
      opacity: 0,
    }, "-=1")
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
    }, "-=1")
    .from("#banner-btn", {
      duration: 1.2,
      scale: 0.8,
      opacity: 0,
      ease: "elastic.out(1, 0.75)",
    }, "-=1");
});

function typeEffect(element, text, delay = 50) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i++);
      setTimeout(type, delay);
    }
  }

  type();
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect(document.getElementById("banner-title"), "World-Class Salsa Training", 50);
});

// BOTÓN INTERACTIVO
const bannerBtn = document.querySelector("#banner-btn");
const bannerContent = document.querySelector(".banner-content");

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
new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        gsap.fromTo(bannerContent, 
          { opacity: 0, y: 100 }, 
          { opacity: 1, y: 0, duration: 1 }
        );
      }
    }
  },
  { threshold: 0.5 }
).observe(bannerContent);

/* ==================================================
     PARTICULAS
  ================================================== */
particlesJS("banner", {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
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
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = +counter.dataset.target;
          const increment = Math.ceil(target / 100);

          const updateCount = () => {
            const current = +counter.innerText;
            if (current < target) {
              counter.innerText = current + increment;
              setTimeout(updateCount, 20);
            } else {
              counter.innerText = target;
            }
          };

          updateCount();
          observer.unobserve(counter);
        }
      }
    },
    { threshold: 0.5 }
  );

  for (const counter of document.querySelectorAll(".counter")) {
    observer.observe(counter);
  }
});

/* ==================================================
     ESTILOS DINAMICOS PARA ABOUT ME
  ================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector("#about");
  const aboutElements = document.querySelectorAll("#about img, #about h2, #about p, #about ul, #about .btn-info");

  new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          gsap.fromTo(
            aboutElements,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, stagger: 0.2, duration: 1.2, ease: "power2.out" }
          );
          observer.unobserve(aboutSection);
        }
      }
    },
    { threshold: 0.3 }
  ).observe(aboutSection);

  // Social Icons Animation
  for (const icon of document.querySelectorAll(".social-icon")) {
    const hoverAnimation = { scale: 1.2, duration: 0.3, ease: "power1.out" };
    const leaveAnimation = { scale: 1, duration: 0.3, ease: "power1.out" };
    
    icon.addEventListener("mouseenter", () => gsap.to(icon, hoverAnimation));
    icon.addEventListener("mouseleave", () => gsap.to(icon, leaveAnimation));
  }
});

/* ==================================================
     WHATSAPP
  ================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const phoneNumber = "+13478325040";

  for (const button of document.querySelectorAll(".book-now")) {
    button.addEventListener("click", event => {
      event.preventDefault();
      
      const { package: packageName, price, classes } = button.dataset;
      const message = `Hi, I am interested in the ${packageName}. Here are the details:
- Price: $${price}
- Classes: ${classes}

Can you provide more information or help me book this package?`;

      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    });
  }
});

/* ==================================================
     BOOK NOW
  ================================================== */
for (const button of document.querySelectorAll(".book-now")) {
  const animations = {
    hover: { duration: 0.3, scale: 1.1, backgroundColor: "#0466c8" },
    leave: { duration: 0.3, scale: 1, backgroundColor: "#0466c8" },
    bounce: { duration: 1.2, y: -15, repeat: -1, yoyo: true, ease: "power1.inOut" }
  };

  button.addEventListener("mouseenter", () => gsap.to(button, animations.hover));
  button.addEventListener("mouseleave", () => gsap.to(button, animations.leave));
  gsap.to(button, animations.bounce);
}

/*TABS*/
document.addEventListener("DOMContentLoaded", () => {
  function initTabs(card) {
    const tabs = card.querySelectorAll(".tab-link");
    const contents = card.querySelectorAll(".tab-content");

    for (const tab of tabs) {
      tab.addEventListener("click", () => {
        for (const t of tabs) t.classList.remove("active");
        for (const content of contents) content.classList.remove("active");

        tab.classList.add("active");
        card.querySelector(`#${tab.dataset.tab}`)?.classList.add("active");
      });
    }
  }

  for (const card of document.querySelectorAll(".card")) {
    initTabs(card);
  }
});

/* ==================================================
     FAQ
  ================================================== */
for (const question of document.querySelectorAll(".faq-question")) {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const button = question.querySelector(".toggle-btn");
    const isOpen = answer.classList.contains("open");

    // Cerrar todas las respuestas abiertas
    for (const openAnswer of document.querySelectorAll(".faq-answer.open")) {
      openAnswer.classList.remove("open");
      openAnswer.previousElementSibling.querySelector(".toggle-btn").textContent = "+";
    }

    // Alternar estado actual
    answer.classList.toggle("open", !isOpen);
    button.textContent = isOpen ? "+" : "-";
  });
}

/* ==================================================
  MOVIMIENTO SMOOTH
  ================================================== */
for (const anchor of document.querySelectorAll('a[href^="#"]')) {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
}
