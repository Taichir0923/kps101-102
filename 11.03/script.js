// To do list хийх.
// PSEUDO-Code

// let todos = ["ajildaa yvah", "kino uzeh"];

// 1. input тагыг js дотор хувьсагчид
// 2. хийх ажлуудыг хадгалах хоосон массив үүсгэ.
// 3. функц зарлаад, дотор нь input-н утгыг 2-р алхам дээр зарласан массив ру push хийх...
// 4. массив дотор байгаа өгөгдлүүдийг li таг ашиглан дэлгэцэнд харуулах

// const input = document.querySelector('#input')
// const container = document.querySelector('#container')

// let todos = [];

// function insertTodo(){
//     let todo = {
//         todoNer: input.value,
//         completed: false,
//         id: +Math.random().toString().split(".")[1]
//     }
//     todos.push(todo);
//     updateUI();
//     input.value = "";
// }
// function updateUI(){
//     container.innerHTML = "";
//     for(let i = 0; i < todos.length; i++){
//         container.insertAdjacentHTML('afterbegin', `
//             <li id="todo">${todos[i].todoNer}</li>
//         `)
//     }
// }

// document.addEventListener('click', e => {
//     if(e.target.id === "todo"){
//         e.target.classList.toggle('completed')
//     }
// })

// insertAdjacentHtml
// createDocument

// beforebegin - sibling element nemj ogno, ah n...
// afterbegin - child elementuudiin deer n orj irne
// beforeend - child elementuudiin door n orj irne
// afterend - sibling element nemj ogno, duu n...

// Жагсаалтын аль нэг дээр дарах үед хийсэн гэж тэмдэглэнэ. Жич: дундуур зураас ашиглах


// darah uyd completed: true bolgono
// hiisen, hiigeegui ajluudiig tus tusad n angilj hardag bolgono

// update hiih
// delete hiih