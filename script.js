document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    document.getElementById('formMessage').style.display = 'block';

    setTimeout(() => {
        document.getElementById('formMessage').style.display = 'none';
        document.getElementById('contactForm').reset();
    }, 3000);
});
