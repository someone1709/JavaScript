//currying template
function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(add(10)(20)(30)); // 60

//arrow function version
const add = (a) => (b) => (c) => a + b + c;

console.log(add(10)(20)(30)); // 60

//multiplication example