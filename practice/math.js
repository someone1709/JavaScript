const descriptor=Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(descriptor);

const chai ={
    name:"ginger tea",
    price:250,
    isavailable:true
}
// console.log(Object.getOwnPropertyDescriptor(chai)); //gives "UNDEFINED" as o/p

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// console.log(Object.getOwnPropertyDescriptor(chai,"price"));
// console.log(Object.getOwnPropertyDescriptor(chai,"isavailable"));

//3 params
// Object.defineProperty(obj name , which property u wanna disrupt,{ writeable ya enumerable ko change karsakte h}
Object.defineProperty(chai,"name",{writable : false,enumerable : false})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));