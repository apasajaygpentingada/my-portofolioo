document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Here you can add code to send the data to a server or email service

    // Display a thank-you message
    alert(`Thank you for your message, ${name}! I will get back to you soon.`);
    
    // Reset the form after submission
    this.reset();
});