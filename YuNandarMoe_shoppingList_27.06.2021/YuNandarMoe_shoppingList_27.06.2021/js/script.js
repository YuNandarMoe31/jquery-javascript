/* shopping list */
const inputTag = document.getElementsByClassName("form-control")[0];
const shoppingListTag = document.getElementsByClassName("shoppingListContainer")[0];

let productId = 1;
const handleChange = (event) => {
  const inputValue = event.target.value;
  const parentDiv = document.createElement("div");
  const spanTag = document.createElement("span");
  spanTag.id = productId;
  parentDiv.classList.add("productName");
  parentDiv.addEventListener("click", () => {
    const classExist = parentDiv.classList.contains("purchased");
    if (classExist) {
      parentDiv.classList.remove("purchased");
    } else {
      parentDiv.classList.add("purchased");
    }
  });
  const product = productId.toString() + ". " + inputValue;
  spanTag.append(product);
  parentDiv.append(spanTag);
  shoppingListTag.append(parentDiv);
  inputTag.value = "";
  productId += 1;
};
inputTag.addEventListener("change", handleChange);