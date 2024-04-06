const boxModal = document.querySelector(".modal-box")

export const createInfoModal = (product) => {
    const create = `
    <div class="modal">
    <h2>${product.name} ${product.emoji}</h2>
      <p>Опис: ${product.descrip}</p>
      <input class="quantityModal" type="text" placeholder="Скільки штучок">
      <button class="buyBynFruit"> купити</button>
    </div>
    `
return create;


}



