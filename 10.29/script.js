// DOM - Document Object Model
// document


const input = document.querySelector('#input');
// title.style.color = "yellow";
// title.style.backgroundColor = "black";

// title.classList.add("newClass")
// title.classList.remove("big")

// background-color => backgroundColor
// grid-template-columns => gridTemplateColumns
// let text = prompt("Title-n utgiig oruul");



// function changeColor(){
//     title.classList.toggle('yellow')
//     title.innerHTML = input.value;
// }

function getValue(num){
    if(num === "="){
       input.value = eval(input.value)
    } else {
        input.value += num;
    }
}