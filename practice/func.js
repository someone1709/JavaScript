//passing obj in a function
const users={
    name: "sandy",
    age:19
}
function handleObject(anyobject){
    return `username is ${anyobject.name} and age is ${anyobject.age}`
}
console.log(handleObject(users));

//that's it , nothing much...