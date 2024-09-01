document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    if (name && phone) {
        alert(`Thank you for contacting us, ${name}! We will get back to you shortly.`);
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
