const heros = ["thor","spiderman"];

const superPowers = {
    thor : "thunder",
    spiderman : "slinging"
}

//by the diagram of the arrays,fns,strings ->> objects ->>NULL in js we can say that..
//here we're INJECTING the methods to the Object and Array (for all the obj,arrays)

Object.prototype.sayHello = function(){
    console.log(`hey there im a superhero`);
} // object is supreme , so its porperties is available to all the arrays, objects,functions,etc...

Array.prototype.sayGreet = function(){
    console.log(`am i visible in the object ?`) // array's properties cannot be passed to the object
}

heros.sayHello(); //see the object's properties r passed on to the array
superPowers.sayHello();
heros.sayGreet();
// superPowers.sayGreet();//here we can clearly see that the Array's properties aren't passed down to the obj

//line by line execution taking place..up there

