//FUNCTION THAT ACCEPTS SELLING PRICES COST PRICES AND NUMBER OF UNITS SOLD AND RETURNS THE PROFITS
function calculateProfit(sellingPrice, costPrice, unitsSold) {
    const profitPerUnit = sellingPrice - costPrice;
    const totalProfit = profitPerUnit * unitsSold;
    return totalProfit;
  }
  
  console.log(calculateProfit(200, 150, 50)); 
  