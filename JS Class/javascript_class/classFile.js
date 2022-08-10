class Employee {
    constructor(_name, _department, _pob) {
        this.name = _name
        this.department = _department
        this.pob = _pob
    }

    greet(timeofDay) {
        timeofDay = "Tuesday"
        if (timeofDay === "Tuesday") {
            return this.name + " It's Tuesday"
        }
    }
}

let johnDoe = new Employee("John Doe", "IT", "Lagos, Nigeria")
let marvDoe = new Employee("Marv Doe", "Food", "Abuja, Nigeria")

console.log(johnDoe.greet())
console.log(marvDoe)