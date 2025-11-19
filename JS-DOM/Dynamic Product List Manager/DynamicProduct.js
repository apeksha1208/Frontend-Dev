const productInput = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");

let currentEdit = null; 
addBtn.addEventListener("click", () => {
  const value = productInput.value.trim();
  if (!value) return alert("Enter a product");

  addProduct(value);
  productInput.value = "";
});

function addProduct(name) {
  const li = document.createElement("li");
  li.innerHTML = `
      <span class="text">${name}</span>
      <div>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
      </div>
    `;
  productList.appendChild(li);
}
productList.addEventListener("click", function (e) {
  const target = e.target;
  const li = target.closest("li");

  if (target.classList.contains("deleteBtn")) {
    li.remove();
  }

  if (target.classList.contains("editBtn")) {
    startEdit(li);
  }
});
function startEdit(li) {
  if (currentEdit) finishEdit(currentEdit); // auto-finish previous edit

  currentEdit = li;

  const textSpan = li.querySelector(".text");
  const currentValue = textSpan.textContent;

  li.innerHTML = `
      <input class="edit-input" type="text" value="${currentValue}">
      <button class="saveBtn">Save</button>
    `;
}
document.addEventListener("click", function (e) {
  if (currentEdit && !currentEdit.contains(e.target)) {
    finishEdit(currentEdit);
  }
});

productList.addEventListener("click", function (e) {
  if (e.target.classList.contains("saveBtn")) {
    finishEdit(currentEdit);
  }
});
function finishEdit(li) {
  const input = li.querySelector(".edit-input");
  const newText = input.value.trim() || "Unnamed Product";

  li.innerHTML = `
      <span class="text">${newText}</span>
      <div>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
      </div>
    `;

  currentEdit = null;
}
