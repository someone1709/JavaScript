//only for interviws:

function outer() {
  let counter = 4;
  return function () { //returning a function
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());

//it is actually remembering the values
