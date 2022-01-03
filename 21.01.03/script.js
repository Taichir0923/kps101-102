// NPM - Node Package Management
/**
 * {
 *  ner: "Narada",
 *  pasword: $2a$12$VKCKLIf1GW1JYqnPn6Wc5eeyc261PyVza8832IYBUM7P8gKMrjCsy
 * }
 */
// gjfdkljs;g45212313gfh321d31gh32dh1g13h1df32impot

import * as bcryptjs from "./node_modules/bcryptjs/index.js";
import axios from "axios";

var pass = "My pass";
var hashedPass = bcryptjs.hashSync(pass , 12);

// console.log(hashedPass)
bcryptjs.compare("My pass" , hashedPass)
.then(result => console.log(result));

async function getData(){
    const {data: users} = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(users)
}

getData();