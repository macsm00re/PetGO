document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form submission
        let isValid = true;

        // Name validation
        const name = document.getElementById('name').value.trim();
        if (name === "") {
            document.getElementById('nameError').textContent = "El nombre es obligatorio.";
            isValid = false;
        } else {
            document.getElementById('nameError').textContent = "";
        }

        // Email validation
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = "Por favor, ingresa un correo válido.";
            isValid = false;
        } else {
            document.getElementById('emailError').textContent = "";
        }

        // Message validation
        const message = document.getElementById('message').value.trim();
        if (message === "") {
            document.getElementById('messageError').textContent = "El mensaje no puede estar vacío.";
            isValid = false;
        } else {
            document.getElementById('messageError').textContent = "";
        }

        // If valid, show success message
        if (isValid) {
            alert("Formulario enviado exitosamente");
            // Logic to send the data to the server can be added here
        }
    });
    
});
