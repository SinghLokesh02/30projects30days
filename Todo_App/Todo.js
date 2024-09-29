const addTodo = document.querySelector(".add-todo");
const todoItem = document.querySelector("#taskInput");
const todoList = document.querySelector("#taskList");
 
addTodo.addEventListener("click", (e) => {
  e.preventDefault();
  //   Adding Item to The List
  const todoText = todoItem.value;
  todoItem.value = "";
  const newLi = document.createElement("li");
  newLi.innerHTML = ` <span>${todoText}</span>
            <div class="btn">
              <button class="delete-btn btn">Delete</button>
              <button class="complete-btn btn">Complete</button>
            </div>`;
  todoList.append(newLi);
});

document.addEventListener("click", (e) => {
  // Check Item To Delete
  if (e.target.classList.contains("delete-btn")) {
    const itemToRemove = e.target.parentElement.parentElement;
    itemToRemove.remove();
  }
  // Checking the Item is Complete or not
  if (e.target.classList.contains("complete-btn")) {
    const changeStyle = e.target.parentElement.previousElementSibling;
    console.log(changeStyle);
    changeStyle.style.textDecoration = "line-through";
    changeStyle.style.color = "red";
  }
});
