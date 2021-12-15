export class User {
    constructor(fullname, email, number, password , avatar){
        this.fullname = fullname;
        this.email = email;
        this.number = number;
        this.password = password;
        this.avatar = avatar
        this.id = Math.random().toString().split('.')[1];
    }
}
