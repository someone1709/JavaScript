// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("hello");
//         resolve({username : "sandeep", email : "sandeep@apple.com"});
//     })
// })
// promiseThree.then(function(data){
//     console.log(`inside resolve`,data);
// })

// const promiseFour = new Promise(function(resolve,reject){
// setTimeout(function(){
//     let val = true;
//     if(val){
//         resolve({username : "sandy",email : "sandeep@apple.com"});
//     }else{
//         reject("error!!!");
//     }
// })
// }).then((data)=>{
//     console.log(data);
// })
// .catch((data2)=>{
//     console.log(data2);
// })
// .finally(()=>{ (no matter what , the finally block always executes)
//     console.log("the promise is either resolved or rejected");
// })

// const promiseFive = new Promise(function(resolve,reject){
//         setTimeout(function(){
//         let val = true;
//         if(!val){
//             resolve({username : "sandy",email : "sandeep@apple.com"});
//         }else{
//             reject("error!!!");
//         }
//     },2000)
// })
// //instead of then,catch we use async and await
// async function promises(){
//     try {
//         const response = await promiseFive;
//         console.log(response done successfully);
//     } catch (error) {
//         console.log("ERROR DA")
//     }
// }
// promises();
// //here the promise 6 is a manual promise!!
// const promise6 = new Promise(function(resolve,reject){
//      setTimeout(function(){
//         let val = true;
//         if(val){
//             resolve({username : "sandy",email : "sandeep@apple.com"});
//         }else{
//             reject("error!!!");
//         }
//     },2000)
// })

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  }) //this upper then returns a value and it is stores in json format and the downside then accesses it
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log("errorrrrrr");
  });

// //with async & await
// async function getAllUsers(){
//     try {
//         const response  = await fetch("https://jsonplaceholder.typicode.com/users");
//         const response2 = await response.json();
//         console.log(response2);
//     } catch (error) {
//         console.log(("error"))
//     }
// }
// getAllUsers();

//using then catch
