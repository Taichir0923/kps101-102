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
var DOM = /** @class */ (function () {
    function DOM() {
        this.text = document.querySelector('#text');
        this.input = document.querySelector('#input');
        this.button = document.querySelector('#btn');
        this.test();
    }
    DOM.prototype.clearInput = function () {
        this.input.value = '';
    };
    DOM.prototype.btnHandler = function () {
        this.text.innerHTML = this.input.value;
        this.clearInput();
    };
    DOM.prototype.test = function () {
        this.button.addEventListener('click', this.btnHandler.bind(this));
    };
    return DOM;
}());
var dom = new DOM();
// array , object , tuples
// tuples
// class Hi extends DOM {
// }
// const hi = new Hi();
