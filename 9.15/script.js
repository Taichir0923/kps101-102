// JS - REVISE
// Энхоргил, Мөнхсайхан, Будхүү, Ууганбаяр, Ринчинням, Баяраа, Түшиг, Энх-ирээдүй

// JavaScript - OOP - Object Oriented Programming
// Primitive, non-primitve
// 1. String - Текст төвтэй датанууд - "арболаө"
// 2. Number - Тоонууд - 0-9
// 3. Boolean - true - 1, false - 0
// 4. undefined - тодорхойгүй
// 5. null - хоосон

// Non-Primitive
// Array
// Object

// Хувьсагч - ямар нэг датаг хадгалах сав.

// console.log(ner)
// var x = 16;

// x = 23;
// x = 100;
// var y = 15;
// x = y;

// +, -, *, /
// Remainder operator ( % )
// scope
// Global VS Local

// var - ES5 vs let - ES6
// let x = 23; // Global variable
// {
//     let x = 15; // Local variable
// }

// console.log(x)

// const variable

// const test = 123;

//  +=, -=, /=, *=

// let num = 15;

// num += 16; // num = num + 16


// // ++, --
// num++; //  num = num + 1
// num--;

// Радиус өгөгдсөн бол тойргийн талбай болон тойргийн уртыг ол. Area = PI * (r**2), Len = D*PI
// let radius = 10;
// let pi = Math.PI;

// let area = pi * (radius ** 2); // talbai
// let len = 2 * radius * pi; // toirgiin urt

// Стартап компани 5 ажилтантай ба, ажилтан тус бүрийн сарын орлого нь 1.5сая, 1.2сая, 1сая, 2сая, 2.2сая бол ажилчдын дундаж цалинг тооц...

// condition - нөхцөл

// <, >, =, !, &, |

// = - хувьсагч зарлах
// ==
// ===

// and - &&, or - ||

// if statement
// if else 
// if else if
// var nas = prompt("Таны нас");
// if(nas <= 12){ // true
//     console.log('baga nas')
// } else if(nas > 12 && nas <= 19){ // nas > 12 && nas <= 19
//     console.log('osvor nas')
// } else if(nas > 19 && nas <= 25){
//     console.log('zaluu nas')
// } else if(nas > 25 && nas <= 35){
//     console.log('ider nas')
// } else if(nas > 35 && nas <= 50){
//     console.log('ahimag nas')
// } else if(nas > 50 && nas <= 65){
//     console.log('ahmad nas')
// } else {
//     console.log('ondor nas')
// }

// Хэрэв дундаж цалин 800к-с бага бол, консолд дунджаас бага гэсэн үр дүн хэвлэ, эсрэг тохиолдолд дунджаас их гэсэн үр дүн хэвлэ

// string methods
// huvisagch, nuhtsul, operator
// нэрнийхээ бүх үсгийг консолд хэвлэ
// let ner = "Narada";
// console.log(ner[0])
// console.log(ner[1])
// console.log(ner[2])
// console.log(ner[3])
// console.log(ner[4])
// console.log(ner[5])



// Primitive Data type [] - array, массив
// let arr = [15, 16, "gfdjskgsdl", true]

// Narada
// N - Nice
// a - adorable
// r - reasonable
// a - awesome
// d - dreamy
// a - a words
// let awrods = ["a", "a2", "a3", "a4", "a5"]
// console.log(awrods[random])

// for(let i = 0; i < ner.length; i++){
//     let random = parseInt(Math.random() * 5)
//     if(ner[i] === "a"){
//         console.log(ner[i] + ": " + awrods[random])
//     }
// }


// Array method; string method; object; function

// let arr = ["gfd", 123, true];

// let str1 = "Hi";
// let str2 = "there!".3

// push - massiviin hamgiin suuld el nemeh
// unshift - ehend

// arr.push(456, 123, 789);
// arr.unshift(156, 852, 96);

// [156, 852, 96, "gfd", 123, true, 456, 123, 789];

// splice (startIndex, deleteCount)

// arr.splice(3, 3)

// // pop()
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();

// arr.shift()
// arr.shift()

// let arr1 = arr.filter(function(el){
//     return el !== "gfd"
// })

// 1. Boolean, String, Number төрийн утгууд агуулсан, 10ш дататай массив үүсгэ. Тэгдээрээс зөвхөн стринг төрлийн датаг цуглуулан шинэ массивт хадгал

// let arr = [156, 852, 96, "gfd", 123, true, 456, 123, 789, "gjfdklgjl"];
// let result = [];

// for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] === "string"){
//         result.push(arr[i])
//     }
// }

// 2. 20-30 хүртэл тоог массив дотор хадгалаад, бүх сондгой тоог шинэ массив үүсгэж хадгал

// https://narada0923.github.io/AmjiltAcademy

let num = prompt("Тоо оруул");
// 12345
let sum = 0;

for(let i = 0; i < num.length; i++){
    sum += +num[i];
}