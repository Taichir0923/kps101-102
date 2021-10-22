"use strict"
// // ES5
// // DataType - Primitive DataTypes
// // 1. String - text tovtei - "jgklhlkdfjlk 123 05460 true"
// // 2. Number - toon torliin data - 123456789
// // 3. Boolean - true, false [1, 0]
// // 4. undefined - todohoigui
// // 5. null - hooson

// // variable - хувьсагч
// // js reserved words
// // too bj bolohgui
// // toogoor ehelj bolohgui
// // var myVar = "gjfkljgd"
// // var number = 123456;
// // var bolean = true;

// // console.log(myVar);
// // Blocking
// // alert('jfdkkl1')
// // console.log('jgfkl')
// // alert('alert after console')
// // console.log('finished')

// // 

// // var x = 5;
// // var y = 6;
// // var temp = x;
// // x = y;
// // y = temp
// // var str = "23"

// // remainder operator
// // =
// // ==
// // ===
// // if statement
// // if else statement
// // if else if statement


// // 15 - 25 zaluu nas
// // 26 - 40 ider nas
// // 40 - 55 ahmad
// // 55 - ondor

// // loop 
// // huvisagch, condition, operator
// // counter
// // [], {}
// // for, for in, for of, while, do while
// // for(var i = 0; i <= 10; i++){
// //     console.log(i + ' hi')
// // }

// // var i = 0;
// // do {
// //     console.log(i + " hi")
// //     i++
// // } while(i < 10)

// // 100 hurtel toonoos buh 3t huvaagddag toog consold hevle

// // index 
// // for(var i = 0; i < 100; i++){
// //     if(i%3 === 0){
// //         console.log(i)
// //     }
// // }
// // let i = 0
// // do {
// //     if(i%3 === 0){
// //         console.log(i)
// //     }
// //     i++;
// // } while (i < 100)

// // let bla;
// // console.log(bla)
// // var x = prompt('ehnii toog oruul');
// // var y = +prompt('2 dahi toog oruul');
// // var z = +prompt('3 dahi toog oruul');

// // var counter = 0;
// // if(x === 0) {
// //     counter++
// // }

// // if(y === 0) {
// //     counter++
// // }

// // if(z === 0) {
// //     counter++
// // }

// // // console.log(counter + ' shirheg 0-tei tentsuu too bna')
// // let revers = 0
// // for(var i = x.length - 1; i >= 0; i--){
// //     revers += +x[i];
// // }

// // Data Structrue - {}, []
// // Arrays - Массив
// var arr = [12, 13, 14, 15, 16];
// var arr2 = [100, 101, 102]
// // array methods

// // push - массивын төгсгөлд элемент нэмнэ
// arr.push(100);
// arr.push(100);
// arr.push(100);
// arr.push(100);
// arr.push(200);

// // pop() - массивийн сүүлийн элементийг устгана
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();

// // unshift() - массивийн эхэнд өгөгдөл нэмнэ
// arr.unshift(1000);
// arr.unshift(1000);
// arr.unshift(1000);
// arr.unshift(1000);
// arr.unshift(1000);

// // shift() - Массивийн эхний өгөгдлийг устгана
// arr.shift()
// arr.shift()
// arr.shift()
// arr.shift()
// arr.shift()

// // splice - дурын өгөгдлийг устгана
// arr.splice(2, 1)

// // concat - массивийг өргөтгөнө
// var newArray = arr.concat(arr2);

// for(var i = 0; i < newArray.length; i++){
//     console.log(newArray[i])
// }

// // 1. 10ш тоо агуулсан массив үүсгээд, бүх сондгой утгуудыг консолд хэвлэ

// // 2. 10ш дата агуулсан массив дотроос зөвхөн стринг төрлийн утгуудыг консолд хэвлэ

// // arr = [1, 5, 7, 3, 2]; target = 9;
// // гаралт: [2, 4]
// // гаралт: []

// var arr = [1, 5, 7, 3, 2];
// var target = 5;
// var result = [];

// for(var i = 0; i < arr.length; i++){
//     for(var j = i + 1; j < arr.length; j++){
//         if(arr[i] + arr[j] === target){
//             result.push(i)
//             result.push(j)
//         }
//     }
// }

// console.log(result)

// Object - {}
// var user = {
//     ner: "Narada",
//     mergejil: 'designer',
//     email: 'narada@mail.com',
//     nas: 20,
//     hayg: {
//         hot: 'ub',
//         duureg: 'HUD'
//     }
// }

// var user1 = {
//     ner: "Bat",
//     email: 'bar@example.com',
//     mergejil: 'designer',
//     nas: 20,
//     hayg: {
//         hot: 'ub',
//         duureg: 'HUD'
//     }
// }

// var arr = [1, 5, 7, 3, 2];

// for(el of arr){ // for of loop
//     console.log(el)
// }

// for(pro in hun){ // for in loop
//     console.log(hun[pro])
// }

// [{}, {}, {}]

// let users = []
// users.push(user);
// users.push(user1);

// 1. 5ш хэрэглэглэгчийн дата агуулсан обжект үүсгэ
// 2. 5ш обжектийг массив руу push хий
// 3. Хэрэглэгчдийн мэдээлэл агуулсан массив дотроос 
// имэйлээр нь хэрэглэгч хайж олоод, тухайн хэрэглэгчийн 
// обжектийг консолд хэвлэ

// for(var i = 0; i < users.length; i++){
//     if(users[i].email === 'bar@example.com'){
//         console.log(users[i])
//     }
// }

// for(usr of users){
//     if(usr.email === 'narada@mail.com'){
//         console.log(usr)
//     }
// }

// гэрт
// 4. 10 гишүүн болгоно.
// 5. Гэрийн хаяг болон нас оруулна.
// 6. СБД-т амьдардаг 18-25 насны хүмүүсийн датаг консолд харуулна

// Function
// function ex3(){
//     for(var i = 0; i < 100; i++){
//         if(i > 9){
//             console.log(i)
//         }
//     }
// }

// ex3();
// var x = 12; // global variable
// function ex5(){ // local variable
//     console.log(x.toString().length)
//     console.log(y)
// }


// console.log(too)

// 2x - 8 = 10, x = 9
// 2ax - 8 = 10
// let z;
// function nasToots(on){
//     var nas = 2021 - on;
//     return nas;
// }

// function ex5(too){
//     return too.toString().length;
// }

// callstack - 
// callback - 
// recursion

// function printSomething(){
//     console.log('ta ' + ex5(123) + ' orontoi too oruulllaa')
// }
// 
// function sayHi(num){
//     if(num === 1) {
//         return num
//     };
//     return num + sayHi(num - 1);
// }

// let sum = 0;

// for(let i = 0; i <= 100; i++){
//     sum += i;
// }

// REST OPERATOR ...
// var arr = [5, 6, 7, 8, 9];
// var newArray = [...arr, 56];
// var obj = {
//     a: 56,
//     b: 23
// }

// var jj = {
//     ...obj,
//     c: 123
// }

// rest parameter

// function getParams(...arg){
//     console.log(arg)
// }
// var arr = [false, true];
// function exe3(arr){
//     var counter = 0;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] === true){
//             counter++
//         }
//     }

//     return counter;
// }

// function exe2(base, height){
//     return (base * height) / 2
// }

// function exe4(obj) {
//     var keys = [];
//     var vals = [];
//     for (let key in obj) {
//         keys.push(key);
//         vals.push(obj[key])
//     }

//     return [keys, vals]
// }

// // leetcode.com
// // codeforces.com
// // codeforces.mn

// function exe5(firstEl, len) {
//     var result = [];
//     for (var i = 1; i <= len; i++) {
//         result.push(firstEl * i)
//     }
//     return result;
// }

// function exe6(...boxes) {
//     var result = 0;

//     for (var i = 0; i < boxes.length; i++) {
//         if (boxes[i].length === 3) {
//             var volume = 1;
//             for (var j = 0; j < boxes[i].length; j++) {
//                 volume *= boxes[i][j];
//             }
//             result += volume;
//         }
//     }

//     return result;
// };
// bubble sort
// selection
// insertion
// merge sort
// radix sort

// var arr = [54, 23, 48, 52, 1, 0, 26, 123, 26]

// function bubbleSort(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// // var a = 5;
// // var b = 6;
// // var temp = a;

// // a = b;
// // b = temp;
// // 5, 6, 7, 5, 6, 2, 78, 5


// // 45, 12, 52, 63, 482,2, 15, 26, 46
// // [12, 45]   [52, 63]   [2, 482]   [15, 26]   [46]
// // [12, 45, 52, 63]   [2, 15, 26, 482] [46]
// // [2, 12, 15, 26, 45, 52, 63, 482] [46]
// // [2, 12, 15, 26, 45, 46, 52, 63, 482]

// // 
// function mergeArray(left, right){
//     var result = [];
//     var i = 0;
//     var j = 0;

//     while(i < left.length && j < right.length){
//         if(left[i] < right[j]){
//             result.push(left[i]);
//             i++;
//         } else {
//             result.push(right[j]);
//             j++;
//         }
//     }

//     for(i; i < left.length; i++){
//         result.push(left[i])
//     }

//     for(j; j < right.length; j++){
//         result.push(right[j])
//     }

//     return result;
// }

// function mergeSort(arr){
//     if(arr.length <= 1){
//         return arr;
//     }
//     var midIndex = Math.floor(arr.length/2);
//     var left = mergeSort(arr.slice(0, midIndex)); // 3
//     var right = mergeSort(arr.slice(midIndex)); // 4
    
//     return mergeArray(left, right);
// }

// // 5

// // [5, 12, 23], [6, 8, 21, 25, 33, 39, 41]
// // [5, 6, 8, 12, 21, 23, 25, 33, 39, 41]

// // 45, 12, 52, 63, 482, 2, 15, 26
// // 45, 12, 52, 63    482, 2, 15, 26
// // 45, 12    52, 63      482, 2      15, 26
// // 45, 12, 52, 63, 482, 2, 15, 26


// // getNum(num, i)
// // 4561263, 5 => 6



// // 156, 0
// // 156 / 1 => 156 / 10 => 6

// // 14564123, 5
// // 145/10 => 5
// var num = 565464;
// function getDigit(num, i){
//     // if(num.toString().length <= i){
//     //     return 0
//     // }
//     // return +num.toString().split('').reverse()[i]
//     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
// }
// // 
// function countDigits(num){
//     return num >= 0 ? num.toString().length : num.toString().length - 1;
// }

// function maxDigit(arr){
//     var maximum = 0;
//     for(var i = 0; i < arr.length; i++){
//         maximum = Math.max(maximum, countDigits(arr[i]))
//     }
//     return maximum;
// }


// function radixSort(arr){
//     var mxDigit = maxDigit(arr);
//     for(var i = 0; i < mxDigit; i++){
//         var bucket = Array.from({length: 10}, function(){
//             return [] 
//         })
//         for(var j = 0; j < arr.length; j++){
//             var order = getDigit(arr[j], i);
//             bucket[order].push(arr[j])
//         }

//         arr = [].concat(...bucket);
//     }
//     return arr;
// }

// [456123, 45, 12, 45, 12,48, 45641] => 6

// Ternary Operator ? :
// var nas = 15;
// nas >= 18 ? console.log('adult') : console.log('child')

// ES6 => EcmaScript 2015
// var => let
// constant variable => 
// const ner = "Narada";
// {
//     let x = 5;
//     console.log(x)
// }


// for in, for of

// var nerHevleh = function(){
//     console.log('ES5')
// }

// arrow function
// const printNer = () => "Narada";

// function selectionSort(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         var minIndex = i;
        // for (var j = i + 1; j < arr.length; j++) {
        //     if (arr[minIndex] > arr[j]) {
        //         minIndex = j;
        //     }
        // }
        // var temp = arr[i];
        // arr[i] = arr[minIndex];
        // arr[minIndex] = temp;
//     }
//     return arr;
// }

// const selectionSort = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         let minIndex = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[minIndex] > arr[j]) {
//                 minIndex = j;
//             }
//         }
//         let temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//     }

//     return arr;
// }

// object, this keyword, object function
// let object = {
//     ner: "Narada",
//     nasTootsoh: function(on){
//         this.nas = 2021 - on
//     }
// }

// object.shineUtga = 56

// this opertor => window
// window.alert("Hi")

// function callWindow(){
//     console.log(this)
// }

// object.nasTootsoh()

// JS dotorh buh zuils n OBJECT
// s


// callback

// map, filter, reduce, sort, find, findIndex, forEach
// let arr = [56, 58, 52, 41, 56, 93, 23, 14, 25, 32];

// arr.forEach(function(bla){
//     console.log(bla * 2)
// })

// arr.forEach((el) => {
//     console.log(el*3)
// })

// console.log(arr.reduce((a, b) => a + b))
// console.log(arr.sort((a, b) => b - a));
// 

// let x = "gfdsgjkfsdl"

// polyfill;
// Array.prototype.myFilter = function(callback){
//     var result = [];
//     for(var i = 0; i < this.length; i++){
//         if(callback(this[i], i) === true){
//             result.push(this[i])
//         }
//     }
//     return result;
// }

// // find , findIndex
// Array.prototype.myFind = function(callback){
//     var result = undefined;
//     for(var i = 0; i < this.length; i++){
//         if(callback(this[i], i) === true){
//             result = this[i];
//         }
//     }
//     return result;
// }

// Array.prototype.myFindIndex = function(callback){
//     var result = -1;
//     for(var i = 0; i < this.length; i++){
//         if(callback(this[i], i) === true){
//             result = i;
//         }
//     }
//     return result;
// }

// ES5, ES6 
// call bind

// JavaScript => TypeScript
// Python
// var number = 5
// nuber = 23

// 1. Хэрэглэгчийн мэдээлэл агуулсан обжект үүсгэ
// 2. Хэрэглэгчийн регистрийн дугаарын эхний 2 үсэг болон утасны дугаарын сүүлийн 6 оронгоос бүрдсэн нууц үг үүсгэх обжект функц бич. Жич: Регистрийн дугаарын 2 дахь үсэг том байх

// let objec = {
//     ner: "Narada",
//     rd: "ub96120852",
//     utas: 99662513,
//     generatePassword: function(){
//         this.password = this.rd[0] + this.rd[1].toUpperCase() + this.utas.toString().slice(2)
//     }
// }

// Гэрт:
// РД авдаг функц бичнэ. Регистрийн дугаарын эхний 2 элемент үсэг мөн эсэхийг шалгана. Сүүлийн 8 элемент 0-9 хоорондох тоо мөн эсэхийг шалгана. 
// хэрэв шаардлага хангасан бол, true буцаана
// шаардлага хангаагүй бол false

// Оролт: "UB12344578"
// Гаралт: true

// Оролт: "U12344578"
// Гаралт: false

// Оролт: "UK1234457"
// Гаралт: false

// function User(username, profession){ // байгуулагч функц , object , OOP - 
// // Object Oriented Programming
//     this.username = username;
//     this.profession = profession
// }

// User.prototype.getName = function(){
//      return this.username;
// }

// User.prototype.setName = function(newUsername){
//      this.username = newUsername;
// }

// const narada = new User("Narada", "Designer");
// const bat = new User("Bat", "Programmer");


// Quiz App
function Quiz(question, answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

Quiz.prototype.showQuestion = function(){
    console.log(this.question);
    this.answers.forEach((answer, index) => {
        console.log(index + ": " + answer)
    })
}

Quiz.prototype.checkAnswer = function(ans){
    if(this.correctAnswer === +ans){
        console.log("Зөв байна. баяр хүргэе...");
        return 1;
    } 
    console.log('Буруу байна... Дахин оролоно уу...');
    return 0;
}

const q1 = new Quiz("Монгол улс хэдэн аймагтай вэ?", [19, 20, 21, 22], 2);
const q2 = new Quiz("Улаанбаатар хэдэн дүүрэгтэй вэ?", [6, 7, 8, 9], 3);
const q3 = new Quiz("Монгол улс хэдэн сумтай вэ?", [361, 21, 9, 360], 0);
const q4 = new Quiz("Монгол орны хойд хөрш ямар улс вэ?", ["Хятад", "Солонгос", "Казакстан", "ОХУ"], 3);
const q5 = new Quiz("Монгол орны хамгийн өндөр цэг хэдэн метр вэ?", [8864, 6678, 4374, 5618], 2);

// q1.showQuestion();
// q1.checkAnswer(prompt("Зөв хариултыг сонго..."));
const questions = [q1, q2, q3, q4, q5];

var onoo = 0;
questions.forEach(function(quiz, index){
    console.log(index + 1 + "-р асуулт")
    quiz.showQuestion();
    onoo += quiz.checkAnswer(prompt("Зөв хариултыг сонго..."));
})

console.log("Та " + onoo + " асуултанд зөв хариуллаа")


/**
 * [
 *      {
 *              hariult: 15,
 *              status: true
 *      },
 *      {
 *              hariult: 16,
 *              status: false
 *      }
 * ]
 */

// хариултуудын гарч ирэх дарааллыг өөрчил