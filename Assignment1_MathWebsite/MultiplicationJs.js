function product(a,b){
    return parseFloat(a) * parseFloat(b)
}

const FirstNumber = window.prompt('We will calculate the product of next 2 Number you enter: Please enter the First Nunber.');
const SecondNumber = window.prompt('Please enter the Second Nunber.');

const result = product(FirstNumber,SecondNumber)

function init() {
    const newParagraph = document.createElement('p');
    const newContent = document.createTextNode(`The Result of Multiplication is ${result}!`);
    newParagraph.appendChild(newContent);
    const parent = document.getElementById('dynamic');
    parent.appendChild(newParagraph);
}   

function refreshPage() {
location.reload(); // refresh page
}