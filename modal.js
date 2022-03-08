function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");
// Form Elements
const first = document.getElementById("first");
const firstParent = first.parentNode;
const last = document.getElementById("last");
const lastParent = last.parentNode;
const email = document.getElementById("email");
const emailParent = email.parentNode;
const birth = document.getElementById("birthdate");
const birthParent = birth.parentNode;
const quantity = document.getElementById("quantity");
const quantityParent = quantity.parentNode;
const locationDiv = document.getElementsByName("location")[0];
const locationParent = locationDiv.parentNode;
const conditions = document.getElementById("checkbox1");
const conditionsParent = conditions.parentNode;
/*const events = document.getElementsById("checkbox2");
const eventsParent = events.parentNode;*/

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal event
closeBtn.addEventListener('click', closeModal);

//close modal form
function closeModal(){
  modalbg.style.display = "none";
}

submitBtn.addEventListener('click', function(e){
  e.preventDefault();
  console.log(e);
  validate();
});

// FONCTION DE VALIDATION DU FORM
//document.querySelector('[name="first"]').setCustomValidity('Veuillez entrer 2 caractères ou plus pour le champ du nom.');
function validate(){
  // verify first
  var firstValue = document.querySelector('[name="first"]').value;
  var firstRegex = /^\S{2,50}$/.test(firstValue);
  var msgDiv = document.createElement("div");
  msgDiv.classList.add("Error");
  msgDiv.id = "firstError";
  firstErrorDiv = document.getElementById('firstError');
  if(firstRegex == false){
    if(!firstErrorDiv){
      msgDiv.innerHTML = '<p>Veuillez entrer 2 caractères ou plus pour le champ du prénom.</p>';
      firstParent.appendChild(msgDiv);
    }     
  }else{
    if(firstErrorDiv){
      firstParent.removeChild(firstErrorDiv);
    }
  }
  
  // verify second
  var lastValue = document.querySelector('[name="last"]').value;
  var secondRegex = /^\S{2,50}$/.test(lastValue);
  var msgDiv = document.createElement("div");
  msgDiv.classList.add("Error");
  msgDiv.id = "lastError";
  lastErrorDiv = document.getElementById('lastError');
  if(secondRegex == false){
    if(!lastErrorDiv){
      msgDiv.innerHTML = '<p>Veuillez entrer 2 caractères ou plus pour le champ du nom.</p>';
      lastParent.appendChild(msgDiv);
    }     
  }
  else{
    if(lastErrorDiv){
      lastParent.removeChild(lastErrorDiv);
    }
  }

  // verify email
  var emailValue = document.querySelector('[name="email"]').value;
  var emailRegex = /^\S+@\S+\.\S+$/.test(emailValue);
  var msgDiv = document.createElement("div");
  msgDiv.classList.add("Error");
  msgDiv.id = "emailError";
  emailErrorDiv = document.getElementById('emailError');
  if(emailRegex == false){
    if(!emailErrorDiv){
      msgDiv.innerHTML = '<p>Veuillez saisir une adresse valide.</p>';
      emailParent.appendChild(msgDiv);
    }     
  }
  else{
    if(emailErrorDiv){
      emailParent.removeChild(emailErrorDiv);
    }
  }

  // verify birthdate
  var today = new Date();
  var birthValue = document.querySelector('[name="birthdate"]').value;
  console.log(birthValue);
  var birthDate = new Date(birthValue);
  var age = today.getFullYear() - birthDate.getFullYear();
  console.log("Age =" + age);
  var birthRegex = /(\d{4})-(\d{2})-(\d{2})/.test(birthValue);
  var msgDiv = document.createElement("div");
  msgDiv.classList.add("Error");
  msgDiv.id = "birthError";
  birthErrorDiv = document.getElementById('birthError');
  if(birthRegex == false || age < 0){
    console.log("birthRegex : " + birthRegex);
    if(!birthErrorDiv){
      msgDiv.innerHTML = '<p>Vous devez entrer votre date de naissance et avoir plus de 9 ans.</p>';
      birthParent.appendChild(msgDiv);
    }     
  }
  else{
    console.log("birthRegex : " + birthRegex);
    if(birthErrorDiv){
      birthParent.removeChild(birthErrorDiv);
    }
  }

  // verify quantity
  var quantityValue = document.querySelector('[name="quantity"]').value;
  var quantityRegex = /^[0-9][0-9]?$|^99$/.test(quantityValue);
  console.log("Quantity =" + quantityValue);
  var msgDiv = document.createElement("div");
  msgDiv.classList.add("Error");
  msgDiv.id = "quantityError";
  quantityErrorDiv = document.getElementById('quantityError');
  if(quantityRegex == false){
    if(!quantityErrorDiv){
      msgDiv.innerHTML = '<p>Saisissez une valeur numérique entre 0 et 99.</p>';
      quantityParent.appendChild(msgDiv);
    }     
  }
  else{
    if(quantityErrorDiv){
      quantityParent.removeChild(quantityErrorDiv);
    }
  }
  
  // verify location
  var locationOk = false;
  var msgDiv = document.createElement("div");
  msgDiv.classList.add("Error");
  msgDiv.id = "locationError";
  locationErrorDiv = document.getElementById('locationError');
  var locationChecked = document.querySelectorAll('input[name="location"]:checked');
  console.log("Location Checked : " + locationChecked.length);
  if(locationChecked.length > 0){
    var locationOk = true;
  }else{
    var locationOk = false;
  }
  if(locationOk == false){
    if(!locationErrorDiv){
      msgDiv.innerHTML = '<p>Vous devez choisir une option.</p>';
      locationParent.appendChild(msgDiv);
    }     
  }
  else{
    if(locationErrorDiv){
      locationParent.removeChild(locationErrorDiv);
    }
  }

  // verify conditions
  var conditionsOk = false;
  var msgDiv = document.createElement("div");
  msgDiv.classList.add("Error");
  msgDiv.id = "conditionsError";
  conditionsErrorDiv = document.getElementById('conditionsError');
  var conditionsChecked = document.querySelectorAll('input[name="checkbox1"]:checked');
  console.log("Conditions Checked : " + conditionsChecked.length);
  if(conditionsChecked.length > 0){
    var conditionsOk = true;
  }else{
    var conditionsOk = false;
  }
  if(conditionsOk == false){
    if(!conditionsErrorDiv){
      msgDiv.innerHTML = '<p>Vous devez vérifier que vous acceptez les termes et conditions.</p>';
      conditionsParent.after(msgDiv);
    }     
  }
  else{
    if(conditionsErrorDiv){
      conditionsParent.removeChild(conditionsErrorDiv);
    }
  }

  // validate form
  var errors = document.getElementsByClassName("Error")[0];
  console.log("errors  :" + errors);
  if (errors){
    return false;
  }
  if (!errors){
    messageSubmit();
    return false;
  };
}

var myForm = document.getElementsByName("reserve")[0];
// Modal message on submit
function messageSubmit(){
  ////////////////////// Uncomment to fire submit
  //myForm.submit();
  modalAfterSubmit();
  console.log("Submit");
}


myForm.addEventListener('submit', function(e){
  // on form submission, prevent default
  e.preventDefault();
});

function modalAfterSubmit(){
  var modalB = document.getElementsByClassName("modal-body")[0];
  var msgDiv = document.createElement("div");
  msgDiv.classList.add("msgThanks");
  msgDiv.innerHTML = '<p>Merci pour votre inscription !</p>';
  modalB.append(msgDiv);
  myForm.classList.add("hide");
  console.log("Submit");
}