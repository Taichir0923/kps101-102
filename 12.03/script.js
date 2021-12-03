const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const password = document.querySelector('#password');
const register = document.querySelector('#register');

var users;

if(localStorage["users"]){
    users = JSON.parse(localStorage["users"])
} else {
    users = [];
}

register.addEventListener('click' , function(e){
    e.preventDefault();
    
    const user = {
        fullname: fullname.value,
        email: email.value,
        number: number.value,
        password: password.value,
    }

    users.push(user);
    localStorage.setItem('users' , JSON.stringify(users));
})