
// let numbers: number[] = [12, 13, 14]

// interface user {
//     username: string,
//     age: number,
//     hobbies: string[]
// }

// let tup: [string , user] = ["hi" , {
//     username: "Narada",
//     age: 23,
//     hobbies: ['12']
// }]
interface todo {
    taskName: string,
    id: string,
    completed: boolean
}

class DOM {
    text: HTMLDivElement;
    input: HTMLInputElement;
    button: HTMLButtonElement;
    todos: todo[] = [];
    constructor(){
        this.text = document.querySelector('#text')! as HTMLDivElement;
        this.input = document.querySelector('#input')! as HTMLInputElement;
        this.button = document.querySelector('#btn')! as HTMLButtonElement;
        // this.todos = [];
        this.test()
    }

    private printTodos(){
        this.text.innerHTML = '';
        this.todos.forEach(todo => {
            this.text.insertAdjacentHTML('afterbegin' , `
                <p>${todo}</p>
            `)
        })
    }

    private clearInput(){
        this.input.value = '';
    }

    private btnHandler (){
        this.todos.push(this.input.value);
        this.clearInput();
        this.printTodos();
    }

    private test(){
        this.button.addEventListener('click' , this.btnHandler.bind(this))
    }
}


const dom = new DOM();


// Object хадгалах