document.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) { // Adjust the scroll distance as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const sidePanel = document.querySelector('.side-panel');
    const closeBtn = document.querySelector('.side-panel .closebtn');
    const overlay = document.querySelector('.side-panel-overlay');

    // Function to open the side panel
    function openSidePanel() {
        sidePanel.classList.add('open');
        overlay.style.display = 'block';
        hamburger.style.display = 'none'; // Hide the hamburger
    }

    // Function to close the side panel
    function closeSidePanel() {
        sidePanel.classList.remove('open');
        overlay.style.display = 'none';
        hamburger.style.display = 'block'; // Show the hamburger
    }

    // Add event listeners for the hamburger and close button
    hamburger.addEventListener('click', openSidePanel);
    closeBtn.addEventListener('click', closeSidePanel);

    overlay.addEventListener('click', closeSidePanel);
});