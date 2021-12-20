// Asynchronous JavaScript
// Synchronous

// setTimeout((arg) => {
//     console.log(arg)
// } , 2000 , 'Hi there')

// Promise => resolve reject
const testPromise = (test) => {
    return new Promise((amjilttai , amjiltgui) => {
        if(test){
            amjilttai(test)
        } else {
            amjiltgui('faildchilee')
        }
    })
}

const afterPromise = () => {
    return new Promise((resolve , reject) => {
        resolve('12')
        reject('fail')
    })
}

testPromise(123)
    .then(result => {
        console.log(result)
        return afterPromise();
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))

// console.log('fhjk')
// console.log('fhjk') // => promise returns value in the future
// console.log('fhjk')
// console.log('fhjk')

// Request => {headers: {} , body: {} , url: 'https://www.facebook.com'}
// Response

// server client tal ruu data ilgeehdee JSON helbereer ilgeedeg. 
// JSON - JS Object Notation
// neg torliin object

fetch('https://jsonplaceholder.typicode.com/users' , {
    method: 'get'
})
    .then(res => {
        return res.json()
    })
    .then(data => {
        data.forEach(user => {
            console.log(user.email)
        })
    })
    .catch(err => console.log(err))

// Request =>
// 1. Get - server-s data huleej avah
// 2. Post - Хэрэглэгчээс серверлүү дата илгээх
// 3. Put - ямар нэг датаг өөр цоон шинэ датагаар солих
// 4. Patch - ямар нэг датаны тодорхой хэсгийг солих
// 5. Delete - устгах