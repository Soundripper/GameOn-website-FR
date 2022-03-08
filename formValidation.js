const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birth = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locationDiv = document.getElementById("locationCheckboxes");
const conditions = document.getElementById("conditions");

const isFirstNameValid = () => {
    const firstValue = document.querySelector('[name="first"]').value;
    const Regex = /^\S{2,50}$/.test(firstValue);
    if(!Regex){
      first.nextElementSibling.style.display = 'block';
      FirstNameValid = false;
    }else{
      first.nextElementSibling.style.display = 'none';
      FirstNameValid = true;
    }
  }
  
  const isLastNameValid = () => {
    const lastValue = document.querySelector('[name="last"]').value;
    const Regex = /^\S{2,50}$/.test(lastValue);
    if(!Regex){
      last.nextElementSibling.style.display = 'block';
      LastNameValid = false;
    }else{
      last.nextElementSibling.style.display = 'none';
      LastNameValid = true;
    }
  }
  
  const isMailValid = () => {
    const emailValue = document.querySelector('[name="email"]').value;
    const Regex = /^\S+@\S+\.\S+$/.test(emailValue);
    if(!Regex){
      email.nextElementSibling.style.display = 'block';
      MailValid = false;
    }else{
      email.nextElementSibling.style.display = 'none';
      MailValid = true;
    }
  }
  
  const isBirthdateValid = () => {
    const today = new Date();
    const birthValue = document.querySelector('[name="birthdate"]').value;
    const birthDate = new Date(birthValue);
    const age = today.getFullYear() - birthDate.getFullYear();
    console.log("Age =" + age);
    const Regex = /(\d{4})-(\d{2})-(\d{2})/.test(birthValue);
    if(!Regex || age < 9){
      console.log("birthRegex : " + Regex);
      birth.nextElementSibling.style.display = 'block';
      BirthdateValid = false;
    }
    else{
      console.log("birthRegex : " + Regex);
      birth.nextElementSibling.style.display = 'none'; 
      BirthdateValid = true;
    }
  }
  
  const isQuantityValid = () => {
    const quantityValue = document.querySelector('[name="quantity"]').value;
    const Regex = /^[0-9][0-9]?$|^99$/.test(quantityValue);
    if(!Regex){
      quantity.nextElementSibling.style.display = 'block';
      QuantityValid = false;
    }else{
      quantity.nextElementSibling.style.display = 'none';
      QuantityValid = true;
    }
  }
  
  const isLocationValid = () => {
    const locationChecked = document.querySelectorAll('input[name="location"]:checked');
    console.log("Location Checked : " + locationChecked.length);
    if(locationChecked.length > 0){
      locationDiv.nextElementSibling.style.display = 'none';
      LocationValid = true;
    }else{
      locationDiv.nextElementSibling.style.display = 'block';
      LocationValid = false;
    }
  }
  
  const isConditionsValid = () => {
    const conditionsChecked = document.querySelectorAll('input[name="checkbox1"]:checked');
    console.log("Conditions Checked : " + conditionsChecked.length);
    if(conditionsChecked.length > 0){
      conditions.nextElementSibling.style.display = 'none';
      ConditionsValid = true;
    }else{
      conditions.nextElementSibling.style.display = 'block';
      ConditionsValid = false;
    }
  }