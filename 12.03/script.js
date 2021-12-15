import { User } from "./model.js";
import { burtgeh } from "./controller.js";
const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const password = document.querySelector('#password');
const register = document.querySelector('#register');
const image = document.querySelector('#image');

var users;


if(localStorage["users"]){
    users = JSON.parse(localStorage["users"])
} else {
    users = [];
}

register.addEventListener('click' , e => {
    burtgeh(e , users , User , {
        fullname: fullname.value,
        email: email.value,
        number: number.value,
        password: password.value,
        image: image.value,
    })
}) 


// JS modules , IIFE , export , import