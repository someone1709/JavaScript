function setUsername(username){
    this.username = username;
    console.log("called");
}

// function createUser(username,email,password){
//     setUsername(username); //this line doesnot refer to createUser's object!! 
//     this.email = email;
//     this.password = password;
// }
// const user = new createUser("sandeep","sandeepcooks@apple.com",123456);
// console.log(user); //check the output for this

function createUser(username,email,password){
   //setUsername.call(username); //wont print the username
    setUsername.call(this,username);//by "this"(khudh ka this) we can access the top most function's properties,otherwise we cant 
    this.email = email;
    this.password = password;
}
const user = new createUser("sandeep","sandeepcooks@apple.com",123456);
console.log(user);
