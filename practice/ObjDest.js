// const user = {
//     name: "Sandeep",
//     age: 20,
//     city: "Mysuru"
// };
// // destructing the object user !!
// const{name,city,age}=user; //order doesn't matter
// console.log(city);
// console.log(age);
// console.log(name);

//notes ke back m acche se likha h 

//nested object destruction!!
const user = {
    name: "Sandeep",

    address: {
        city: "Mysuru",
        state: "Karnataka"
    }
};
const{name,address:{city,state}}=user;
console.log(name);
console.log(city);
console.log(state);

//very common in API calls
const user = {
    username: "Sandeep",
    email: "sandeep@gmail.com",
    age: 20
};
// 1 API ke liye common format h
function registerUser({ username, email, age }) {
    console.log(username);
    console.log(email);
    console.log(age);
}
// 2 normally jaise obj ke keys ko bulana
function registerUser(user) {
    console.log(user.username);
    console.log(user.email);
    console.log(user.age);
}