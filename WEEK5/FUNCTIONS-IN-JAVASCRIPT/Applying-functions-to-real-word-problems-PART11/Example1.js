//calculate income
function calculateIncome(kilometers) {
    let incomePerKm = 2000;
    return kilometers * incomePerKm;
    }
    let kilometersTraveled = 50; // Kilometers traveled in a day
    let dailyIncome = calculateIncome(kilometersTraveled);
    console.log(`The total income for the day is UGX ${dailyIncome}`);
    