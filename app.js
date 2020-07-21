let name = 'Otis Guess'
let age = 34;
let isCool = true;
const friends = ['kevin', 'molik','dom','jason','asia'];

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

    const dallasCowboys = {
        Quarterback: 'Dak Prescott',
        Owner: 'Jerry Jones',
        superbowls: 5,
        organization: ['jerry Jones', 'Mike Mcarthy'],
        Rivals: {
            rivalOne: 'Eagles',
            rivalTwo: 'Redskins',
            rivalThree: 'Giants',
        }
    }
    console.log(dallasCowboys);

    //function expression

   // const multiplyNumbers = { function (num1, num2) 
     //   return num1 * num2;

    //}


    // arrow function 
   // const subtractNumbers = (num1, num2) => {
     //  return num1 - num2
  //  }



















// Dom 

const container = document.querySelector('.container');
console.log(container);

const headerTwo = document.createElement('h2');
headerTwo.textContent = 'my First JS Review';

container.appendChild(headerTwo);

headerTwo.classList.add('subtitle','header-two');

headerTwo.classList.remove('header-two');
console.log(headerTwo);

headerTwo.addEventListener('click',function() {
    headerTwo.textContent - 'Otis';
});







// make another element 
const headerThree = document.createElement("h2");
headerThree.textContent = 'friends';

container.appendChild(headerThree);

console.log(headerThree);

const list = document.createElement("ul");

// iterate through my friends array 
for (let i = 0; i < friends.length; i++) {
    let eachFriend = friends[i];
    
    ///creat a element
    const listItem = document.createElement ('li');
    listItem.textContent = 'eachFriend'
    
    
    //append item list
    list.appendChild(listItem);
}
    console.log(list);
    
   
   
   
   
   
   
    headerThree.addEventListener('click', function () {
        container.appendChild(list);
   
   
    });
        
       





function fizzBuzz(Array) {
    let result = []; 

    for (let i = 0; i < Array.length; i++){
        let num = array[i];
        console.log(num); 
       
       
        if(num % 3 === 0 && num % 5 === 0) {
            result.push('fizzBuzz');
        }else if (num % 3 === 0) {
            result.push('Fizz');
        }else if (num % 5 === 0){
            result.push('Buzz')
        }else{

            result.push(num);
        }
    }
    
    return result;
    
}
        


console.log(fizzBuzz([3,5,25,20,9,7]));




// [ ] Do I understand what the prompt is asking?
// [ ] Am I able to break the problem down?
// [ ] What is my strategy for solving the problem?
// [ ] Do I understand what my code is doing?
// [ ] Am I able to foresee any edge cases?
// [ ] Am I able to track the order of the code that is being executed?
// [ ] Am I able to track the values of the variables?
// [ ] Am I able to walk through my code line by line with an example?
// [ ] Do I have a working solution?










