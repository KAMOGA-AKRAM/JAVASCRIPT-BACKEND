//FUNCTION TO CALCULATE
function calculate(num1, num2, operation) {
    switch (operation) {
      case 'multiply':
        return num1 * num2;
      case 'subtract':
        return num1 - num2;
      case 'add':
        return num1 + num2;
      case 'divide':
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return "Error: Division by zero is not allowed";
        }
      default:
        return "Invalid operation";
    }
  }
  
  console.log(calculate(10, 5, 'multiply')); 
  console.log(calculate(10, 5, 'subtract')); 
  console.log(calculate(10, 5, 'add'));      
  console.log(calculate(10, 5, 'divide'));   
  