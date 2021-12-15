// IIFE - Immediately Invoked Function Expression
const model = (
    function(){
        class User{
            constructor(username){
                this.username = username
            }
        }

        class Post {
            constructor(title){
                this.title = title
            }
        }

        return {
            User: User,
            Post: Post
        };
    }
)();

const controller = (() => {
    const user = new model.User('Narada');
    const post = new model.Post('Title');
    return {
        user: user,
        post: post,
        testFunction: function(arg){
            console.log(arg)
        }
    }
})()

const ui = (() => {
    const username = document.querySelector('#username')
    username.innerHTML = controller.user.username;
    controller.testFunction(123);
})()

// MVC - Model View Controller