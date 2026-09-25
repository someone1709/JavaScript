// this works for single exmaple , what if we havwe 100's of examples
// const user = {
//     name: "Sandeep",
//     age: 20,

//     introduce: function () {
//         console.log("My name is Sandeep");
//     }
// };

// const user = {
//     name: "Sandeep",
//     age: 20,

//     introduce: function () {
//         console.log(`name of the user is ${this.name}`);
//     }
// };
// user.introduce();

const user1 = {
    name: "Sandeep"
};

const user2 = {
    name: "Rahul"
};

function greet() {
    console.log(this.name);
}
user1.greet=greet;
user2.greet=greet;
user1.greet();
user2.greet();