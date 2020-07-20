# JavaScriptReview
This is my Review


## Examples of Data Code

```javascript

```const dallasCowboys = {
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
console.log(dallasCowboys)```

## Examples of functons

``` // standard function
    function addNumber(num1,num2) {
        return num1 + num2;
    }


    //function expression

    const muultiplyNumbers = function(num1, num2) {
        return num1 * num2;

    }


    // arrouw function 
    const subtractNumbers = (num1, num2) => {
        return num1 -num2'
    }
```


## DOM Manipulation



```Javacript


// Dom 

const container = document.querySelector(".container");
console.log(container);

const headerTwo = document.createElement("h2");
headerTow.textContent = "my First JS Review";
console.log(headerTwo);

container.appendChild("headerTwo");

headerTwo.classList.add ("subtitle","header-two");
headerTwo.setAttribute.remove("class","header-two" );
console.log(headerTwo);
```

## more Dom minipulation


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
```
