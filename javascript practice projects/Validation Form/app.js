var nameError=document.getElementById("name-error");
var phoneError=document.getElementById("phone-error");
var emailError=document.getElementById("email-error");
var messageError=document.getElementById("message-error");
var submitError=document.getElementById("submit-error");

function validateName(){
    var name=document.getElementById("contact-name").value;
    if(name.length==0){
        nameError.innerHTML="Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)*$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }
    
    nameError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i>';
    return true;
}

function validatePhone(){
    var phone=document.getElementById("contact-phone").value;

    if(phone.length==0){
        phoneError.innerHTML="Phone no should be 10digits"
        return false;
    }
    if(phone.length!==10){
        phoneError.innerHTML="Phone no should be 10digits"
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='Only digits required';
        return false;
    }
    phoneError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById("contact-email").value;
    var emailError = document.getElementById("email-error");

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }

    // Corrected regular expression
    if (!email.match(/^[A-Za-z._-]+@[A-Za-z]+\.[A-Za-z]{2,}$/)) {
        emailError.innerHTML = "Email Invalid";
        return false;
    }

    // Clear error message if email becomes valid
    emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i>';
    return true;
}

function validateMessage(){
    var message=document.getElementById('contact-message').value;
    var required=30;
    var left=required-message.length;

    if(left>0){
        messageError.innerHTML= left+ ' more characters required'
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix errors to submit';
        setTimeout(function() {
            submitError.style.display = 'none'; // Corrected to hide the error message
        }, 3000); // Timeout set to 3000 milliseconds (3 seconds)
        return false;
    }
}
