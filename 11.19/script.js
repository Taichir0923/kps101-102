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
        completed: false,
        id: 4
    },
    {
        ner: 'tailan beldeh',
        completed: false,
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
        windows[index].classList.add('open')
    })
})

function removeActiveClass(){
    tabs.forEach(tab => {
        tab.classList.remove('active');
    })

    windows.forEach(tsonh => {
        tsonh.classList.remove('open');
    })
}