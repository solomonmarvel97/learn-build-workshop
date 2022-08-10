// call function within function

function calculate() {
    function area(r) {
        let compute = 3.142 * r * r
        console.log(compute)
        return compute
    }

    let value = area(5) + 5
    return value
}

const total = calculate()
console.log(total)