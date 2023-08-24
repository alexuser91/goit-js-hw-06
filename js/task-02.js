const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElem = document.querySelector("ul#ingredients");

ingredients.forEach((ingredient) => {
  const liElem = document.createElement("li");
  liElem.textContent = ingredient;
  liElem.classList.add("item");
  ulElem.appendChild(liElem);
});
