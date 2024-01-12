let Asiacountries=[
    
    {
    country: "china",
    region:"Eastern Asia",
    },
    {
    country: "India", 
    region:"SouthernAsia",
    },
    {country: "Indonesia",
    region:"South-Eastern Asia",
},
    { country: "Pakistan",
    region:"SouthernAsia",
},
{country: "bangladesh",
region:"SouthernAsia",
},
];
let countries= Asiacountries.filter(function(value){
return value.region=="SouthernAsia";



let Asiacountries=[
    
    {
    country: "china",
    population:24500000,
    },
    {
    country: "India",
    population:23500000,
    },
    {country: "Indonesia",
    population:180000,
},
    { country: "Pakistan",
    population:150000,
},
{country: "bangladesh",
population:95000,
},
];
let pop=Asiacountries.filter(function(value){
return value.population < 200000;

})
console.log(pop);



let countries=[
    {
        name:"India",
        capital:"Delhi",
        flag:"Tricolour",
    },
    {
        name:"China",
        capital:"Beijing",
        flag:"Five-star Red Flag",
    },
    {
        name:"United states",
        capital:"Washington",
        flag:"American Stars and Stripes",
    },
    {
        name:"pakistan",
        capital:"Islamabad",
        flag:"Parcam-i Sitārah o Hilāl",
    },
];

countries.forEach(data => {
    console.log(`
        ${data.name}
        ${data.capital}
        ${data.flag}
    `)
});



let Asiacountries=[
    
    {
    country: "china",
    population:24500000,
    },
    {
    country: "India",
    population:23500000,
    },
    {country: "Indonesia",
    population:180000,
},
    { country: "Pakistan",
    population:150000,
},
{country: "bangladesh",
population:95000,
},
];
let totalpop= Asiacountries.reduce(function( acc,curr)
{
    return acc+curr.population;
},0);
console.log(totalpop);



let Asiacountries=[
    
    
    {country: " United states",
    currency: "USD",
},
    { country: "Ecuador",
    currency: "USD",
},
{country: "Panama",
currency: "USD",
},
];
let countries= Asiacountries.filter(function(value){
    return value.currency=="USD";
    })
console.log(countries);