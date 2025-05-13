document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const usernameInput = document.getElementById('nama');
    const emailInput = document.getElementById('email');
    const interestInput = document.getElementById('interest');
    const errorMessages = document.querySelectorAll('.error-message');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Validasi Username
        if (!validateUsername(usernameInput.value)) {
            displayError(errorMessages[0], 'Username harus terdiri dari 3-20 karakter.');
            isValid = false;
        } else {
            clearError(errorMessages[0]);
        }

        // Validasi Email
        if (!validateEmail(emailInput.value)) {
            displayError(errorMessages[1], 'Format email tidak valid.');
            isValid = false;
        } else {
            clearError(errorMessages[1]);
        }

        // validasi option
        if (interestInput.value === '') { 
            displayError(errorMessages[2], 'Silakan pilih salah satu opsi.');
            isValid = false;
        } else {
            clearError(errorMessages[2]);
        }

        //munculkan alert
        if (!isValid) {
            event.preventDefault(); 
        } else {
            alert('Formulir berhasil dikirim!');
        }
    });

    function validateUsername(nama) {
        const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
        return usernameRegex.test(nama);
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displayError(element, message) {
        element.textContent = message;
    }

    function clearError(element) {
        element.textContent = '';
    }
});