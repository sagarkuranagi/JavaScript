const city = "bangalore"
function print(){
    console.log(city)
}
print();

// Var functon scope 
function print(){// function scope
    if(true){// block scope
        var msg = "hi there";// declearing a veriable inside the block it will still be available  inside  the print(), because var keyword are function are function scoped
        console.log('inside block', msg);
    }
    console.log('outside block', msg);
}
print();

// let and const  functon scope................
// function print(){// function scope
//     if(true){// block scope
//         let msg = "hi there";
//         console.log('inside block', msg);
//     }
//     // console.log('outside block', msg);// outside not work loop
// }
// print();

// //lexical scope - inner the   .............
// const country = "india"
// function fnOne (){
//     const city  = 'bangalore';
//     const location = " basavagudi"; 
//     function fnTwo(){
//         console.log('function two', city); 
//     }
//     fnTwo();
// }
// fnOne();


//lexical example 
function getVowels(arr){
    const vowels = "aeiou";
    const result = arr.filter(function (ele){
     return vowels.includes(ele); 
    })
    return result;
}
console.log(getVowels(['a','b','c','d','e','i','k']));//[ 'a', 'e', 'i' ]