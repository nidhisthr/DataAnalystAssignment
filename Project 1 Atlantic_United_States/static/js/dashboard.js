// 1. Select the toggle button and the main document body elements
const themeToggleBtn = document.getElementById('themeToggleBtn');
const bodyElement = document.body;

// 2. Add an event listener to listen for a user click
themeToggleBtn.addEventListener('click', () => {
    // Toggle the 'night-mode' class on and off the body
    bodyElement.classList.toggle('night-mode');
    
    // Smoothly update the button icon text based on the active mode
    if (bodyElement.classList.contains('night-mode')) {
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        themeToggleBtn.textContent = '🌙 Night Mode';
    }
});

