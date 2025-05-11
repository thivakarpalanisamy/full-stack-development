let name1 = "Shaarathi"; // string
const age = 28; // number
let isApprentice = true; // boolean

console.log(name1 + " " + age); // print

function greet(user) { //function declaration
    console.log("Welcome " + user);
}
greet(name1) // function call

let skills = ["HTML", "CSS", "JS"]; // Array
for (let i = 0; i < skills.length; i++) { // for loop
    console.log(skills[i]);
}
let heading = document.getElementById("title");
heading.innerText = "Updated Title";
heading.style.color = "blue";

document.querySelector("button").addEventListener("click", function() {
    alert("Button clicked!");
})