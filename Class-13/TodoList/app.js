const addBtn = document.getElementById('add-btn');
const list = document.getElementById('list');
const todoInp = document.getElementById('todo-inp');


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

const todos = [
    {
        id: generateUUID(),
        task: "Go to Swimming",
        completed: false
    },
    {
        id: generateUUID(),
        task: "Learn React",
        completed: false
    },
    {
        id: generateUUID(),
        task: "Watch Web Series",
        completed: true
    },
]

function addTodo(todo) {
    todos.push(todo);
    renderList();
}

function renderList() {
    // Removing all the li's from the list
    while (list.firstChild) {
        list.firstChild.remove();
    }

    for (const todo of todos) {
        const li = document.createElement('li');
        const inputCheckbox = document.createElement('input');
        
        inputCheckbox.setAttribute('type', 'checkbox');
        inputCheckbox.checked = todo.completed;

        li.innerText = todo.task;
        li.append(inputCheckbox)
        
        list.append(li);
    }
}


addBtn.addEventListener('click', () => {
    const todoTask = todoInp.value;
    addTodo({ id: generateUUID(), task: todoTask, completed: false });
})

renderList();