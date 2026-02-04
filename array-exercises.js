// const number = [ 10, 11, 12,13, 14,];
// //find all even number in the array
// //o\po = [ 10, 12, 14 ]
// const result = [];
// for(let i=0; i<number.length; i++){
//     if(number[i] % 2==0){
//         result.push(number[i]);
//     }
// } 
// console.log(result);

//resver the method

// for(let i= number.length; i>=0; i--){
//     if(number[i] % 2==0){
//         result.push(number[i]);
//     }
// } 
// console.log(result);

// const arr =[1,'a', 2,'b', 3,'c'];
// //o/p= 'abc'
// let result ='';
// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i] == 'string'){
//         result += arr[i];
  
// }
// }
// console.log(result);


//create a function called as get even which takes 
//an array argument the funxtion should return all theeven Numbers from the array


function getEvens(arr) {
const evenNumbers = []; //result
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]); // result
    }
  }
  return evenNumbers; // result
}

console.log(getEvens([1, 2, 3, 4]));      // [2, 4]
console.log(getEvens([20, 21, 22]));     // [20, 22]
console.log(getEvens([1, 3, 5]));        // []
console.log(getEvens([]));              // []
