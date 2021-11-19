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