let user = {
    id: 1,
    username: 'johndoe88',
    
    getUsername: function () {
        return this.username
    }

}

global.fullName = 'John'

// let username = user.getUsername()

console.log(fullName)
