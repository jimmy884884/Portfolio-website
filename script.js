// Initialize variables
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const totalTestimonials = testimonials.length;
let intervalId;

// Function to show the current testimonial
function showTestimonial(index) {
    testimonials.forEach((item, i) => {
        item.classList.remove('active'); // Remove active class from all items
        if (i === index) {
            item.classList.add('active'); // Add active class to the current item
        }
    });
}

// Function to cycle through testimonials
function cycleTestimonials() {
    showTestimonial(currentIndex);
    currentIndex = (currentIndex + 1) % totalTestimonials; // Move to the next index
}

// Start cycling testimonials
function startCycling() {
    intervalId = setInterval(cycleTestimonials, 5000); // Change testimonial every 5 seconds
}

// Pause cycling on hover
function pauseCycling() {
    clearInterval(intervalId);
}

// Resume cycling
function resumeCycling() {
    startCycling();
}

// Show the first testimonial initially
showTestimonial(currentIndex);

// Start cycling testimonials
startCycling();

// Add event listeners for hover effects
const testimonialContainer = document.querySelector('.testimonial-container');
testimonialContainer.addEventListener('mouseenter', pauseCycling);
testimonialContainer.addEventListener('mouseleave', resumeCycling);

// Tab navigation function
function openTab(event, tabName) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.style.display = 'none'; // Hide all tabs
    });
    document.getElementById(tabName).style.display = 'block'; // Show the selected tab
}

// Initialize the first tab to be visible
document.addEventListener('DOMContentLoaded', () => {
    openTab(event, 'about'); // Show the About tab by default
});