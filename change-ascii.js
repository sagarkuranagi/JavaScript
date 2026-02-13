const str = "abcd";
// if the ascii code of the  char is even then upper the charater else keep it in lowercase
//output = aBcD
let result = "";

for (let i = 0; i < str.length; i++) {
  const char = str[i];
  const ascii = char.charCodeAt(0);
  
  if (ascii % 2 === 0) {
    result += char.toUpperCase();
  } else {
    result += char.toLowerCase();
  }
}

console.log(result); // Output: aBcD






