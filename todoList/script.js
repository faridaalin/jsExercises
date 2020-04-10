// able to aff to the Todo list
// Able to delete from the todo list
// Able to toggle to set text-decoration: line-through

let todos = [];
const inputField = document.querySelector("#inputField");

const listContainer = document.querySelector("#list");

// Add item to the list
const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", (event) => {
  if (inputField.value) {
    todos.push(inputField.value);
    addTodos(todos);
  } else {
    alert("add something to your list");
  }
});

inputField.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && inputField.value) {
    todos.push(inputField.value);
    addTodos(todos);
  }
});

const addTodos = (todos) => {
  listContainer.innerHTML = "";

  todos.forEach((todo, index) => {
    listContainer.innerHTML += `<div class="listContainer">
      <input type="checkbox" name="" class="inpToggle" id="inpToggle">
      <label for="">${todo}<i class="fa fa-trash ml-8" id="delete" data-index="${index}"></i></label>
      </div>`;
    inputField.value = "";
  });
  removeItem();
};

// Remove item from the list and update the list and display it
const removeItem = () => {
  const deleteIcon = document.querySelectorAll("#delete");

  for (let j = 0; j < deleteIcon.length; j++) {
    let index = deleteIcon[j].dataset.index;
    deleteIcon[j].addEventListener("click", () => {
      todos.splice(index, 1);
      addTodos(todos);
    });
  }
};
