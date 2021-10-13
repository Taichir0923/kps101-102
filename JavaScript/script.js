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
var user = {
    ner: "Narada",
    mergejil: 'designer',
    email: 'narada@mail.com',
    nas: 20,
    hayg: {
        hot: 'ub',
        duureg: 'HUD'
    }
}

var user1 = {
    ner: "Bat",
    email: 'bar@example.com',
    mergejil: 'designer',
    nas: 20,
    hayg: {
        hot: 'ub',
        duureg: 'HUD'
    }
}

// var arr = [1, 5, 7, 3, 2];

// for(el of arr){ // for of loop
//     console.log(el)
// }

// for(pro in hun){ // for in loop
//     console.log(hun[pro])
// }

// [{}, {}, {}]

let users = []
users.push(user);
users.push(user1);

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