// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Function to initialize dark mode based on saved preference
function initializeDarkMode() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// Initialize dark mode when page loads
document.addEventListener('DOMContentLoaded', initializeDarkMode);
