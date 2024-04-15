function handleClick1() {
  //   window.alert("The button was clicked");
  const num = Math.random();
  const output = `Your number is ${num}`;
  const elem = document.querySelector("#result1");
  const childrenToDelete = elem.children;
  console.log(childrenToDelete);

  for (child of childrenToDelete) {
    elem.removeChild(child);
  }

  elem.insertAdjacentHTML("beforeend", output);
}

function handleClick2(event) {
  event.preventDefault();
  resetNode("#errormsg");
  resetNode("#result");

    const errorNode = document.querySelector("#errormsg");
  //   errorNode.innerHTML = "";

    const resultNode = document.querySelector("#result");
  //   resultNode.innerHTML = "";

  //   const numeratorNode = document.querySelector("#numerator");
  //   const numeratorValue = Number.parseFloat(numeratorNode.value);
  //   const denominatorNode = document.querySelector("#denominator");
  //   const denominatorValue = Number.parseFloat(denominatorNode.value);
  const numeratorValue = getNodeValue("#numerator");
  const denominatorValue = getNodeValue("#denominator");
  // If the inputs are invalid...
  //   if (numeratorValue === 0 && denominatorValue === 0) {
  if (zeroOverZeroIsInvalid(numerator, denominator)) {
    errorNode.innerHTML = "Numerator and denominator cannot be both zero";
  } else {
    const result = numeratorValue / denominatorValue;
    console.log(result);
    resultNode.innerHTML = `<span>The resultis ${result}</span>`;
  }
}

function handleClick(event){
  event.preventDefault();
  resetNode("#errorMessage");
  var infoIsValid = true;
  var errorInfo = "";

  if(!checkNameValidation()){
    errorInfo += `<br/><lable>You must enter 3 or more characters</label>`;
    infoIsValid = false;
  }

  if(!checkYearOfBirthValidation()){
    errorInfo += `<br/><lable>You year of birth must in range from 1901 to 2099</label>`;
    infoIsValid = false;
  }

  if(!checkZipcodeValidation()){
    errorInfo += `<br/><lable>You must enter 5 digits</label>`;
    infoIsValid = false;
  }

  if(!checkPasswordValidation()){
    errorInfo += `<br/><lable>You must enter 8 or more characters</label>`;
    infoIsValid = false;
  }

  if(!checkPizzaPreferenceValidation()){
    errorInfo += `<br/><lable>Please select one choice</label>`;
    infoIsValid = false;
  }

  if(!infoIsValid){
    setNodeInnerHTML("#errorMessage",errorInfo)
  }
  else{
    setNodeInnerHTML("#successMessage",`<br>Thank you!`)
  }
}



/**
 * Selects an HTML node and clears its contents.
 * @param {string} nodeName - a node identifier to use with querySelector
 */


function getNode(nodeName) {
  const node = document.querySelector(nodeName);
  return node;
}

function setNodeInnerHTML(nodeName,messageText){
  const node =getNode(nodeName);
  node.innerHTML = messageText;
}

function resetNode(nodeName) {
  const node = getNode(nodeName);
  if (node !== null) {
    node.innerHTML = "";
  }
}

function getNodeValue(nodeName) {
  const node = getNode(nodeName);
  console.log(node);
  const nodeValue = node.value;
  return nodeValue;
}


function checkNameValidation(){
  const nameValue = getNodeValue("#name");
  if (nameValue.length < 3){
    return false
  }
  return true
}

function checkYearOfBirthValidation(){
  const yearOfBirthValue = getNodeValue("#yearOfBirth");
  if (yearOfBirthValue < 1901 || yearOfBirth > 2099){
    return false
  }
  return true
}

function checkZipcodeValidation(){
  const usResident = getNode("#usResident");
  const zipcodeValue = getNodeValue("#zipcode");
  if (usResident && zipcodeValue.length != 5){
    return false
  }
  return true
}



function checkPasswordValidation(){
  const PasswordValue = getNodeValue("#password");
  if (PasswordValue.length < 8){
    return false
  }
  return true
}

function checkPizzaPreferenceValidation(){
  const PizzaPreference = getNode('input[name="pizzaPreference"]:checked');
  if (PizzaPreference){
    return false
  }
  return true
}


