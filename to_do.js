//-----MODEL SECTION------
// If local storage has a saved data use it (key), if not
// use default list

let todoList;

const savedList = JSON.parse(localStorage.getItem('todosKey'));

if(Array.isArray(savedList)){
  todoList = savedList
}else{
  todoList = [
    {
      title: 'Get groceries',
      dateValue: '2022-12-05',
      id: 'id1'
    },
    {
      title: 'Wash car',
      dateValue: '2022-12-06',
      id: 'id2'
    },
    {
      title: 'Make dinner',
      dateValue: '2022-12-07',
      id: 'id3'
    }
  ]
}


//Create todo
function createTodo(todo_task, todoDateValue, ide){
  todoList.push({
    title: todo_task,
    dateValue: todoDateValue,
    id: ide
  });

  saveTodo();
}

//Delete todo
function deleteTodos(idToDelete){
  todoList = todoList.filter(function (parameter2) {
    if (parameter2.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  });

  saveTodo();
}

//Save todo
function saveTodo(){
  localStorage.setItem('todosKey', JSON.stringify(todoList))
}

//------CONTROL---------

render();

function todoAdd(){
  const textBox = document.getElementById('todoText');
  const todo_task = textBox.value;

  const todoDate = document.getElementById('task_date');
  let todoDateValue = todoDate.value;

  const ide = '' + new Date().getTime();

  createTodo(todo_task, todoDateValue, ide);

  render();
  textBox.value = '';
}

function deleteTodo(event){
  // console.log(event)
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;

  deleteTodos(idToDelete);

  render();
}


//----VIEW------

document.title = 'TODO-APP';

function render(){
  document.getElementById('todo-list').innerHTML = '';

  todoList.forEach(function (todos) {
    const element = document.createElement('div');
    element.innerHTML = todos.title + ' - ' + todos.dateValue;
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Delete';
    deleteButton.style.marginLeft = '10px'
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todos.id;
    element.appendChild(deleteButton)
    const todoDiv = document.getElementById('todo-list')
    todoDiv.appendChild(element)
  })
}

















