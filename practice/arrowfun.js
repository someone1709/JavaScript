const users= ["candy","sandy"];
//creates a set of objects
const user = users.map(user=>({
    user,
    age: 20
}));

console.log(user);