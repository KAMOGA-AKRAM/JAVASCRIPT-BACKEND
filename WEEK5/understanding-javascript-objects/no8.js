//part 8 object constructors (creating multiple farmers using a constructor)
function Farmer(name, location, crop, acres) {
    this.name = name;
    this.farmLocation = location;
    this.crop = crop;
    this.numberOfAcres = acres;
    this.introduce = function() {
    return `I am ${this.name}, and I farm ${this.crop} in
    ${this.farmLocation}.`;
    };
}
let farmer1 = new Farmer("Sarah", "Mbarara", "Bananas", 10);
let farmer2 = new Farmer("David", "Gulu", "Sunflowers", 20);

console.log(farmer1.introduce());
console.log(farmer2.introduce());


//Task constructor function School that takesin the name, location, studentsCount, and school type
function School(name, location, studentsCount, schoolType) {
    this.name = name;
    this.location = location;
    this.studentsCount = studentsCount;
    this.schoolType = schoolType;
    this.schoolIntroduction = function() {
        return `This is ${this.name}, located in ${this.location}. We currently have ${this.studentsCount} students.`;
    };
}
const school1 = new School("uganda christian university Mukono", "Uganda", 5000, "university");
const school2 = new School("GoodTimes School", "Kampala, Uganda", 3000, "Primary");

console.log(school1.schoolIntroduction());
console.log(school2.schoolIntroduction());