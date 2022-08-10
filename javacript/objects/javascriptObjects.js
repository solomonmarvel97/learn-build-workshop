let john = {
  name: "john doe",
  age: "16",
  department: "computer science",
  "date of birth": "22/16/22",
};

john.greet = function () {
  let name = "Marv";
  return `Hello ${name}`;
}


  console.log(john["name"]);

console.log(john["date of birth"]);

console.log(john.greet());
