// Constructor Function
function User(name, department,salary) {
    this.name = name
    this.department = department
    this.salary = salary

    this.getSalary = function () {
        return this.salary
    }
}

let femi = new User('Femi', 'Computer Science', 500_000)

console.log(femi)
console.log(femi.name)
console.log(femi.department)
console.log(femi.getSalary())