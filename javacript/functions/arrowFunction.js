// arrow functions

const greeting = (firstName, lastName, timeOfDay) => {
    let fullName = `${firstName} ${lastName}`
    if(timeOfDay.toLowerCase() === "morning") {
        return `${fullName} says Good Morning`
    } else if (timeOfDay.toLowerCase() === "afternoon") {
    }
    else {
        return null
    }
}
let result = greeting("Marvelous", "Solomon", "MORNING")
console.log(result)