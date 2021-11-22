/**
 * {
 *  ajliinNer: "Kino uzeh",
 *  completed: false,
 *  id: +Math.random().toString().split('.')[1]
 * }
 */

let todos = [
    {
        ner: 'Hicheeld suuh',
        completed: false,
        id: 1
    },
    {
        ner: 'Hurald suuh',
        completed: false,
        id: 2
    },
    {
        ner: 'Delguur oroh',
        completed: false,
        id: 3
    },
    {
        ner: 'Tsetserlegees huuhed avah',
        completed: true,
        id: 4
    },
    {
        ner: 'tailan beldeh',
        completed: true,
        id: 5
    },
]

function updateTask(index){
    const updatedTodos = [...todos];
    updatedTodos[index] = {
        ...updatedTodos[index],
        completed: true
    }

    todos = updatedTodos;
}

// CRUD - Create Read Update Delete

const tabs = document.querySelectorAll('.tab');
const windows = document.querySelectorAll('.window');
tabs.forEach((tab , index) => {
    tab.addEventListener('click', () => {
        removeActiveClass();
        tab.classList.add('active');
        windows[index].classList.add('open');
        if(index === 1){
            const done = todos.filter(todo => todo.completed === true);
            renderItems(index , done)
        } else if(index === 2){
            const undone = todos.filter(todo => todo.completed !== true);
            renderItems(index , undone)
        } else {
            renderItems(index , todos)
        }
    })
})

renderItems(0 , todos)

function renderItems(index , massiv){
    windows[index].innerHTML = '';
    massiv.forEach(el => {
        windows[index].insertAdjacentHTML('beforeend', `
            <li id="todo-${el.id}">
                <p>${el.ner}</p>
                <div class="buttons">
                    <button id="toggleTodo">
                        <i class="fas fa-check"></i>
                    </button>
                    <button id="deleteTodo">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </li>
        `)
    })
}



function removeActiveClass(){
    tabs.forEach(tab => {
        tab.classList.remove('active');
    })

    windows.forEach(tsonh => {
        tsonh.classList.remove('open');
    })
}