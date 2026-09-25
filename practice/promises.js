//promise(call back(resolve,reject))**
const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task is completed");
        resolve();
    },1000)
})
//.then(callback function)
promiseOne.then(function(){
    console.log("promise consumed");
})

const promiseTwo=new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({username:"sandeep",email:"sandyapple@gmail.com",phNo:Number(9347082663)});
    },1000)
})
promiseTwo.then(function(x){
    console.log(x); //actually prints everything,whats inside the "RESOLVE",as it's returning
})

//***************************************************************************** */
const promiseFour=new Promise((resolve, reject) => {
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"sandeep",email:"sandyapple@gmail.com"});
        }
        else{
            reject("ERROR : Something went wrong");
        }
    },1000)
})
promiseFour.then(function(x){
    console.log(x);
    //very imp to write a return statement
    return "new data";
})
.then(function(y){
    console.log(y);
    return "another data";
})
.then(function(z){
    console.log(z);
})
.catch(function(error){
    console.log("something went wrong",error);
})
.finally(function(){
    console.log("promised is either resolved or unresolved")
})
// Whatever you return from one .then() becomes the input to the next .then().


// ASYNC AWAIT 
const promiseFive=new Promise((resolve, reject) => {
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({username:"sandeep",email:"sandyapple@gmail.com"});
        }
        else{
            reject("ERROR : sonmething went wrong");
        }
    }, 2000);
})
async function consumePromiseFive(){
    //here **PROMISE.FIVE is an obj so we have to store the return value in the variable 
    // const response=await promiseFive;//awaits until the promise finishes or executes
    // console.log(response); 
    try {
        const response=await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

// VVVIMP IS THAT WE CAN EITHER USE .then,.catch or async,await ,both does the same work