/**
 * Senior Developer Note: 
 * We use DOMContentLoaded to ensure the HTML elements exist 
 * before we try to attach event listeners.
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // Select elements
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const contactForm = document.getElementById('contact-form');

    // 1. Mobile Menu Toggle
    if (burger && nav) {
        burger.addEventListener('click', () => {
            // Toggle the visibility class
            nav.classList.toggle('nav-active');
            
            // Optional: Log to console to verify the click is working
            console.log("Menu toggled. Current state visible:", nav.classList.contains('nav-active'));
        });
    }

    // 2. Simple Form Validation (Contact Page Only)
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const feedback = document.getElementById('form-feedback');

            if (name === "" || email === "") {
                alert("Please fill in all fields.");
            } else {
                feedback.classList.remove('hidden');
                feedback.innerText = "Thank you! We will be in touch.";
                contactForm.reset();
            }
        });
    }
});