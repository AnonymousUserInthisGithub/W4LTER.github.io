document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_4le8px3', 'template_9m1sk1p', this)
            .then(function() {
                document.getElementById('form-message').innerHTML = "Message sent successfully!";
            }, function(error) {
                document.getElementById('form-message').innerHTML = "Failed to send the message. Error: " + error;
            });

        this.reset();  // Reset the form after submission
    });
});
