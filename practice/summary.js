// const nums=[1,2,3,4,5,6];
//map
// const squares=nums.map((num)=>{
//     return num*num;
// });
// console.log(squares);
// //filter
// const divby3=nums.filter((num)=>{
//     if(num%3==0){
//         return num;
//     }
// });
// console.log(divby3);
// //reduce
// const sumofcubes=nums.reduce((acc,num)=>{
//     return acc*num*num;
// },1);
// console.log(sumofcubes);

// const products = [
//     { name: "Laptop", price: 60000 },
//     { name: "Phone", price: 30000 },
//     { name: "Mouse", price: 1000 }
// ];
// //>10000
// const costly=products.filter(nou=>{
//     if(nou.price>10000){
//         return nou;
//     } 
// });
// console.log(costly);
// //
// const totalprice = products.reduce((total,product)=>{
//     return total+product.price;
// },0);
// console.log(totalprice);

// const evennumbers = nums.filter(x=>{
//     if(x%2==0){
//         return x;
//     }
// });
// console.log(evennumbers);
// const mapping = evennumbers.map(y=>{
//     return y*y;
// });
// console.log(mapping);
// const sumsquareseven=mapping.reduce((acc,val)=>{
//     return acc+val;
// },0);
// console.log(sumsquareseven);

//all together
// const numbers=[11,22,33,44,55,66];
// const result=numbers
//     .filter(num=>num%2===0)
//     .map(num=>num*num)
//     .reduce((acc,val)=>acc+val,0);
// console.log(result);


//EXCELLENT EXAMPLE TO MASTER .filter,.map,.reduce
// const students = [
//     { name: "Sandeep", marks: 85 },
//     { name: "Rahul", marks: 65 },
//     { name: "Arjun", marks: 92 },
//     { name: "Karan", marks: 70 }
// ];
// const average=students
//     .filter(student=>student.marks>=75)
//     .map(num=>num.marks)
//     .reduce((acc,val,index,arr)=>{
//         return acc+val/arr.length
//     },0);
// console.log(average);

//SHOPPING CART EXAMPLE : VERY IMP
const cart = [
    { name: "Laptop", price: 60000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 3000, quantity: 1 },
    { name: "Monitor", price: 15000, quantity: 2 }
];
// Calculate the total cost of products costing more than ₹2000.
const totalcost=cart
    .filter(item=>item.price>=2000)
    .map(num=>num.price*num.quantity)
    .reduce((acc,val)=>{
        return acc+val
    },0);
console.log(totalcost);
