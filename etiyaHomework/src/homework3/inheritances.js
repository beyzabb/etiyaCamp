function Person(firstName,lastName) { 
    this.firstName = firstName; 
    this.lastName = lastName;
}

function Student(favoriteCourse) {
    this.favoriteCourse = favoriteCourse;
}

Student.prototype = new Person("Beyza","Başaran");

var can = new Student("Programming");

console.log(can.firstName + " " + can.lastName + " loves " + can.favoriteCourse);