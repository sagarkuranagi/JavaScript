//all the capital letters come first followed by the small letters
// output = AASRIjvcpt
const str = "jAvASRcipt";

let upper = "";
let lower = "";

for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
        upper += str[i];
    } else if (str[i] >= 'a' && str[i] <= 'z') {
        lower += str[i];
    }
}

const result = upper + lower;
console.log(result);  // Output: AASRIjvcpt
