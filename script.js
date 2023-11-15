document.addEventListener('DOMContentLoaded', function() {
  var scrollToTopBtn = document.querySelector('#scrollToTopBtn');

  // Show/hide the button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });

  // Scroll to top when the button is clicked
  scrollToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});


const sections = document.querySelectorAll(".animate-section");

const options = {
  threshold: 0.5,
};

const animateSection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
      observer.unobserve(entry.target);
    }
  });
};

const sectionObserver = new IntersectionObserver(animateSection, options);

sections.forEach((section) => {
  sectionObserver.observe(section);
});


