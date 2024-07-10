document.getElementById('monFormulaire').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Réinitialiser les messages d'erreur
    document.getElementById('prenomError').textContent = '';
    document.getElementById('nomError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    // Récupérer les valeurs des champs
    const prenom = document.getElementById('prenom').value.trim();
    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    
    let isValid = true;

    // Expression régulière pour vérifier l'absence de chiffres
    const noDigitsPattern = /^[^\d]*$/;

    // Validation du prénom
    if (prenom.length < 3 || prenom.length > 15) {
        document.getElementById('prenomError').textContent = 'Le prénom doit contenir entre 3 et 15 caractères.';
        isValid = false;
    } else if (!noDigitsPattern.test(prenom)) {
        document.getElementById('prenomError').textContent = 'Le prénom ne doit pas contenir de chiffres.';
        isValid = false;
    }

    // Validation du nom
    if (nom.length < 3 || nom.length > 15) {
        document.getElementById('nomError').textContent = 'Le nom doit contenir entre 3 et 15 caractères.';
        isValid = false;
    } else if (!noDigitsPattern.test(nom)) {
        document.getElementById('nomError').textContent = 'Le nom ne doit pas contenir de chiffres.';
        isValid = false;
    }

    // Validation de l'adresse email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'L\'adresse email n\'est pas valide.';
        isValid = false;
    }

    // Validation du mot de passe
    let passwordErrors = [];
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
        document.getElementById('passwordError').textContent = 'Le mot de passe ' + passwordErrors.join(' ');
        isValid = false;
    }

    // Validation de la confirmation du mot de passe
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Les mots de passe ne correspondent pas.';
        isValid = false;
    }

    // Afficher le message de succès ou d'erreur
    if (isValid) {
        document.getElementById('monFormulaire').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
    }
});

function togglePasswordVisibility(fieldId) {
    const field = document.getElementById(fieldId);
    if (field.type === "password") {
        field.type = "text";
    } else {
        field.type = "password";
    }
}
