/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here

var info = Object.values(student);
var combine = info.slice(0, 2).join("");
var email = [combine, info[2]].join(".") + "@ph.ac.bd";
console.log(email);
