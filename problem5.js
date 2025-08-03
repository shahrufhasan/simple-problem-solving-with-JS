/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here

var info = Object.values(student);
var email = info.join("");
var final = email + "@ph.ac.bd";
console.log(final);
