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

input.addEventListener('input', () => {
    const hasCapLetter = /[A-Z]/
    const hasSmallLetter = /[a-z]/
    const hasNumber = /[0-9]/
    const hasSpeChar = /\W/
    const isLength8 = /.{8,}/
    if(hasCapLetter.test(input.value)){
        console.log('password is powerful')
    }
})

// Password strength shalgah function bich
// 1. Tom useg aguulsan bh
// 2. Jijig useg aguulsan bh
// 3. Too aguulsan bh
// 4. Temdegt aguulsan bh
// 5. hamgiin bagadaa 8 orontoi bh