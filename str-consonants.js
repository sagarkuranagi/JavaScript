//string concations............

// const str = "javascript";
// const vowels = "aeiou";
// let result = "";
// for( let i = 0; i< str.length; i++){
//     if(vowels.includes(str[i])) {
//         result = result + str[i].toUpperCase();
//     } else {
//         result = result + str[i];
//     }
// }
//     console.log(result); //jAvAscrIpt  

   // string consonants ............

const str = "javascript";
const vowels = "aeiou";
let result = "";
for( let i = 0; i< str.length; i++){
    if(!vowels.includes(str[i])) {
        result += str[i]
    
    }
}
    console.log(result);// jvscrpt 