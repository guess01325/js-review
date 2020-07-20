let name = 'Otis Guess'
let age = 34;
let isCool = true;
const friends =['kevin', 'molik','dom','jason','asia'];

const tesla = {
    insustry: 'Electric Cars',
    ceo: 'Elon Musk',
    yearFounded: 2003,
    foundingMembers: ['Elon Musk', 'JB Straubel', 'Martin Eberated'],
    stockTicker: 'TSLA',
    vehicles: {
        vehicleOne: 'Model S',
        vehicleTwo: 'Mdel x',
        vehicleThree: 'Model 3'
    },
    print: function(){
        console.log('The CEO of Tesla is ' + this.ceo);
    }
}
    
    
    console.log(name);
    console.log(age);
    console.log(isCool);
    console.log(friends);
    console.log(tesla);
    console.log(tesla.vehicles.vehicleThree);
    console.log(tesla['vehicles']['vechicleThree']);



    function printName(element) {
        console.log(element);
    };


    friends.forEach(function(friend){
        printName(friend);
    });






    // standard function
    function addNumber(num1,num2) {
        return num1 + num2;
    };


    //function expression

   // const multiplyNumbers = { function (num1, num2) 
     //   return num1 * num2;

    //}


    // arrouw function 
   // const subtractNumbers = (num1, num2) => {
     //  return num1 - num2
  //  }















const dallasCowboys = {
    Quarterback: 'Dak Prescott',
    Owner: 'Jerry Jones',
    superbowls: 5,
    organization: ["jerry Jones", 'Mike Mcarthy'],
    Rivals: {
        rivalOne: 'Eagles',
        rivalTwo: 'Redskins',
        rivalThree: 'Giants',
    }
}
console.log(dallasCowboys);




// Dom 

const container = document.querySelector(".container");
console.log(container);

const headerTwo = document.createElement("h2");
headerTwo.textContent = "my First JS Review";
console.log(headerTwo);

container.appendChild('headerTwo');

headerTwo.classList.add ("subtitle","header-two");
headerTwo.setAttribute.remove("class","header-two" );
console.log(headerTwo);



headerTwo.addEventListener("click" , function() {
    headerTwo.textContent - "Otis";
});


// make another element 
const headerThree = document.createElement("h2");
headerThree.textContent = "friends";
container.appendChild(headerThree);
console.log(headerThree);

const list = document.createElement("ul");



// iterate through my friends array 
for (let i = 0; i < friends.length; i++) {
    let eachFriend = friends[i];
    console.log(eachFriend);
///creat a element
    const listItem = document.createElement ('li');
    // added text
    listItem.textContent = eachFriend;
    console.log(listItem);
    /append item list
    list.appendChild(listItem);
}
console.log(list);

headerThree.addEventListener('click', function () {
    container.appendChild(list);
    
});

// reference each friend 
// create a ul 
// add textContent to that li
// append that to a ul (unordered list)














