// Example of using switch case in JavaScript

const day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Tuesday":
        console.log("Second day of the work week.");
        break;
    case "Wednesday":
        console.log("Midweek already!");
        break;
    case "Thursday":
        console.log("Almost the weekend.");
        break;
    case "Friday":
        console.log("Last workday of the week!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend! Relax and enjoy.");
        break;
    default:
        console.log("Invalid day.");
}