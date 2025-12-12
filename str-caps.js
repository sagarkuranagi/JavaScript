const str= "rEaCT";
let result="";
//toggle cases ie if char is in capital make it small and vice ver
// output ="ReAct";
/*for (let i = 0; i < str.length; i++) {
  const char = str[i];
  if (char === char.toUpperCase()) {
    result += char.toLowerCase();
  } else {
    result += char.toUpperCase();
  }
}

console.log(result); */

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toUpperCase()) {
    result += str[i].toLowerCase();
  } else {
    result += str[i].toUpperCase();
  }
}

console.log(result);
