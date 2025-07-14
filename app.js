const myForm = document.getElementById("signup-form");

myForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    const firstNameError = document.getElementById("first-name-error");
    const emailError = document.getElementById("email-error");
    const phoneError = document.getElementById("phone-error");
    const passwordError = document.getElementById("password-error");
    const confirmPasswordError = document.getElementById("confirm-password-error");

    // Clear previous errors
    firstNameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    let isValid = true;

    // First Name validation
    if (firstName.value.trim() === "") {
        firstNameError.textContent = "First name is required.";
        isValid = false;
    }

    // Email validation
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Phone validation
    if (phone.value.trim() === "") {
        phoneError.textContent = "Phone number is required.";
        isValid = false;
    } else if (!phonePattern.test(phone.value.trim())) {
        phoneError.textContent = "Please enter a valid phone number.";
        isValid = false;
    }

    // Password validation
    if (password.value.trim() === "") {
        passwordError.textContent = "Password is required.";
        isValid = false;
    } else if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        isValid = false;
    } else {
        if (confirmPassword.value.trim() === "") {
            confirmPasswordError.textContent = "Please confirm your password.";
            isValid = false;
        } else if (confirmPassword.value !== password.value) {
            confirmPasswordError.textContent = "Passwords do not match.";
            isValid = false;
        }
    }

    if (isValid) {
        myForm.submit();
    }
});