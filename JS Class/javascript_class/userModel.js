class User {
  loginStatus = false;
  
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    let id = this.username;
    let hashedPassword = this.password;
    if (id === "johndoe" && hashedPassword === "12345") {
      this.loginStatus = true;
      return "Login was successful"
    } else {
        return "Login details are incorrect"
    }
  }

  logout() {
    this.loginStatus = false
    return "We've logged you out";
  }
}

// create a new user
let johnDoe = new User("johndoe", "12345");

// log the user in
let loginResult = johnDoe.login()

// print out the login result
console.log(`Login Message: ${loginResult}`)

// check the login status
console.log(`Login Status: ${johnDoe.loginStatus}`)

// log the user out
console.log(johnDoe.logout())

// print the loginStatus
console.log(`Login Status: ${johnDoe.loginStatus}`)
