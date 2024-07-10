document.getElementById('monFormulaire').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

document.getElementById('prenom').addEventListener('input', function() {
    if (validatePrenom()) {
        document.getElementById('nomGroup').style.display = 'block';
    } else {
        document.getElementById('nomGroup').style.display = 'none';
        document.getElementById('emailGroup').style.display = 'none';
        document.getElementById('passwordGroup').style.display = 'none';
        document.getElementById('confirmPasswordGroup').style.display = 'none';
        document.getElementById('submitButton').style.display = 'none';
    }
});

document.getElementById('nom').addEventListener('input', function() {
    if (validateNom()) {
        document.getElementById('emailGroup').style.display = 'block';
    } else {
        document.getElementById('emailGroup').style.display = 'none';
        document.getElementById('passwordGroup').style.display = 'none';
        document.getElementById('confirmPasswordGroup').style.display = 'none';
        document.getElementById('submitButton').style.display = 'none';
    }
});

document.getElementById('email').addEventListener('input', function() {
    if (validateEmail()) {
        document.getElementById('passwordGroup').style.display = 'block';
    } else {
        document.getElementById('passwordGroup').style.display = 'none';
        document.getElementById('confirmPasswordGroup').style.display = 'none';
        document.getElementById('submitButton').style.display = 'none';
    }
});

document.getElementById('password').addEventListener('input', function() {
    if (validatePassword()) {
        document.getElementById('confirmPasswordGroup').style.display = 'block';
    } else {
        document.getElementById('confirmPasswordGroup').style.display = 'none';
        document.getElementById('submitButton').style.display = 'none';
    }
});

document.getElementById('confirmPassword').addEventListener('input', function() {
    if (validateConfirmPassword()) {
        document.getElementById('submitButton').style.display = 'block';
    } else {
        document.getElementById('submitButton').style.display = 'none';
    }
});

function validatePrenom() {
    const prenom = document.getElementById('prenom').value.trim();
    const prenomError = document.getElementById('prenomError');
    const noDigitsPattern = /^[^\d]*$/;

    prenomError.textContent = '';
    if (prenom.length < 3 || prenom.length > 15) {
        prenomError.textContent = 'Le prénom doit contenir entre 3 et 15 caractères.';
        document.getElementById('prenom').classList.add('error');
        return false;
    } else if (!noDigitsPattern.test(prenom)) {
        prenomError.textContent = 'Le prénom ne doit pas contenir de chiffres.';
        document.getElementById('prenom').classList.add('error');
        return false;
    } else {
        document.getElementById('prenom').classList.remove('error');
    }
    return true;
}

function validateNom() {
    const nom = document.getElementById('nom').value.trim();
    const nomError = document.getElementById('nomError');
    const noDigitsPattern = /^[^\d]*$/;

    nomError.textContent = '';
    if (nom.length < 3 || nom.length > 15) {
        nomError.textContent = 'Le nom doit contenir entre 3 et 15 caractères.';
        document.getElementById('nom').classList.add('error');
        return false;
    } else if (!noDigitsPattern.test(nom)) {
        nomError.textContent = 'Le nom ne doit pas contenir de chiffres.';
        document.getElementById('nom').classList.add('error');
        return false;
    } else {
        document.getElementById('nom').classList.remove('error');
    }
    return true;
}

function validateEmail() {
    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    emailError.textContent = '';
    if (!emailPattern.test(email)) {
        emailError.textContent = 'L\'adresse email n\'est pas valide.';
        document.getElementById('email').classList.add('error');
        return false;
    } else {
        document.getElementById('email').classList.remove('error');
    }
    return true;
}

function validatePassword() {
    const password = document.getElementById('password').value.trim();
    const passwordError = document.getElementById('passwordError');
    let passwordErrors = [];

    passwordError.textContent = '';
    if (password.length < 8) {
        passwordErrors.push("doit contenir au moins 8 caractères.");
    }
    if (!/\d/.test(password)) {
        passwordErrors.push("doit contenir au moins un chiffre.");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        passwordErrors.push("doit contenir au moins un caractère spécial.");
    }
    if (!/^[A-Z]/.test(password)) {
        passwordErrors.push("doit commencer par une lettre majuscule.");
    }

    if (passwordErrors.length > 0) {
        passwordError.textContent = 'Le mot de passe ' + passwordErrors.join(' ');
        document.getElementById('password').classList.add('error');
        return false;
    } else {
        document.getElementById('password').classList.remove('error');
    }
    return true;
}

function validateConfirmPassword() {
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    confirmPasswordError.textContent = '';
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Les mots de passe ne correspondent pas.';
        document.getElementById('confirmPassword').classList.add('error');
        return false;
    } else {
        document.getElementById('confirmPassword').classList.remove('error');
    }
    return true;
}

function validateForm() {
    const isPrenomValid = validatePrenom();
    const isNomValid = validateNom();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isPrenomValid && isNomValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        document.getElementById('monFormulaire').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
    }
}

function togglePasswordVisibility(fieldId) {
    const field = document.getElementById(fieldId);
    if (field.type === "password") {
        field.type = "text";
    } else {
        field.type = "password";
    }
}
