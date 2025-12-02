
// const str = "UcUNFYGaFYFGtNUH";
// const char = "cat";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//     if (char.includes(str[i].toLowerCase())) {
//         result += str[i].toLowerCase();
//     }
// }

// console.log(result);  // Output: "cat"



const str = "UcUNFYGaFYFGtNUH";
let result = "";

for (let i = 0; i < str.length; i++){
    if(str[i].charCodeAt()>=97 && str[i].charCodeAt()<=122){
        result = result +str[i];
    
    }
}
console.log(result)