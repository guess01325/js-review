# Set of problems
1.  Write a function `isInside(array, ele)` that returns true if `ele` is an element
-I use the array.index of function to see if the element was in the erray.. 

## code  

```
const names = ['rome','steven','pete']
const element = 'steven';
function  inInside(array, ele){
    const inArray = array.indexOf(ele)
    if (inArray > -1) {
        return true;
    }else{
        return false;
    }
}
console.log(inInside(names,element));
```

2. use the split join function to reverse the array

## code

```
 function reverseString(str) {
     return str
       .split("")
      .join("");
 }

  console.log(reverseString(element));
  ```

  3. use for loop to go through array and push every number that was divisible by 7 
## code
```
function luckyNumberSeven(max) {
      let numbers = [];
      for  (let i = 1; i <max; i++){
          if (i % 7 === 0) {
              numbers.push(i);
              
            }
        }
    return(numbers);
}
console.log(luckyNumberSeven(25)); 
console.log(luckyNumberSeven(42));

        







        