const mobile = "9740411567";

//const number = `(${mobile.slice(0, 2)}) ${mobile.slice(2, 6)}_${mobile.slice(6)}`;
//console.log(number);   // Output: (97) 4041_1567

const p1 = mobile.slice(0,2);
const p2 = mobile.slice(2,6);
const p3 = mobile.slice(6);
console.log(`(${p1}) ${p2}_${p3}`)

// Output: (97) 4041_1567

