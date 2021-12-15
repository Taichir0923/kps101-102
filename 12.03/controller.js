export function burtgeh(e , users , User , obj){
    e.preventDefault();
    
    const user = new User(obj.fullname, obj.email , obj.number, obj.password, obj.image);

    users.push(user);
    localStorage.setItem('users' , JSON.stringify(users));
}