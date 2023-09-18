
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
const localStorageKey = 'feedback-form-state'


const input = form.querySelector('input')
const textarea = form.querySelector('textarea')

const values = {
    email: '',
    message: '',
}

const inputHandler = throttle((event) => {
    values.email = input.value;
    values.message = textarea.value;
    localStorage.setItem(localStorageKey, JSON.stringify(values));
}, 500)

form.addEventListener('input', inputHandler)


const onLoad = () => {
    const valuesToParse = localStorage.getItem(localStorageKey);
    if (!valuesToParse) {
        form.elements.message.value = ""
    form.elements.email.value = ""
    }
    else {
        const parsedValues = JSON.parse(valuesToParse);
        form.elements.message.value = parsedValues.message 
        form.elements.email.value = parsedValues.email 
    }
}
onLoad();

const formHandler = (event) => {
    event.preventDefault();
    if ((form.elements.message.value && form.elements.email.value) === "") {
        alert ('Please fill all fields!!')
    }
    else {
    console.log(values);
    localStorage.clear();
    form.reset();
}
}
form.addEventListener('submit', formHandler)



