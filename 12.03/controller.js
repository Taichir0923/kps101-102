export function burtgeh(e , users , User , obj){
    e.preventDefault();
    
    const user = new User(obj.fullname, obj.email , obj.number, obj.password, obj.image);

    users.push(user);
    localStorage.setItem('users' , JSON.stringify(users));
}

export function writeComment(currentUser , comment , Comment , currentPost , updateUi , comments) {
    if(!currentUser){
        alert('Сэтгэгдэл үлдээхийн тулд нэвтрэх шаардлагатай...')
    } else {
        if(!comment.value){
            alert('Хоосон байна.')
        } else {
            const setgegdel = new Comment(currentUser.id , currentPost.id , comment.value);

            comments.push(setgegdel);

            localStorage.setItem('comments' , JSON.stringify(comments));

            comment.value = '';
            updateUi()
        }
    }
}