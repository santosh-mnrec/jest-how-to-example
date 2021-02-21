const Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.goToSchool = function () {
        if (this.age > 16) {
            this.drive();
        }
        else {
            this.takeBus();
        }
    };
    Student.prototype.drive = function () {
        // ...
    };
    Student.prototype.takeBus = function () {
        // ...
    };
    return Student;
}());
module.exports=Student;