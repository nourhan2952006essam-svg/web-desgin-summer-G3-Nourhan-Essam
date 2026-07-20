let courses = ["html", "css", "js"];

let NewCourses = prompt("Enter your course name");

let index = courses.findIndex((item) => item == NewCourses);

if (index != -1) {
    alert("founded at index:  " + index);
} else {
    courses.push(NewCourses);
    console.log(courses);
}