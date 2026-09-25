// multi-level nesting
const company = {
    name: "ABC",
    location: {
        country: "India",
        state: {
            name: "Karnataka",
            city: {
                name: "Mysuru"
            }
        }
    }
};
console.log(company.location.state.city.name);

//objects can contain arrays too
const user = {
    name: "Sandeep",

    skills: [
        "JavaScript",
        "Java",
        "C++"
    ]
};
console.log(user.skills);
console.log(user.skills[2]);
console.log(user.skills[3]);//undefined , 0 based indexing