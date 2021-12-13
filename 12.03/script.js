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

class User {
    constructor(fullname, email, number, password , avatar){
        this.fullname = fullname;
        this.email = email;
        this.number = number;
        this.password = password;
        this.avatar = avatar
        this.id = Math.random().toString().split('.')[1];
    }
}

register.addEventListener('click' , function(e){
    e.preventDefault();
    
    const user = new User(fullname.value, email.value , number.value, password.value, image.value);

    users.push(user);
    localStorage.setItem('users' , JSON.stringify(users));
})

// JS modules , IIFE , export , import