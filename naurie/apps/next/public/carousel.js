// Carousel functionality for agent images - Fixed centering and labels
(function() {
  let currentSlide = 1; // Start with Julia (middle)
  const totalSlides = 3;
  let initialized = false;
  
  function initCarousel() {
    if (initialized) return;
    
    // Wait for page to fully load
    const agents = [
      document.querySelector('.framer-1nh6oa0'), // Agent 1
      document.querySelector('.framer-1k1rn8i'), // Julia (Agent 2)
      document.querySelector('.framer-1hnwwh3')  // Agent 3
    ];
    
    const navContainer = document.querySelector('.framer-53z6pv');
    const imageStack = document.querySelector('.framer-1ccyvnv');
    
    if (!agents[0] || !agents[1] || !agents[2] || !navContainer || !imageStack) {
      setTimeout(initCarousel, 100);
      return;
    }
    
    // Find navigation buttons - they are divs with background images
    const navButtons = navContainer.querySelectorAll('.framer-12nvd8w, .framer-1lemql');
    if (!navButtons || navButtons.length < 2) {
      setTimeout(initCarousel, 100);
      return;
    }
    
    const prevBtn = navButtons[0];
    const nextBtn = navButtons[1];
    
    // Get the Julia label card
    const juliaCard = document.querySelector('.framer-FHhZU');
    
    // Agent names for the label
    const agentNames = ['Sarah - Receptionist Agent', 'Julia - Receptionist Agent', 'Emma - Sales Agent'];
    
    // Keep all agents visible but adjust opacity for fade effect
    function updateSlides() {
      agents.forEach((agent, index) => {
        if (!agent) return;
        
        // All agents stay in the grid cell, we just control visibility
        agent.style.setProperty('display', 'block', 'important');
        agent.style.transition = 'opacity 0.4s ease';
        
        if (index === currentSlide) {
          // Current slide is fully visible
          agent.style.opacity = '1';
          agent.style.zIndex = '3';
        } else {
          // Other slides are invisible but present for smooth fade
          agent.style.opacity = '0';
          agent.style.zIndex = '1';
        }
      });
      
      // Update the label card with current agent name
      if (juliaCard) {
        const textElement = juliaCard.querySelector('.framer-text');
        if (textElement) {
          textElement.textContent = agentNames[currentSlide];
        }
        juliaCard.style.opacity = '1';
        juliaCard.style.display = 'flex';
      }
    }
    
    // Make buttons clickable
    prevBtn.style.cursor = 'pointer';
    nextBtn.style.cursor = 'pointer';
    
    // Navigation handlers
    prevBtn.onclick = function(e) {
      if (e) e.preventDefault();
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlides();
    };
    
    nextBtn.onclick = function(e) {
      if (e) e.preventDefault();
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlides();
    };
    
    // Set up container as a grid to stack agents in same cell
    imageStack.style.display = 'grid';
    imageStack.style.placeItems = 'center';
    imageStack.style.minHeight = '600px';
    
    // Place all agents in the same grid cell
    agents.forEach(agent => {
      if (agent) {
        agent.style.gridRow = '1';
        agent.style.gridColumn = '1';
      }
    });
    
    // Initialize display
    updateSlides();
    initialized = true;
    console.log('Carousel initialized with centered navigation');
  }
  
  // Start initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
  } else {
    setTimeout(initCarousel, 500);
  }
})();