// Dark mode toggle functionality
(function() {
  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  // Create and inject the theme toggle button in navigation
  function createThemeToggle() {
    // Find the navigation container
    const nav = document.querySelector('.framer-1oqcib4');
    if (!nav) {
      // If nav not found, try again after a short delay
      setTimeout(createThemeToggle, 100);
      return;
    }
    
    // Create toggle button
    const toggle = document.createElement('div');
    toggle.className = 'theme-toggle';
    toggle.innerHTML = '<div class="theme-toggle-slider"></div>';
    
    toggle.addEventListener('click', function() {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
    
    // Insert before the Book a Call button
    nav.appendChild(toggle);
  }
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createThemeToggle);
  } else {
    createThemeToggle();
  }
})();