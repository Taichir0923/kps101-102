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

export class Comment {
    constructor(userId , postId , comment){
        this.userId = userId;
        this.postId = postId;
        this.comment = comment;
        this.created = {
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        };
        this.id = Math.random().toString().split('.')[1];
    }
}