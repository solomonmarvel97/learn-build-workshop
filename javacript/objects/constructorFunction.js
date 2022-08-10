let employee = {
    firstName: 'John',
    lastName: 'Henry'
}

function Employee(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName

    this.greet = function () {
        return `Hello ${this.firstName} ${this.lastName}`
    }
}

let employee1 = new Employee(employee.firstName, employee.lastName)

console.log(employee1.greet())
