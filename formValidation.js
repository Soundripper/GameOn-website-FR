const regexValidate = (value, regex, div) => {
    regexResult = regex.test(value);
    if (!regexResult){
        div.nextElementSibling.style.display = 'block';
    }else{
        div.nextElementSibling.style.display = 'none';
    }
}

const isFirstNameValid = () => {
    regexValidate(document.querySelector('[name="first"]').value, /^\S{2,50}$/, document.getElementById("first"));
    FirstNameValid = regexResult;
}

const isLastNameValid = () => {
    regexValidate(document.querySelector('[name="last"]').value, /^\S{2,50}$/, document.getElementById("last"));
    LastNameValid = regexResult;
}

const isMailValid = () => {
    regexValidate(document.querySelector('[name="email"]').value, /^\S+@\S+\.\S+$/, document.getElementById("email"));
    MailValid = regexResult;
}

const isBirthdateValid = () => {
    regexValidate(document.querySelector('[name="birthdate"]').value, /(\d{4})-(\d{2})-(\d{2})/, document.getElementById("birthdate"));
    BirthdateValid = regexResult;
}

const isQuantityValid = () => {
    regexValidate(document.querySelector('[name="quantity"]').value, /^[0-9][0-9]?$|^99$/, document.getElementById("quantity"));
    QuantityValid = regexResult;
}

const isLocationValid = () => {
    const loc = document.getElementById("locationCheckboxes");
    const locationChecked = document.querySelectorAll('input[name="location"]:checked');
    if(locationChecked.length > 0){
        loc.nextElementSibling.style.display = 'none';
        LocationValid = true;
    }else{
        loc.nextElementSibling.style.display = 'block';
        LocationValid = false;
    }
}
  
const isConditionsValid = () => {
    const conditions = document.getElementById("conditions");
    const conditionsChecked = document.querySelectorAll('input[name="checkbox1"]:checked');
    if(conditionsChecked.length > 0){
        conditions.nextElementSibling.style.display = 'none';
        ConditionsValid = true;
    }else{
        conditions.nextElementSibling.style.display = 'block';
        ConditionsValid = false;
    }
}

// const isFirstNameValid = () => {
//     const firstValue = document.querySelector('[name="first"]').value;
//     const Regex = /^\S{2,50}$/.test(firstValue);
//     if(!Regex){
//         first.nextElementSibling.style.display = 'block';
//         FirstNameValid = false;
//     }else{
//         first.nextElementSibling.style.display = 'none';
//         FirstNameValid = true;
//     }
// }
  
// const isLastNameValid = () => {
//     const lastValue = document.querySelector('[name="last"]').value;
//     const Regex = /^\S{2,50}$/.test(lastValue);
//     if(!Regex){
//         last.nextElementSibling.style.display = 'block';
//         LastNameValid = false;
//     }else{
//         last.nextElementSibling.style.display = 'none';
//         LastNameValid = true;
//     }
// }
  
// const isMailValid = () => {
//     const emailValue = document.querySelector('[name="email"]').value;
//     const Regex = /^\S+@\S+\.\S+$/.test(emailValue);
//     if(!Regex){
//         email.nextElementSibling.style.display = 'block';
//         MailValid = false;
//     }else{
//         email.nextElementSibling.style.display = 'none';
//         MailValid = true;
//     }
// }
  
// const isBirthdateValid = () => {
//     const birthValue = document.querySelector('[name="birthdate"]').value;
//     const Regex = /(\d{4})-(\d{2})-(\d{2})/.test(birthValue);
//     if(!Regex){
//         birth.nextElementSibling.style.display = 'block';
//         BirthdateValid = false;
//     }
//     else{
//         birth.nextElementSibling.style.display = 'none'; 
//         BirthdateValid = true;
//     }
// }
  
// const isQuantityValid = () => {
//     const quantityValue = document.querySelector('[name="quantity"]').value;
//     const Regex = /^[0-9][0-9]?$|^99$/.test(quantityValue);
//     if(!Regex){
//         quantity.nextElementSibling.style.display = 'block';
//         QuantityValid = false;
//     }else{
//         quantity.nextElementSibling.style.display = 'none';
//         QuantityValid = true;
//     }
// }
  


