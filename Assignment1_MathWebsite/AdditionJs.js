function sum(a,b){
    return parseFloat(a) + parseFloat(b)
}

const FirstNumber = window.prompt('We will calculate next 2 Number you enter: Please enter the First Nunber.');
const SecondNumber = window.prompt('Please enter the Second Nunber.');

const result = sum(FirstNumber,SecondNumber)

function init() {
    const newParagraph = document.createElement('p');
    const newContent = document.createTextNode(`The Result of Addition is ${result}!`);
    newParagraph.appendChild(newContent);
    const parent = document.getElementById('dynamic');
    parent.appendChild(newParagraph);
}   

function refreshPage() {
location.reload(); // refresh page
}
