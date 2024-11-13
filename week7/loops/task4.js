
let data = [
    {district: `kampala`,rainfall: 120},
    {district: `gulu`,rainfall:80},
    {district:`mbarara`,rainfall: 95}
];

// loops to print wats above
for (let i=0; i<data.length;i++){
    console.log(`District: ${data[i].district}, Rainfall: ${data[i].rainfall} mm`)
}

