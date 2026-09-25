// const str="sandy";
// const newstr= Array.from(str);
// console.log(newstr);
// const newarr=newstr.map(ptr=>ptr.toUpperCase());
// console.log(newarr);  

// changing the string to an array+converting into uppercase! in a single function
// const str="sandy";
// const newarr=Array.from(str)
//     .map(ptr=>ptr.toUpperCase())
// console.log(newarr);

// 8. Creating an array of numbers ⭐⭐⭐
// this is an important use case of this ask gpt

const arr="1234567";
const newarr=Array.from(arr,Number); //here Number is already a INBUILT (mapping) function
console.log(newarr);