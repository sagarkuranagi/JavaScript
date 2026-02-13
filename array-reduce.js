// const arrStr = ['abc','de','fghi'];
// const result =arrStr.reduce(function(acc,cv){
// return acc + cv.length;
// }, 0);
// console.log(result);//9


// function cartTotal(arr){
//     const result = arr.reduce(function(acc, cv){
//         return acc + Number(cv);

//     }, 0);
//     console.log(result);
// }
// console.log(cartTotal(['45','45',60]));//150


// function getEvens(arr){
//     const result = arr.reduce(function(acc, cv){
//     if(cv % 2 == 0){
//         acc.push(cv);
//     }
//  return acc;
//     }, []);
//     return result
// }
// console.log(getEvens([10,11,12,13,14]));


const prices = [100, 125, 250]
function getTotal (arr){
    const result = arr.reduce(function(acc, cv){
        return acc + cv;

    }, 0);
    return result;
}
console.log(getTotal(prices));