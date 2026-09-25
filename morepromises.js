// function promises() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let value = true;
//       if (!value) {
//         resolve("hello");
//       } else {
//         reject("opps, cancelled");
//       }
//     }, 3000);
//   });
// }
// // the upper code is just the promise creation 

// //now you've to consume this promise , so you've to use THEN,CATCH clause

// promises()
// .then((data)=>{
//     console.log("hey there")
//     return data
// })
// .then((value)=>{
//     return value
// })
// .catch((errors)=>{
//     console.log("sorry")
//     return errors
// });


//imp ex on then,catch,then in sequence 

function testPromise(){
  return new Promise((resolve,reject)=>{
    resolve("Error happened");
  })
}

testPromise()
.then((data)=>{ //this then is diretly skipped as theres no resolve part
  console.log("then 1");
})
.catch((err)=>{
  console.log("catch block");
  return "Recovered";
})
.then((data)=>{ //after the execution of catch , this will run
  console.log("then after catch:", data);
});

