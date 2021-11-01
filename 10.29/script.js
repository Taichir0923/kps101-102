// DOM - Document Object Model
// document


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
// const input = document.querySelector('#input');

// let isEqual = false;
    
// function getValue(num){
//     if(num === "="){
//        input.value = eval(input.value);
//        isEqual = true;
//     } else if(
//         (num === "+" || num === "-" || num === "*" || num === "/") && (
//             input.value[input.value.length - 1] === "+" ||
//             input.value[input.value.length - 1] === "-" ||
//             input.value[input.value.length - 1] === "*" ||
//             input.value[input.value.length - 1] === "/"
//         )
//     ){
//         input.value = input.value.slice(0, input.value.length - 1);
//         input.value += num
//     } else {
//         if(isEqual){
//             if(num === "+" || num === "-" || num === "*" || num === "/"){
//                 input.value += num;
//             } else {
//                 input.value = "";
//                 input.value += num;
//             }
//             isEqual = false;
//         } else { 
//             input.value += num;
//         }
//     }
// }

// SwopWatch

setInterval((arg, arg1) => {
    console.log(arg, arg1)
}, 1000/60, "bnfdklghjfdslk", "value");
// function testAnimation(){
//     requestAnimationFrame(testAnimation);
//     console.log("gjkfdlj")
// }

// testAnimation()
// 60FPS

// canvas



// const dom = document.querySelector('#stop')
// let doli = 0;
// let minute = 0;
// let hour = 0;
// let second = 0;
// setInterval(() => {
//     console.log(second);
//     second++;
//     dom.innerHTML = second
// }, 1000)