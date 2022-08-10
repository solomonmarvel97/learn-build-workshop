
class Employee {
    #employeeName
    #employeeDepartment
    
    constructor(employeeName, employeeDepartment) {
        this.#employeeName = employeeName
        this.#employeeDepartment = employeeDepartment
    }

    get employeeName() {
        return this.#employeeName
    }

    set employeeName(newEmployeeName) {
        this.#employeeName = newEmployeeName
    }

    get employeeDepartment() {
        return this.#employeeDepartment
    }

    set employeeDepartment(newEmployeeDepartment) {
        this.#employeeDepartment = newEmployeeDepartment
    }

    showDetails() {
        return this.#mergeDetails()
    }

    #mergeDetails() {
        return `${this.#employeeName} is in the ${this.#employeeDepartment} department`
    }
}


// created a new instance
let john = new Employee('John Doe', 'IT')

// using the getter
console.log(john.showDetails())
