function validatePassword() {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("repeatpassword");
    
    if(password.value != confirmPassword.value){
        document.getElementById("submit").disabled = true;
        alert("Passwords do not match");
    } else {
        document.getElementById("submit").disabled = false;
        alert("Passwords match");
    }
}