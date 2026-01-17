/* instance method - are those called on objects (instances)
 you need tp have an object to call the method
in js - instance method are added to the prototype of the constructor function*/
const a1 = new Array();
 a1.push(20);

  const str = "dct"
  str.toUpperCase();

  const obj = {a:1, b:2}
  obj.hasOwnProperty('a');

// static method - are those called on classes(constructor function)
// you don't need to have an object to called the method
// in js - static method are added on the constructor function 
Array.isArray(a1);
Object.keys(obj);

// mutable methods - push(), pop(),shift(), unshift(), splice()
// are those that changes the value of the variables 