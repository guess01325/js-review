

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


 
 function reverseString(str) {
     return str
       .split("")
      .join("");
 }

  console.log(reverseString(element));


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
      
      

    
    













