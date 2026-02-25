// console.log(this)

// function f1 (){
//     console.log(this)
// }
// f1()
// const f2 = function (){
// console.log(this)
// }
// f2()

// const f3 = function (){
//     console.log(this)
// }
// f3()


// // exampls
// const af1 = ()=> {
//     console.log(this);
// }
// af1();

// // example2 
// function f1 (){
//     const af2 =() => {
//         console.log(this);
//     }
//    af2();
// }
// f1();

const person = { 
    name: 'sam',
    deatils : () => {
        console.log(this);// {}
    }
}
person.deatils();