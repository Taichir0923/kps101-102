// Regular Expressions

// Primitive DataTypes - Number , String , Boolean , null , undefined
// Non-Primitive DataTypes - Object , Arrays , Regular Expressions
// {} - Object
// [] - Arrays
// // - RegExp

// | - or logic
// g - taarch bgaa buh ogogdliig tsugluulj avna
// i - ignore the case - tom jijig usgiin ylgaag arilgana
// . - tsegiin oron ymarch temdegt orj ireh bolomjtoi gj uzne
// ^ (carret) - Өгөгдөл ямар тэмдэгтээр (үг) эхлэхийг заана
// $ - Өгөгдөл ямар тэмдэгтээр (үг) төгсөхийг заана
// + - dor hayj ng udaa taarah case
// * - 0 bolon tuunees ih niitsel
// [] - herev haaltan dotor ^ orj irvel haaltan dotorh temdegtees busad buh ogogdliig avna
// \d == [0-9] - бүх тоон өгөгдөл
// \D == [^0-9] - тооноос бусад бүх өгөгдөл
// \s == ' ' - white space
// \S == [^ ] - white space-с бусад бүх өгөгдөл
// \w == [a-zA-Z0-9_] - бүх том жижиг үсэг, тоонууд болон доогуур зураас
// \W == [^a-zA-Z0-9_] - Онцгой тэмдэгтүүд
// {n,} - хамгийн багадаа таарах өгөгдөл
// {n,m} - өгөгдөл таарах завсрыг илэрхийлнэ
// {,n} - хамгийн ихдээ таарах өгөгдөл
// {n}


// const tomUsegAguuljBn = /[A-Z]/;

// const password = "myPass1";

// console.log(tomUsegAguuljBn.test(password));.

const input = document.querySelector('#input');
const texts = document.querySelectorAll('.text')

input.addEventListener('input', () => {
    const regExp = [/[a-z]/ , /[A-Z]/ , /[0-9]/ , /\W/ , /.{8,}/]
    regExp.forEach((exp , index) => {
        if (exp.test(input.value)){
            texts[index].classList.remove('text-red-400');
            texts[index].classList.add('text-gray-400');
            texts[index].classList.add('line-through');
        } else {
            texts[index].classList.add('text-red-400');
            texts[index].classList.remove('text-gray-400');
            texts[index].classList.remove('line-through');
        }
    })

    const checkPass = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W)(?=.{8,})/;

})


// Password strength shalgah function bich
// 1. Tom useg aguulsan bh
// 2. Jijig useg aguulsan bh
// 3. Too aguulsan bh
// 4. Temdegt aguulsan bh
// 5. hamgiin bagadaa 8 orontoi bh

// Gert hex shalgah rexExp bichih - #AAABBB - ^ ... $
//  {3, 6}$ 
// 3 element
// 6 element

// a-f - 0-9
