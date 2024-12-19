const input = document.getElementById('input');
const createButton = document.getElementById('create_button');
const todolist = document.getElementById('todo_list');


const createTodo = () => {
    if (!input.value.trim ()) return alert ('напиши что-нибудь');

    const div = document.createElement('div');
    const text = document.createElement('h3');
    div.setAttribute('class', 'block_text');
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delete_button');
    deleteButton.innerHTML = 'delete'
    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'edit_button');
    editButton.innerHTML = 'edit'

    deleteButton.onclick =()=>{
        todolist.removeChild(div)
    }
    editButton.onclick =()=>{
        const editText = prompt('напишите свои измениние')
        if(editText.trim().length > 0){
            text.innerHTML = editText
        }

    }

    text.innerText = input.value;
    div.appendChild(text);
    div.appendChild(deleteButton);
    div.appendChild(editButton);
    todolist.append(div);

    input.value = '';

};

// createButton.addEventListener('click', createTodo);
createButton.onclick = (e) => createTodo();

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') createTodo();
});



