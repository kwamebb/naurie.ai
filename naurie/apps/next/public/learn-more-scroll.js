// Make all "Learn More" buttons scroll to a specific section
(function() {
  function initLearnMoreButtons() {
    // Find all Learn More buttons - check links and their parent containers
    const allLinks = document.querySelectorAll('a');
    let learnMoreButtons = [];
    
    allLinks.forEach(link => {
      // Check the link itself and all its child elements for "Learn More" text
      const linkText = link.textContent || link.innerText || '';
      if (linkText.includes('Learn More')) {
        learnMoreButtons.push(link);
        console.log('Found Learn More button:', link);
      }
    });
    
    if (learnMoreButtons.length === 0) {
      console.log('No Learn More buttons found yet, retrying...');
      setTimeout(initLearnMoreButtons, 500);
      return;
    }
    
    // Find the target section - specifically look for "Fully automated workflow"
    let targetSection = null;
    
    // Search all elements for the exact text (case insensitive)
    const allElements = document.querySelectorAll('*');
    
    for (let element of allElements) {
      const text = element.textContent || element.innerText || '';
      // Look for exact match - "Fully automated workflow" (note the lowercase 'a')
      if (text.trim() === 'Fully automated workflow') {
        console.log('Found exact match for "Fully automated workflow":', element);
        // Get the parent section that contains this heading
        targetSection = element.closest('div[class*="framer-"]');
        // Try to get a higher level parent for better scroll positioning
        if (targetSection && targetSection.parentElement) {
          const grandParent = targetSection.parentElement.closest('div[class*="framer-"]');
          if (grandParent) {
            targetSection = grandParent;
          }
        }
        break;
      }
    }
    
    // If not found with exact match, try case-insensitive partial match
    if (!targetSection) {
      const possibleHeadings = [
        'fully automated workflow',
        'customer calls',
        'intelligent routing'
      ];
      
      const headings = document.querySelectorAll('h1, h2, h3, .framer-text');
      
      for (let heading of headings) {
        const text = (heading.textContent || heading.innerText || '').toLowerCase();
        for (let possibleHeading of possibleHeadings) {
          if (text.includes(possibleHeading)) {
            console.log('Found partial match for heading:', text);
            // Get the parent section
            targetSection = heading.closest('[class*="framer-"]');
            if (!targetSection) {
              targetSection = heading.parentElement;
            }
            break;
          }
        }
        if (targetSection) break;
      }
    }
    
    // If no specific section found, find the first major section after the hero
    if (!targetSection) {
      // Look for the first section after the hero section
      const heroSection = document.querySelector('[data-framer-name="Hero"]');
      if (heroSection && heroSection.parentElement) {
        const allSections = Array.from(heroSection.parentElement.children);
        const heroIndex = allSections.indexOf(heroSection);
        if (heroIndex !== -1 && heroIndex < allSections.length - 1) {
          // Get the next section after hero
          targetSection = allSections[heroIndex + 1];
        }
      }
    }
    
    if (!targetSection) {
      console.log('Target section not found, will retry...');
      setTimeout(initLearnMoreButtons, 500);
      return;
    }
    
    console.log('Found', learnMoreButtons.length, 'Learn More buttons');
    console.log('Found target section:', targetSection);
    
    // Process each Learn More button
    learnMoreButtons.forEach(btn => {
      // Change the href to javascript:void(0) to prevent navigation
      btn.href = 'javascript:void(0)';
      btn.style.cursor = 'pointer';
      
      // Remove any existing click handlers first
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);
      
      // Add our click handler
      newBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        console.log('Learn More clicked, scrolling to section...');
        
        // Smooth scroll to target section with some offset for better visibility
        const yOffset = -80; // Adjust this value to account for fixed headers
        const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
        
        return false;
      }, true); // Use capture phase
    });
    
    console.log('Learn More buttons initialized successfully');
  }
  
  // Start initialization immediately and also on DOM ready
  initLearnMoreButtons();
  
  // Also reinitialize on DOM content loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(initLearnMoreButtons, 100);
    });
  } else {
    // DOM already loaded, init again after a short delay to ensure everything is rendered
    setTimeout(initLearnMoreButtons, 100);
  }
  
  // Also reinitialize after page fully loads (including all resources)
  window.addEventListener('load', function() {
    setTimeout(initLearnMoreButtons, 500);
  });
})();