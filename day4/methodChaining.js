// //No methode chaining
// let username = window.prompt("Enter your username: ");
// if (username) {
//     username = username.trim(); // Trim removes white space
//     let letter = username.slice(0,1).toUpperCase(); // Convert to uppercase
//     let extraChars = username.slice(1);
//     extraChars = extraChars.toLowerCase();
//     username = letter + extraChars;
//     console.log(username);
// } else {
//     console.log("No username entered.");
// }

// Methode chaining 
let username = window.prompt("Enter your username: ");
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);


