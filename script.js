const sideMenu = document.getElementById("sideMenu");

function openMenu() {
  sideMenu.style.transform = "translateX(0)";
}

function closeMenu() {
  sideMenu.style.transform = "translateX(100%)";
}

// Scroll reveal animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(el => {
  observer.observe(el);
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      if (sideMenu && sideMenu.style.transform === "translateX(0)") {
        closeMenu();
      }
    }
  });
});

// Add stagger animation to skill cards
window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.skill-card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
});

// Parallax effect on hero image
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.animate-float');
  
  parallaxElements.forEach((el) => {
    if (scrolled < window.innerHeight) {
      el.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav');
  if (window.scrollY > 50) {
    navbar.classList.add('shadow-lg');
  } else {
    navbar.classList.remove('shadow-lg');
  }
});

// Add scroll animations for cards
const revealCards = () => {
  const cards = document.querySelectorAll('.experience-card, .project-card, .skill-card');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);

// Animate counters (if you add them)
const animateCounters = () => {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = target / 100;
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.ceil(current);
        setTimeout(updateCounter, 30);
      } else {
        counter.textContent = target;
      }
    };
    
    updateCounter();
  });
};

// Form validation and submission feedback
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    const inputs = this.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = '#ef4444';
      } else {
        input.style.borderColor = '#d1d5db';
      }
    });
    
    if (!isValid) {
      e.preventDefault();
    }
  });
}

// Mobile menu close on outside click
document.addEventListener('click', (e) => {
  if (sideMenu && !sideMenu.contains(e.target) && !document.querySelector('button[onclick="openMenu()"]').contains(e.target)) {
    if (sideMenu.style.transform === "translateX(0)") {
      closeMenu();
    }
  }
});

console.log('Portfolio loaded successfully!');
