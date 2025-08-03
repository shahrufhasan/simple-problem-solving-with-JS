/** Problem 04 - (Delete / Store) */
var fileName = "#exp.mp4";
//write your code here
if (
  fileName.includes("pdf") ||
  fileName.includes("#") ||
  fileName.includes("docx")
) {
  console.log("Store");
} else {
  console.log("Delete");
}
