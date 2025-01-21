// Script to handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if(name && email && message) {
        alert("Thank you for your message, " + name + "!");
        document.getElementById('contact-form').reset(); // Reset form after submission
    } else {
        alert("Please fill out all fields.");
    }
});
