const nums=[1,2,3,4,5];

// const sumofnums=nums.reduce((acc,num)=>{
//     return acc+num;
// },0)
// console.log(sumofnums);

const squareofnums=nums.reduce((acc,num)=>{
    return acc*num;
},1);
console.log(squareofnums);