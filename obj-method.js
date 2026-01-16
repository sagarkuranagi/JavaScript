// // object literal
// const person = {
//     // key: value
//     // storing information
//     firstName: 'punith',
//     lastName: 'raj',
//     // mrthods adds behavior to object 
//     // methods are function inside an object
//     // property which holds function as a value is a method
//     fullName: function(){
//         // inside a mthod this refers to current objects
//     return `${this.firstName} ${this.lastName}`;
//     }
// }
// console.log(person.fullName());// punith raj
//............................................................................................
const player = {
    name: 'vart',
    country:'india',
    runs: [40, 60,50],
    matchesPlayed: function(){
        return this.runs.length;
    },
    totalRuns:function(){
        const total = this.runs.reduce((acc, cv)=>{
            return acc+cv ;
        }, 0);
        return total;
    },
}
console.log(player.matchesPlayed());//3
console.log(player.totalRuns());//150