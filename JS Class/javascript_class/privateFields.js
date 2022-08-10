
class Employee {
    #employeeName
    constructor(employeeName) {
        this.#employeeName = employeeName
    }
}


let john = new Employee('John Doe')

console.log(john.employeeName)