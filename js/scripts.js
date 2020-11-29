// Wait for screen load
window.onload = function() {

    // Call pseudo input
    // Call empty error
    // Call error (less than 5 caracters)
    let pseudo = document.getElementById("pseudo");
    let pseudoVide = document.querySelector("#pseudoVide");
    let pseudo5 = document.querySelector("#pseudoMoins5");

    // Call email input
    // Call empty error
    // Call error (format _@_._)
    let email = document.getElementById("email");
    let emailVide = document.querySelector("#emailVide");
    let emailFormat = document.querySelector("#incorrectEmail");

    // Call password input
    // Call empty error
    // Call error (less than 6 caracters)
    let pass = document.getElementById("pass");
    let passVide = document.querySelector("#passVide");
    let pass6 = document.querySelector("#passMoins6");

    // Call confirmpass input
    // Call empty error
    // Call error (confirmpass !match password)
    let confirmPass = document.getElementById("confirmpass");
    let confirmPassVide = document.querySelector("#confirmPassVide");
    let confirmPassMatch = document.querySelector("#passNotMatching");

    // Call show eye icon for password input
    // Call show eye icon for confirmpass input
    let showPass1 = document.getElementById("showpass1");
    let showPass2 = document.getElementById("showpass2");

    // Pseudo input onkeyup check
    pseudo.onkeyup = function() {
        
        // Pseudo length
        let valueLength = pseudo.value.length;
        
        // If pseudo length < 1, display "empty" error message with red border and hide "less than 5" error message
        if (valueLength < 1) {
            pseudoVide.style.display = "block";
            pseudo5.style.display = "none";
            pseudo.style.border = "1px solid red";
        }

        // If 1 < pseudo length < 5, display "less than 5" error message with red border and hide "empty" error message
        else if (valueLength >= 1 && valueLength < 5) {
            pseudoVide.style.display = "none";
            pseudo5.style.display = "block";
            pseudo.style.border = "1px solid red";
        }

        // Else hide all error message with green border
        else {
            pseudoVide.style.display = "none";
            pseudo5.style.display = "none";
            pseudo.style.border = "1px solid green";
        }
    }

    // Email input onkeyup check
    email.onkeyup = function() {

        // Email length
        let valueLength = email.value.length;

        // Email format (_@_._)
        let validate = /\S+@\S+\.\S+/;

        // If email length < 1, display "empty" error message with red border and hide "format" error message
        if (valueLength < 1) {
            emailVide.style.display = "block";
            emailFormat.style.display = "none";
            email.style.border = "1px solid red";
        }

        // If email match email format hide all error message with green border
        else if (email.value.match(validate)) {
            emailVide.style.display = "none";
            emailFormat.style.display = "none";
            email.style.border = "1px solid green";
        }

        // Else email format !match, display "format" error message with red border and hide "empty" error message
        else {
            emailVide.style.display = "none";
            emailFormat.style.display = "block";
            email.style.border = "1px solid red";
        }
    }

    // Password input onkeyup check
    pass.onkeyup = function() {

        // Password length
        let valueLength = pass.value.length;

        // If password length < 1, display "empty" error message with red border and hide "less than 6" error message
        if (valueLength < 1) {
            passVide.style.display = "block";
            pass6.style.display = "none";
            pass.style.border = "1px solid red";
        }

        // If 1 < password length < 6, display "less than 6" error message with red border and hide "empty" error message
        else if (valueLength >= 1 && valueLength < 6) {
            passVide.style.display = "none";
            pass6.style.display = "block";
            pass.style.border = "1px solid red";
        }

        // Else hide all error message with green border
        else {
            passVide.style.display = "none";
            pass6.style.display = "none";
            pass.style.border = "1px solid green";
        }
    }

    // Confirm password input onkeyup check
    confirmPass.onkeyup = function() {

        // Confirm password length
        let valueLength = confirmPass.value.length;

        // Password value
        let valuePass = pass.value;

        // If confirm password length < 1, display "empty" error message with red border and hide "!match" error message
        if (valueLength < 1) {
            confirmPassVide.style.display = "block";
            confirmPassMatch.style.display = "none";
            confirmPass.style.border = "1px solid red";
            pass.style.border = "1px solid black";
        }

        // If confirm password match password value, hide all error message with green border
        else if (confirmPass.value == valuePass) {
            confirmPassVide.style.display = "none";
            confirmPassMatch.style.display = "none";
            confirmPass.style.border = "1px solid green";
            pass.style.border = "1px solid black";
        }

        // Else confirm password !match password value, display "!match" error message with red border and hide "empty" error message
        else {
            confirmPassVide.style.display = "none";
            confirmPassMatch.style.display = "block";
            confirmPass.style.border = "1px solid red";
            pass.style.border = "1px solid red";
        }
    }

    // Show eye icon onclick for password
    showPass1.addEventListener("click", function(){

        // If password input type = "password", change type to text and change icon
        if (pass.type === "password") {
            pass.type = "text";
            showPass1.classList.remove("la-eye");
            showPass1.classList.add("la-eye-slash");
        }

        // Else password input type = "text", change type to password and change icon
        else {
            pass.type = "password";
            showPass1.classList.add("la-eye");
            showPass1.classList.remove("la-eye-slash");
        }
    })

    // Show eye icon onclick for confirm password
    showPass2.addEventListener("click", function(){

        // If confirm input password type = "password", change type to text and change icon
        if (confirmPass.type === "password") {
            confirmPass.type = "text";
            showPass2.classList.remove("la-eye");
            showPass2.classList.add("la-eye-slash");
        }

        // Else confirm input password type = "text", change type to password and change icon
        else {
            confirmPass.type = "password";
            showPass2.classList.add("la-eye");
            showPass2.classList.remove("la-eye-slash");
        }
    })

}