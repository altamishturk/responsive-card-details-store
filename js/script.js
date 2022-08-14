const cardFront = document.querySelector('.card-front');
const cardBack = document.querySelector('.card-back');
const cardNumber = cardFront.querySelector('.card-number');
const cardAccountholderName = cardFront.querySelector(".accountholder-name");
const cardExpDate = cardFront.querySelector(".exp-date");
const cardCVC = cardBack.querySelector(".cvc");


const form = document.querySelector('.card-form');
const nameInput = form.querySelector('#cardHolderName');
const nameInputError = nameInput.nextElementSibling;
const numberInput = form.querySelector('#cardNumber');
const numberInputError = numberInput.nextElementSibling;
const expMInput = form.querySelector('#expMonth');
const expYInput = form.querySelector('#expYear');
const expDateInputError = expYInput.parentElement.nextElementSibling;
const cvcInput = form.querySelector('#cvc');
const cvcInputError = cvcInput.nextElementSibling;
const error = {name: true,number: true,expM: true,expY: true,cvc: true};
let finalError = false;
const thankYou = document.querySelector('.thank-you');

form.addEventListener('submit',e=>{
    e.preventDefault();
    if (!finalError) {
      form.classList.add('hide');
      thankYou.classList.remove('hide');
    }
})


window.addEventListener('keydown',e=>{
   setTimeout(() => {
    validation();
   }, 1000);
})


function validation(){

    // card holder name validation 
    if (nameInput.value.length < 5) {
        nameInput.classList.add('error');
        nameInputError.innerText = 'Name Must be Grater Then 5 Char';
        error.name = true;
    }
    else{
        nameInput.classList.remove('error');
        nameInputError.innerText = '';
        error.name = false;
    }
    cardAccountholderName.innerText = nameInput.value;

    //  card number validation 
     if (numberInput.value.length !== 16) {
        numberInput.classList.add('error');
        numberInputError.innerText = 'Invalid Crad Number';
        error.number = true;
     }
     else{
        numberInput.classList.remove('error');
        numberInputError.innerText = '';
        error.number = false;
     }
    
     const first = numberInput.value.split('').slice(0, 4).join("");
     const second = numberInput.value.split('').slice(4, 8).join("");
     const third = numberInput.value.split('').slice(8, 12).join("");
     const forth = numberInput.value.split('').slice(12, 16).join("");

     cardNumber.innerText = `${first} ${second} ${third} ${forth}`;

    //  expity date month validation 
     if (parseInt(expMInput.value) > 12) {
        expMInput.classList.add('error');
        expDateInputError.innerText = 'Invalid Month';
        error.expM = true;
     }
     else{
        expMInput.classList.remove('error');
        expDateInputError.innerText = '';
        error.expM =  false;
     }

     //  expity date year validation 
     if (parseInt(expYInput.value) <= new Date().getFullYear()) {
        expYInput.classList.add('error');
        expDateInputError.innerText = 'Invalid Year';
        error.expY = true;
     }
     else{
        if (parseInt(expMInput.value) <= 12) {
            numberInput.classList.remove('error');
            expDateInputError.innerText = '';
            error.expY = false;
        }
     }
     cardExpDate.innerText = `${expMInput.value}${expMInput.value? '/':''}${expYInput.value}`;


     if (cvcInput.value.length !== 3) {
        cvcInput.classList.add('error');
        cvcInputError.innerText = 'Invalid CVC';
        error.cvc = true;
     }
     else{
        cvcInput.classList.remove('error');
        cvcInputError.innerText = '';
        error.cvc = false;
     }
     cardCVC.innerText = cvcInput.value.split('').slice(0,3).join('');

     finalError = false;

     for (const key in error) {
        if (error[key] === true) {
            finalError = true;
        }
     }
}
