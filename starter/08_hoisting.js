// TODO: Write a function 'greet' and call it before its definition
// TODO: Write a function 'showUserData' where you use a variable before declaring it with var

greet();

function greet() {
  console.log("hi");
}

function showUserData() {
  //console.log(user);
  const user = 'Pablo';
  console.log(user);
}

showUserData();
module.exports = { greet, showUserData };
