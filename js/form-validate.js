const form = document.getElementById("form");
const name = document.getElementById("name-input");
const lastName = document.getElementById("last-name-input");
const email = document.getElementById("email");
const message = document.getElementById("message-input");

export function initFormValidation() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        validateInputs();
    });

    const setSuccess = (element) => {
        const inputField = element.parentElement;
        const errorDisplay = inputField.querySelector(".contact-form-error");
        const input = inputField.querySelector(".contact-form__input");

        errorDisplay.innerText = '';
        input.classList.add("success");
        input.classList.remove("error");
    };

    const setError = (element, message) => {
        const inputField = element.parentElement;
        const errorDisplay = inputField.querySelector(".contact-form-error");
        const input = inputField.querySelector(".contact-form__input");

        errorDisplay.innerText = message;
        input.classList.add("error");
        input.classList.remove("success");
    };

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const validateInputs = () => {
        const nameValue = name.value.trim();
        const lastNameValue = lastName.value.trim();
        const emailValue = email.value.trim();
        const messageValue = message.value;

        if(nameValue === "") {
            setError(name, "Name is required");
        }else {
            setSuccess(name);
        }
        if(lastNameValue === "") {
            setError(lastName, "Last name is required");
        }else {
            setSuccess(lastName);
        }
        if(emailValue === "") {
            setError(email, "Email is required");
        }else if(!isValidEmail(emailValue)) {
            setError(email, "Provide a valid email adress");
        }else {
            setSuccess(email);
        }
        if(messageValue === "") {
            setError(message, "Message is required");
        }else if(messageValue.length < 100){
            setError(message, "Message must be at least 100 characters long");
        }else {
            setSuccess(message);
        }
    };
}