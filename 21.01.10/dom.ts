
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

class DOM {
    text: HTMLParagraphElement;
    input: HTMLInputElement;
    button: HTMLButtonElement;
    constructor(){
        this.text = document.querySelector('#text')! as HTMLParagraphElement;
        this.input = document.querySelector('#input')! as HTMLInputElement;
        this.button = document.querySelector('#btn')! as HTMLButtonElement;
        this.test()
    }

    private clearInput(){
        this.input.value = '';
    }

    private btnHandler (){
        this.text.innerHTML = this.input.value;
        this.clearInput();
    }

    private test(){
        this.button.addEventListener('click' , this.btnHandler.bind(this))
    }
}


const dom = new DOM();

// array , object , tuples

// tuples

// class Hi extends DOM {

// }

// const hi = new Hi();