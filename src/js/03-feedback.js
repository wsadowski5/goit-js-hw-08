
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
const localStorageKey = 'feedback-form-state'


const input = form.querySelector('input')
const textarea = form.querySelector('textarea')
const button = form.querySelector('button')

const values = {
    email: '',
    message: '',
}


const inputHandler = throttle((event) => {
    values.message = textarea.value;
    values.email = input.value;
    localStorage.setItem(localStorageKey, JSON.stringify(values));
}, 500)

form.addEventListener('input', inputHandler)

const parsedValues = JSON.parse(localStorage.getItem(localStorageKey));

form.elements.message.value = parsedValues.message; 
form.elements.email.value = parsedValues.email;


const buttonHandler = (event) => {
    event.preventDefault();
    console.log(textarea.value, input.value)
    localStorage.clear();
    form.reset()
}

button.addEventListener('click', buttonHandler)



