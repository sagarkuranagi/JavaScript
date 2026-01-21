/*const str ="javascript ";

const vowels ="aeiou";
let count =0;
for(let i =0; i<str.length; i++){
    if(vowels.includes(str[i])){

        count++;
}
}
console.log(count);*/

function countVowels(str){
    const vowels ="aeiouAEIOU";
    let count = 0;
    for(let i=0; i<vowels.length; i++){
        if(vowels.includes(str[i])){

        count = count + 1;
    }
}
return count;
}

console.log(countVowels('javascript')) //3
console.log(countVowels('REACT')) // 2