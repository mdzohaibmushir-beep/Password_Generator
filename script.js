const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const passwordField = document.getElementById("password");
const strengthText = document.getElementById("strength");

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

document.getElementById("generate-btn").addEventListener("click", generatePassword);

function generatePassword() {
    const length = parseInt(lengthSlider.value);
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    let allChars = lower;
    if (includeUppercase) allChars += upper;
    if (includeNumbers) allChars += numbers;
    if (includeSymbols) allChars += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    passwordField.value = password;
    updateStrength(password);
}

function updateStrength(password) {
    let strength = "Weak";
    if (password.length >= 12 && /[A-Z]/.test(password) && /\d/.test(password) && /\W/.test(password)) {
        strength = "Strong";
    } else if (password.length >= 8) {
        strength = "Medium";
    }
    strengthText.textContent = "Strength: " + strength;
}

function copyPassword() {
    if (passwordField.value) {
        navigator.clipboard.writeText(passwordField.value);
        alert("Password copied to clipboard!");
    }
}

