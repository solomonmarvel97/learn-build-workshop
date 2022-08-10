
class Employee {
    #employeeName
    constructor(employeeName) {
        this.#employeeName = employeeName
    }

    get employeeName() {
        return this.#employeeName
    }

    set employeeName(newEmployeeName) {
        this.#employeeName = newEmployeeName
    }
}


// created a new instance
let john = new Employee('John Doe')

// using the getter
console.log(john.employeeName)

// using the setter
john.employeeName = 'Hogan Mary'

console.log(john.employeeName)