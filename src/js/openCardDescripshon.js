import { createInfoModal } from "./creatyeModalInfoFruit";
import data from "../products.json";
const fruitList = document.querySelector(".fruits__list");
const modalBox = document.querySelector(".modal-box");
console.log(data);

fruitList.addEventListener("click", () => {
  data.fruits.forEach((fruit) => {
  modalBox.innerHTML = createInfoModal(fruit);
  console.log(fruit);
   
  });
  
});

