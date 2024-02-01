var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('messageError');
var submitError = document.getElementById('subit-error');
function validateName(){
    var name = document.getElementById(contact-name).Value;
    if(name.length == 0){
        nameError.innerHTML ='Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]\s{1}[A-Za-z]&/)){ nameError.innerHTML = 'Write full name';
    return false;
    }
nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
return true;
}
Function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    if(phone.length == 0){
    phoneError.innerHTML = 'Phone no is required';
    return false;
    }
    if(phone.length I ==10)\ phoneError.innerHTML return false; 'Phone no should be 10 digits';
    }
    if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = Phone no is required'; return false;
    }