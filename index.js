const inputElem = document.querySelector("#todo-input");
const submitBtn = document.querySelector("button");
const deleteBtn = document.querySelector('.delete')
const listElem = document.querySelector("#todo-list");

// submitBtn.addEventListener("click", addTodo);
// deleteBtn.addEventListener('click', a)

// function addTodo() {
//     const todoText = inputElem.value;
//     const todoElem = document.createElement("h3");
//     todoElem.textContent = todoText;


//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.classList.add("delete-btn");
//     deleteBtn.onclick = function() {
//         listElem.removeChild(todoElem);
//     };

//     todoElem.appendChild(deleteBtn);
//     listElem.appendChild(todoElem);
//     inputElem.value = "";
// }



submitBtn.addEventListener("click", addTodo);

function addTodo() {
    const todoText = inputElem.value;
    const todoElem = document.createElement("li");
    todoElem.textContent = todoText;

    // Create delete button element
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function() {
        listElem.removeChild(todoElem);
    };

    // Append delete button to the todo item
    todoElem.appendChild(deleteBtn);
    listElem.appendChild(todoElem);
    inputElem.value = "";
    submitBtn.removeEventListener("click", addTodo);
}

 