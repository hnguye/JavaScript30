const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = [];

function addItem(e) {
    e.preventDefault();
    const text = this.querySelector("[name-item]").value;
    const item = {
        text,
        done: false,
    };
    items.push(item);
    populateList(items, itemsList);
    this.reset();
}

function populateList(plates = [], platesList) {
    plateList.innerHTML = plates
        .map((plate, i) => {
            return `
        <li>
            <input type='checkbox' data-index=${i} id='item${i} checked='false'/>
            <label for="">${plate.text}</label>
        </li>
        `;
        })
        .join("");
}
addItems.addEventListener("submit", addItem);
