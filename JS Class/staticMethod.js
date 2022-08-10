// example 1
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
      return "Login was successful";
    } else {
      return "Login details are incorrect";
    }
  }

  logout() {
    this.loginStatus = false;
    return "We've logged you out";
  }

  static checkLoginStatus() {
    let name = "hello";
    return name;
  }
}

let loginStatus = User.checkLoginStatus();

console.log(loginStatus);

//   example 2
class Request {
  static callRequest(parameter) {
    return `This is your parameter: ${parameter}`;
  }

  static getRequest(parameter) {
    return `This is your parameter: ${parameter}`;
  }
}

let requestValue = Request.callRequest("backend engineering");
let newRequestValue = Request.getRequest("frontend engineering");
console.log(requestValue);
console.log(newRequestValue);
