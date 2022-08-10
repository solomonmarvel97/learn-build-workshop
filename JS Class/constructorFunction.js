function User(username, password) {
    this.username = username
    this.password = password
}

User.prototype.login = function () {
    return "logged in successfully"
}

User.prototype.logout = function () {
    return "logout successfully"
}


let marv = new User('marv', 'marv')

console.log(marv.logout())