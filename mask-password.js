const password = "secret123";

// output = "***********"
/*const masked = "*".repeat(password.length);

console.log(masked);  // Output: **********/
let masked = "";

for (let i = 0; i < password.length; i++) {
    masked += "*";
}

console.log(masked);  // Output: *********

 