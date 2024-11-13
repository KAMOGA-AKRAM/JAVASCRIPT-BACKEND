//part 6 looping through objects(iterating over a farmers properties)
let ugandanFarmer = {
    name: "James",
    farmLocation: "Mbale",
    crop: "Coffee",
    numberOfAcres: 5
};
for (let key in ugandanFarmer) {
    console.log(`${key}: ${ugandanFarmer[key]}`);
}


//tasks
const school = {
    name: "uganda christian university",
    location: "Mukono, Uganda",
    studentsCount: 2000,
    establishedYear: 1927,
    schoolType: "Secondary",
    calculateSchoolAge: function() {
      const currentYear = new Date().getFullYear()
      return currentYear - this.establishedYear;
    }
};
for (const property in school) {
    console.log(property, ":", school[property]);
}