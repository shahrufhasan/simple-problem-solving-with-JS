/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var salary = startingSalary;
for (var i = 1; i <= experience; i++) {
  salary = salary * (1 + 5 / 100);
  console.log(salary.toFixed(2));
}
