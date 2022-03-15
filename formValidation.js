// const arrayGen = () => {
//     const inputsNames = [];
//     const inputsValues = [];
//     const inputsTypes = [];
//     const formElements = myForm.getElementsByTagName('input');
//     for (i=0; i<formElements.length; i++){
//         //inputsNames.indexOf(formElements[i].name) === -1 ? inputsNames.push(formElements[i].name) : console.log("This item already exists");
//         inputsNames.push(formElements[i].name);
//         inputsValues.push(formElements[i].value);
//         inputsTypes.push(formElements[i].type);
//     }
// }

// const regexValidate = (value, regex, div) => {
//     regexResult = regex.test(value);
//     if (!regexResult){
//         div.nextElementSibling.style.display = 'block';
//     }else{
//         div.nextElementSibling.style.display = 'none';
//     }
// }

// const isFirstNameValid = () => {
//     //regexValidate(document.querySelector('[name="first"]').value,
//     regexValidate(first.value,
//     /^\S[a-z]{2,50}$/,
//     //document.getElementById("first"));
//     document.getElementById(first.name));
//     firstNameValid = regexResult;
// }

// const isLastNameValid = () => {
//     //regexValidate(document.querySelector('[name="last"]').value,
//     regexValidate(last.value,
//     /^\S[a-z]{2,50}$/,
//     //document.getElementById("last"));
//     document.getElementById(last.name));
//     lastNameValid = regexResult;
// }

// const isMailValid = () => {
//     regexValidate(document.querySelector('[name="email"]').value,
//     /^\S+@\S+\.\S+$/,
//     document.getElementById("email"));
//     mailValid = regexResult;
// }

// const isBirthdateValid = () => {
//     regexValidate(document.querySelector('[name="birthdate"]').value,
//     /(\d{4})-(\d{2})-(\d{2})/,
//     document.getElementById("birthdate"));
//     birthdateValid = regexResult;
// }

// const isQuantityValid = () => {
//     regexValidate(document.querySelector('[name="quantity"]').value,
//     /^[0-9][0-9]?$|^99$/,
//     document.getElementById("quantity"));
//     quantityValid = regexResult;
// }

// const isLocationValid = () => {
//     const loc = document.getElementById("locationCheckboxes");
//     const locationChecked = document.querySelectorAll('input[name="location"]:checked');
//     if(locationChecked.length > 0){
//         loc.nextElementSibling.style.display = 'none';
//         locationValid = true;
//     }else{
//         loc.nextElementSibling.style.display = 'block';
//         locationValid = false;
//     }
// }
  
// const isConditionsValid = () => {
//     const conditions = document.getElementById("conditions");
//     const conditionsChecked = document.querySelectorAll('input[name="checkbox1"]:checked');
//     if(conditionsChecked.length > 0){
//         conditions.nextElementSibling.style.display = 'none';
//         conditionsValid = true;
//     }else{
//         conditions.nextElementSibling.style.display = 'block';
//         conditionsValid = false;
//     }
// }

//////////// OLD METHOD ////////////////////////////////////////////////////////////////////

const isFirstNameValid = () => {
    let firstNameValid;
    const firstValue = document.querySelector('[name="first"]').value;
    const Regex = /^\S{2,50}$/.test(firstValue);
    if(!Regex){
        first.nextElementSibling.style.display = 'block';
        firstNameValid = false;
    }else{
        first.nextElementSibling.style.display = 'none';
        firstNameValid = true;
    }
    return firstNameValid;
}
  
const isLastNameValid = () => {
    let lastNameValid;
    const lastValue = document.querySelector('[name="last"]').value;
    const Regex = /^\S{2,50}$/.test(lastValue);
    if(!Regex){
        last.nextElementSibling.style.display = 'block';
        lastNameValid = false;
    }else{
        last.nextElementSibling.style.display = 'none';
        lastNameValid = true;
    }
    return lastNameValid;
}
  
const isMailValid = () => {
    const emailValue = document.querySelector('[name="email"]').value;
    const Regex = /^\S+@\S+\.\S+$/.test(emailValue);
    if(!Regex){
        email.nextElementSibling.style.display = 'block';
        mailValid = false;
    }else{
        email.nextElementSibling.style.display = 'none';
        mailValid = true;
    }
}
  
const isBirthdateValid = () => {
    const birthValue = document.querySelector('[name="birthdate"]').value;
    const Regex = /(\d{4})-(\d{2})-(\d{2})/.test(birthValue);
    if(!Regex){
        birthdate.nextElementSibling.style.display = 'block';
        birthdateValid = false;
    }
    else{
        birthdate.nextElementSibling.style.display = 'none'; 
        birthdateValid = true;
    }
}
  
const isQuantityValid = () => {
    const quantityValue = document.querySelector('[name="quantity"]').value;
    const Regex = /^[0-9][0-9]?$|^99$/.test(quantityValue);
    if(!Regex){
        quantity.nextElementSibling.style.display = 'block';
        quantityValid = false;
    }else{
        quantity.nextElementSibling.style.display = 'none';
        quantityValid = true;
    }
}

const isLocationValid = () => {
    const loc = document.getElementById("locationCheckboxes");
    const locationChecked = document.querySelectorAll('input[name="location"]:checked');
    if(locationChecked.length > 0){
        loc.nextElementSibling.style.display = 'none';
        locationValid = true;
    }else{
        loc.nextElementSibling.style.display = 'block';
        locationValid = false;
    }
}
  
const isConditionsValid = () => {
    const conditions = document.getElementById("conditions");
    const conditionsChecked = document.querySelectorAll('input[name="checkbox1"]:checked');
    if(conditionsChecked.length > 0){
        conditions.nextElementSibling.style.display = 'none';
        conditionsValid = true;
    }else{
        conditions.nextElementSibling.style.display = 'block';
        conditionsValid = false;
    }
}