// // frequency distribuation............................
// function frequency(str){
//     const result ={};
// for(let char of str){
//     if(char in result){
//         result[char] +=1;
//     }else{
//         result[char] =1;
//     }
// }
// return result;
// }
// console.log(frequency('aabcc'))//output:{ a: 2, b: 1, c: 2 }

// //non repating object..................................
// function nonRepeating(str){
//     const result ={};
// for(let char of str){
//     if(char in result){
//         result[char] +=1;
//     }else{
//         result[char] =1;
//     }
// }
// // { a:2 b:1 c:2}
// for(let key in result){
//     if(result[key]==1){
//         return key;
//     }
// }
// return '';
// }
// console.log(nonRepeating('aabcc'));//output:'b'

// repeatingcharter.........................
function repeating(str){
     const result ={};
for(let char of str){
    if(char in result){
        result[char] +=1;
    }else{
        result[char] =1;
    }
}
const output =[];
for(let key in result){
    if(result[key] >1){
        output.push(key);

    }
}
return '';
}
console.log(repeating('aabcc'));//a c

function total(cart){
    // let result =0;
    // for(let key in cart){
    //  result += cart[key]
    // }
    // return result;
    // using reduce method in total count 
    const result = Object.values(cart).reduce((acc ,cv)=>{
        return acc+cv;
    },0);
    return result;
}
console.log(total({maker:50, scale:25, box:100}));//175