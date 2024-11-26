document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Display success message after form submission
    document.getElementById('formMessage').style.display = 'block';
    
    // Clear the form fields after 3 seconds
    setTimeout(() => {
        document.getElementById('formMessage').style.display = 'none';
        document.getElementById('contactForm').reset();
    }, 3000);
});
