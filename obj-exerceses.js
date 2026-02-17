// // without using objects
// function getKeys(obj){
//     const result = [];
//     for(let key in obj){
//         result.push(key);// get to the obj
//     }
//     return result;
// }
// console.log(getKeys({a:1, b:2, c:3}));//[ 'a', 'b', 'c' ]

// //without using object.values()
// function getValues(obj){
//     const result =[];
//     for(let key in obj){
//         result.push(obj[key]);// get values
//     }
//     return result;
// }
// console.log(getValues({a:1, b:2, c:3}));//[ 1, 2, 3 ]


// function checkprop(obj, prop){
// // return prop in obj;//1st metod
// return obj.hasOwnProperty(prop);//2nd method
// // for loop using in find  the true and flase.........
// // for(let key in obj){
// //     if(key==prop){
// //         return true
// // }
// // }
// // return false;
// }
// console.log(checkprop({a:1, b:2, }, 'a'));//ture
// console.log(checkprop({a:1, b:2,}, 'z'));//false


// function pair(str){
//     const result= {};
//     for(let char of str){
//         result[char] = char.toUpperCase();
//     }
//     return result; 
// }
// console.log(pair('dct'));//{d:D, c:C, t:T}


// function charAcsii(str){
// const result={};
// for(let char of str){
//     result[char] = char.charCodeAt();
// }
// return result;
// }
// console.log(charAcsii('abc'));//{ a:97, b:98, c:99}

// // string length 
const strLength = (arr)=>{
    const result={};
    for(let char of arr){
        result[char]=char.length;
    }
    return result;
}
console.log(strLength(['abc','ab','a','abcd']));//{ abc: 3, ab: 2, a: 1, abcd: 4 }

// // string length using reduce method in array
// const strLength = (arr)=>{
//  const result = arr.reduce(function(acc,cv){
//      acc[cv] = cv.length;
//      return acc;
//         },{});
//     return result;
// }
// console.log(strLength(['abc','ab','a','abcd']));


// // product using a filter method in  prices
// const products = [
//   { id: 1, name: "Laptop", price: 55000 },
//   { id: 2, name: "Smartphone", price: 25000 },
//   { id: 3, name: "Headphones", price: 2000 },
//   { id: 4, name: "Keyboard", price: 1200 },
//   { id: 5, name: "Mouse", price: 800 }
// ];

// function filterProducts(products){
// const result =products.filter(ele => ele.price > 10000)
// return result;
// }
// console.log(filterProducts(products));


// function findMax(arr){
//     let max =arr[0]
//     for(let i=1; i<arr.length; i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
//     }
//     return max;
// }
// console.log(findMax([100,50,60,125,1,10]));

// //retrun the key with the max values for an inerviwes question
// // output= 'b'
// const obj = {a:1, b:20, c:3}
// let result ='';
// let max = obj.b;
// for(let key in obj){
//     if(obj[key]>max){
//     max = obj[key];
//     }
// }
// console.log(max);

// const obj1 = { a: 1, b: 20, c: 3 };

// let maxKey = null;
// let maxValue = -Infinity;

// for (let key in obj) {
//   if (obj1[key] > maxValue) {
//     maxValue = obj1[key];
//     maxKey = key;
//   }
// }

// console.log(maxKey); // Output: 'b'


// function checkVowel(str){
//     const result ={};
//     const vowel= 'aeiou';
//     // for(let char of str){
//     //     if(vowel.includes(char)){
//     //         result[char] = true;
//     //     }else{
//     //         result[char] = false;
        
//     // }
//    for(let i=0; i<vowel.length; i++){
//          result[i] =str[i];
//          if(vowel.includes(str[i])){
//             result[i]=true;
//     }else{
//         result[i] =false;
//     }
// }
//       return result;
// }
// console.log(checkVowel('react'));//{ r: false, e: true, a: true, c: false, t: false }

// function swap(obj){
//     const result ={};
//     for(let key in obj){
//          const value = obj[key];
//         result[value] = key;
//         }
//     return result;
// }
// console.log(swap({green: 'peace', bule: 'tranquilty'}));

