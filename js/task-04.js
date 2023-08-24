const decrementButton = document.querySelector(`[data-action="decrement"]`);
const incrementButton = document.querySelector(`[data-action="increment"]`);
const valueElement = document.getElementById(`value`);

let counterValue = 0;

function updateUI() {
  valueElement.textContent = counterValue;
}
function updateCounter(action) {
  if (action === "increment") {
    counterValue += 1;
  } else if (action === "decrement") {
    counterValue -= 1;
  }
  updateUI();
}

decrementButton.addEventListener("click", function () {
  updateCounter("decrement");
});

incrementButton.addEventListener("click", function () {
  updateCounter("increment");
});

updateUI();
