console.table("hicham is good "); //replaced console.log with table
console.log("analytics of webpag performance");
console.log("user info");
let users = [];
for (let userOrder = 0; index < users.length; userOrder++) {
  const user = users[userOrder];
  console.log("user : ", element);
  const name = { user };
  if (name !== "" && user) {
    storeUser(user)
  }
  else {
    console.log("user doesn't exist ");
  }
}
function storeUser(user) {
  database.insert({name : user.name})
}