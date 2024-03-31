
function handleClick(event){
  event.preventDefault();
  resetNode("#errorMessage");
  var infoIsValid = true;
  var errorInfo = "";

  if(!checkNameValidation()){
    errorInfo += `<br/><lable>You must enter 3 or more characters name</label>`;
    infoIsValid = false;
  }

  if(!checkYearOfBirthValidation()){
    errorInfo += `<br/><lable>You year of birth must in range from 1901 to 2099</label>`;
    infoIsValid = false;
  }

  if(!checkZipcodeValidation()){
    errorInfo += `<br/><lable>You must enter 5 digits zipcode</label>`;
    infoIsValid = false;
  }

  if(!checkPasswordValidation()){
    errorInfo += `<br/><lable>You must enter 8 or more characters password</label>`;
    infoIsValid = false;
  }

  if(!checkPizzaPreferenceValidation()){
    errorInfo += `<br/><lable>Please select one type of pizza</label>`;
    infoIsValid = false;
  }

  if(!infoIsValid){
    setNodeInnerHTML("#errorMessage",errorInfo)
  }
  else{
    setNodeInnerHTML("#successMessage",`<br>Accepted.Thank you!`)
  }
}


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
    return false;
  }
  return true;
}

function checkYearOfBirthValidation(){
  const yearOfBirthValue = getNodeValue("#yearOfBirth");
  if (yearOfBirthValue < 1901 || yearOfBirth > 2099){
    return false;
  }
  return true;
}

function checkZipcodeValidation(){
  const usResident = getNode("#usResident").checked;
  const zipcodeValue = getNodeValue("#zipcode");
  if (usResident && zipcodeValue.length != 5){
    return false;
  }
  return true;
}



function checkPasswordValidation(){
  const PasswordValue = getNodeValue("#password");
  if (PasswordValue.length < 8){
    return false;
  }
  return true;
}

function checkPizzaPreferenceValidation(){
  const PizzaPreference = getNode('input[name="pizzaPreference"]:checked');
  if (PizzaPreference){
    return true;
  }
  return false;
}


