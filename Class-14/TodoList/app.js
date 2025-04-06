const list = document.getElementById('list');
const todoInp = document.getElementById('todo-inp');
const form = document.querySelector('form');


function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

const todos = JSON.parse(window.localStorage.getItem('todos') || '[]');

function syncToLocalStorage() {
    window.localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo(todo) {
    todos.push(todo);
    renderList();
    syncToLocalStorage()
}

function deleteTodo(id) {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
        throw new Error(`Todo with id ${id} doesn't exist`);
    }
    todos.splice(index, 1);
    renderList();
    syncToLocalStorage()
}

function markTodoCompleted(id) {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
        throw new Error(`Todo with id ${id} doesn't exist`);
    }

    todo.completed = !todo.completed;

    renderList();
    syncToLocalStorage();
}

function renderList() {
    // Removing all the li's from the list
    while (list.firstChild) {
        list.firstChild.remove();
    }

    for (const todo of todos) {
        const li = document.createElement('li');
        const inputCheckbox = document.createElement('input');
        const span = document.createElement('span');
        const trashBtn = document.createElement('i');
        
        inputCheckbox.setAttribute('type', 'checkbox');
        trashBtn.classList.add('bi','bi-trash','me-2')
        inputCheckbox.checked = todo.completed;

        inputCheckbox.classList.add('form-check-input');
        li.classList.add("list-group-item","mb-2","d-flex","justify-content-between");

        trashBtn.addEventListener('click', (event) => {
            const targetLi = event.target?.parentElement?.parentElement;
            const id = targetLi.getAttribute('id');
            deleteTodo(id);
        });

        inputCheckbox.addEventListener('change', (event) => {
            const targetLi = event.target?.parentElement?.parentElement;
            const id = targetLi.getAttribute('id');
            markTodoCompleted(id);
        })
       
        span.append(trashBtn);
        span.append(inputCheckbox);

        if (todo.completed) {
            li.classList.add('text-decoration-line-through');
        }

        li.setAttribute('id', todo.id);
        li.innerText = todo.task;
        li.append(span)
        
        list.append(li);
    }
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoTask = form.elements[0].value;
    addTodo({ id: generateUUID(), task: todoTask, completed: false });
    form.elements[0].value = "";
});

renderList();