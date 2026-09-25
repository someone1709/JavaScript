const nums=[1,2,3,4,5];
// const evennums= nums.map(even =>{
//     even=even*2;
//     console.log(even);
// });

// const evennums=nums.filter(even=>{
//     if(even%2==0){
//         console.log(even);
//     }
// });

//basically filter is just like deciding TRUE/FALSE
const evennums=nums.filter(even=>{
    if(even%2==0){
        return even;
    }
});
console.log(evennums);