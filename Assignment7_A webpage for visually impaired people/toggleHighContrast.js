var toggleButton = document.getElementById("toggle-high-contrast");

toggleButton.addEventListener("click", function () {
  var body = document.getElementsByTagName("body")[0];
  var main = document.getElementsByTagName("main")[0];
  var header = document.getElementsByTagName("header")[0];

  main.classList.toggle("high-contrast");
  header.classList.toggle("high-contrast");
});
