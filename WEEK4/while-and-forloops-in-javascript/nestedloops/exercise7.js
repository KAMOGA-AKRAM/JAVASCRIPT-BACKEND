// Define the number of rows for the triangle
let rows = 5;

// Outer loop to control the number of rows
for (let i = 1; i <= rows; i++) {
  let pattern = "";

  // Inner loop to control the number of stars in each row
  for (let j = 1; j <= i; j++) {
    pattern += "*";  // Add a star for each iteration
  }

  // Print the pattern for the current row
  console.log(pattern);
}