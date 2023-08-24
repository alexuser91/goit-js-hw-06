const inputElement = document.getElementById("validation-input");

inputElement.addEventListener("blur", () => {
  const expectedLength = parseInt(inputElement.getAttribute("data-length"), 10);
  const inputValue = inputElement.value.trim();

  if (inputValue.length === expectedLength) {
    inputElement.style.border = "2px solid green";
  } else {
    inputElement.style.border = "2px solid red";
  }
});
