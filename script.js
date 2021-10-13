function newCar (name, year, fuel){
    return {name, year, fuel};
}

 const yearNow = new Date().getFullYear;

let cars = [
    newCar ('Toro', 2021, 'Diesel'),
    newCar ('Peugeot 208', 2015, 'Flex'),
    newCar ('Voyage', 2011, 'Flex'),
    newCar ('Corsa', 2006, 'Gasolina')
];


// **************************without filter**********************************//

//função que retorna se um carro tem menos de 10 anos
function lessThanTen (car){ 
    if (2021-car.year<10)
        return true;
}


function myFilter (callback){
    let filteredList = [];

    for (let car of this){
        if (callback(car))
            filteredList.push (car);
    }
    
    return filteredList;
}

cars.myFilter = myFilter;
console.log (cars.myFilter (lessThanTen))


// **************************with filter**********************************//

let carsFiltered = cars.filter (lessThanTen);
console.log (carsFiltered)


// **************************without map**********************************//

function typeFuel (car){
        return 'O combustível de ' + car.name + " é " + car.fuel;
}

function myMap (callback){
    let carFuel = [];

    cars.forEach(element =>{
        carFuel.push(callback(element));
    });
    return carFuel;
}

cars.myMap = myMap;
console.log (cars.myMap(typeFuel))

// **************************with map**********************************//
let carsFuel = cars.map(typeFuel)
console.log(carsFuel)


// **************************without reduce**********************************//


function sumCarYears (total, car){
    return total + car.year;
}

function myReduce (callback){
    let sumYears = 0;
    cars.forEach(element =>{
        sumYears =+ callback(sumYears, element);
    })

    return sumYears;
}

cars.myReduce = myReduce;
console.log(cars.myReduce(sumCarYears))

// **************************with reduce**********************************//

let carsReduce = cars.reduce(sumCarYears, 0);
console.log(carsReduce)