function defaults(user="No Name", age) {
    return `${user} is ${age} year(s) old`
}

let result = defaults(undefined, 12)
console.log(result)