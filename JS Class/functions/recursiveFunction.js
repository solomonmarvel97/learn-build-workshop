let count = 1

function recursiveFunc() {
    count += 1
    if(count === 100) {
        return
    }
    console.log(count)
    recursiveFunc()
}

recursiveFunc()