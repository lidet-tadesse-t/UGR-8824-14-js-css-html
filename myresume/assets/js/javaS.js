
document.addEventListener('DOMContentLoaded', function() {
    const typedElement = document.querySelector('.typed');
    const typedItems = typedElement.getAttribute('data-typed-items').split(',');
  
    new Typed('.typed', {
      strings: typedItems,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.menu');
  
    // Toggle menu when the menu icon is clicked
    menuToggle.addEventListener('change', function() {
      menu.style.display = this.checked ? 'block' : 'none';
    });
  });