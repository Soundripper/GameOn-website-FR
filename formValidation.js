const validate = () =>{
    let errorsCounter = 0;
    const fields = [
        {
            name: 'first',
            type: 'text',
            regex: /^\S[a-z]{2,50}$/,
            div: document.getElementById("first")
        },
        {
            name: 'last',
            type: 'text',
            regex: /^\S[a-z]{2,50}$/,
            div: document.getElementById("last")
        },
        {
            name: 'email',
            type: 'text',
            regex: /^\S+@\S+\.\S+$/,
            div: document.getElementById("email")
        },
        {
            name: 'birthdate',
            type: 'text',
            regex: /(\d{4})-(\d{2})-(\d{2})/,
            div: document.getElementById("birthdate")
        },
        {
            name: 'quantity',
            type: 'text',
            regex: /^[0-9][0-9]?$|^99$/,
            div: document.getElementById("quantity")
        },
        {
            name: 'location',
            type: 'radio',
            div: document.getElementById("locationCheckboxes")
        },
        {
            name: 'checkbox1',
            type: 'radio',
            div: document.getElementById("conditions")
        }
    ]
    
    const hideError = (div, value) => {
        if(value === "block"){
            div.nextElementSibling.style.display = 'block';
            errorsCounter += 1;
            console.log(errorsCounter);
        }else{
            div.nextElementSibling.style.display = 'none';
        }
    }
    
    fields.forEach(field => {
        switch (field.type) {
            case 'text' :
                valueDoc = document.querySelector(`input[name$="${field.name}"]`);
                regexResult = field.regex.test(valueDoc.value);
                console.log(regexResult);
                if (regexResult){
                    hideError(field.div, 'none');
                }else{hideError(field.div, 'block');}
                break;
            case 'radio' :
                checked = document.querySelectorAll(`[name="${field.name}"]:checked`);
                console.log(checked);
                if(checked.length > 0){
                    hideError(field.div, 'none')
                }else{hideError(field.div, 'block')}
                break;
        }
    });
    
    if(errorsCounter == 0){
        messageSubmit();
    }
}