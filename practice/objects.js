const user = {
    name: "Sandeep",
    age: 20,
    city: "Mysuru"
};
//adding a property/key
//keys r also called as properties
user.email="sandeep@x.com";
console.log(user);
//modifying the properties
user.age=23;
console.log(user);
//deleting properties
delete user.city;
console.log(user);