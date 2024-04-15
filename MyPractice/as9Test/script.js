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

function handleClick(event) {
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

/**
 * Selects an HTML node and clears its contents.
 * @param {string} nodeName - a node identifier to use with querySelector
 */
function resetNode(nodeName) {
  const node = document.querySelector(nodeName);
  if (node !== null) {
    node.innerHTML = "";
  }
}

function getNodeValue(nodeName) {
  const node = document.querySelector(nodeName);
  const nodeValue = Number.parseFloat(node.value);
  return nodeValue;
}

function setNodeInnerHTML(){}
function zeroOverZeroIsInvalid(numerator, denominator) {
  if (numerator === 0 && denominator === 0) {
    return true;
  }
}
