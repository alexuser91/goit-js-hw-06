const listElem = document.querySelector("#categories");

console.log(`Number of categories:${listElem.children.length}`);

const categoryItems = listElem.querySelectorAll(".item");

categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector("h2").textContent;

  const categoryElements = categoryItem.querySelectorAll("li");

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
});
