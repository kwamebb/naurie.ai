// Replace pixelated icons with smooth SVG icons
(function() {
  function replaceIcons() {
    // Smooth chevron right icon
    const smoothChevronRight = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>`;
    
    // Smooth arrow up-right icon
    const smoothArrowUpRight = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>`;
    
    // Find all pixelated chevron icons
    const chevronElements = document.querySelectorAll('.framer-12nvd8w');
    chevronElements.forEach(el => {
      el.style.backgroundImage = 'none';
      el.innerHTML = smoothChevronRight;
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.style.justifyContent = 'center';
      el.querySelector('svg').style.color = 'white';
    });
    
    // Find all pixelated arrow icons
    const arrowElements = document.querySelectorAll('.framer-1lemql');
    arrowElements.forEach(el => {
      el.style.backgroundImage = 'none';
      el.innerHTML = smoothArrowUpRight;
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.style.justifyContent = 'center';
      el.querySelector('svg').style.color = '#2F2D2D';
    });
    
    // Also fix any other pixelated SVG elements
    const pixelatedSVGs = document.querySelectorAll('[style*="image-rendering:auto"]');
    pixelatedSVGs.forEach(el => {
      if (el.style.backgroundImage && el.style.backgroundImage.includes('data:image/svg')) {
        // Check if it's a chevron or arrow based on the SVG content
        if (el.style.backgroundImage.includes('chevron') || el.className.includes('12nvd8w')) {
          el.style.backgroundImage = 'none';
          el.innerHTML = smoothChevronRight;
          el.style.display = 'flex';
          el.style.alignItems = 'center';
          el.style.justifyContent = 'center';
          const svg = el.querySelector('svg');
          if (svg) svg.style.color = 'white';
        } else if (el.style.backgroundImage.includes('arrow') || el.className.includes('1lemql')) {
          el.style.backgroundImage = 'none';
          el.innerHTML = smoothArrowUpRight;
          el.style.display = 'flex';
          el.style.alignItems = 'center';
          el.style.justifyContent = 'center';
          const svg = el.querySelector('svg');
          if (svg) svg.style.color = '#2F2D2D';
        }
      }
    });
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(replaceIcons, 100);
    });
  } else {
    setTimeout(replaceIcons, 100);
  }
  
  // Also run after a delay to catch any dynamically loaded content
  setTimeout(replaceIcons, 500);
})();