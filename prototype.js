// const computer = {
//     ram : 14,
//     cpu : 4
// };

// const lenovo = {
//     screen : "HD"
//     //__proto__ : computer "the first console down here"
// };

// //console.log(`lenovo` ,lenovo.__proto__);
//                   //OR
// Object.setPrototypeOf(lenovo,computer);
// console.log(`lenovo`,Object.getPrototypeOf(lenovo));

function createUser(item,price){
    this.item = item;
    this.price=price;

}
//here we're injecting a new method "increment" in the createUser function
createUser.prototype.increment = function(){
    this.price++;
}
createUser.prototype.printMe = function(){
    console.log(`the price is ${this.price}`);
}

const chai =  new createUser("chai",20);
// const tea = createUser(Tea,100);
chai.printMe();