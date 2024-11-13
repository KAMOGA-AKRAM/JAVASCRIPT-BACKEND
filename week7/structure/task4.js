// switched code
let score = 80;
let grade;

// Determine the grade based on the score ranges
switch (true) {
    case (score > 90 && score <= 100):
        grade = 'A grade';
        break;
    case (score > 75 && score <= 90):
        grade = 'B grade';
        break;
    case (score >= 50 && score <= 75):
        grade = 'C grade';
        break;
    default:
        grade = 'Fail';
}

console.log(grade);
 