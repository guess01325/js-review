let name = 'Otis Guess'
let age = 34;
let isCool = true;
const friends =['kevin', 'molik','dom', 'jason','asia'];

const tesla = {
    insustry: 'Electric Cars',
    ceo: 'Elon Musk',
    yearFounded: 2003,
    foundingMembers: ['Elon Musk', 'JB Straubel', 'Martin Eberated'],
    stockTicker: 'TSLA';
    vehicles: {
        vehicleOne: 'Model S',
        vehicleTwo: 'Mdel x',
        vehicleThree: 'Model 3'
    },
    print: function(){
        console.log('The CEO of Tesla is ' + this.ceo);
    }
}

const dallasCowboys = {
    Quarterback: 'Dak Prescott',
    Owner: 'Jerry Jones',
    superbowls: 5,
    organization: ["jerry Jones", 'Mike Mcarthy'],
    Rivals: {
        rivalOne = 'Eagles',
        rivalTwo = 'Redskins',
        rivalThree = 'Giants',
    }
}
console.log(dallasCowboys);


tesla

console.log(name);
console.log(age);
console.log(isCool);
console.log(friends);
console.log(tesla);
console.log(tesla.vehicles.vehicleThree);
console.log(tesla['vehicles']['vechicleThree']);
tesla.print