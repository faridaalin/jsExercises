// able to aff to the Todo list
// Able to delete from the todo list
// Able to toggle to set text-decoration: line-through

let todos = [];
const inputField = document.querySelector("#inputField");

const listContainer = document.querySelector("#list");


// Add item to the list
const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", (event) => {
  todos.push(inputField.value)
  //todos.push(inputField.value);
  addTodos() 
});

 inputField.addEventListener('keyup', (event)=> {
   
    if(event.keyCode === 13) {
  todos.push(inputField.value);
       addTodos(inputField.value) 
     }
 });

const addTodos = (inputValue) => {
  listContainer.innerHTML = "";

  if (inputField.value) {
    
    for(const todo of todos) {
      listContainer.innerHTML += `<div class="listContainer">
      <input type="checkbox" name="" class="inpToggle" id="inpToggle">
      <label for="">${todo}<i class="fa fa-trash ml-8" id="delete"></i></label>
      </div>`;
    };

    inputField.value = "";
  } else {
    inputField.value = "";
  }
 
  removeItem()
 
};




// Remove item from the list
const removeItem = () => {

  for(const todo of todos) {}
    const removeItem = document.querySelectorAll('#delete')
    removeItem.forEach((item) => {
      item.addEventListener('click', () => {
        item.parentNode.parentElement.remove()

      })
    });

}

// const toggleTodo = ()=> {
//   const toggle = document.querySelector("#inpToggle");

//   for(const todo of todos) {
//     console.log(todo.checked === true)
//     if(toggle.checked === true) {
//       console.log('chould change');
      
//       listContainer.style.backgroundColor = "red";
//     } else {
//       console.log('nothing')
//     }
//   }
  
// }


