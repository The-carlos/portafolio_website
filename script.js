window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.zoom-section');
    var windowHeight = window.innerHeight;
    
    sections.forEach(function(section) {
      var sectionTop = section.getBoundingClientRect().top;
      var sectionBottom = section.getBoundingClientRect().bottom;
      
      if (sectionTop < windowHeight && sectionBottom >= 0) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  });
  