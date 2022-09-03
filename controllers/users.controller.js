const { loadUser } = require("../model/userModel");
var fs = require('fs');
let tools = [
  { id: 1, name: "Hammer" },
  { id: 2, name: "Hammer2" },
  { id: 3, name: "Hammer3" },
];
module.exports.getARandomUser = (req, res, next) => {
    // another way
      // const keys = Object.keys(loadUser())
    // const randIndex = Math.floor(Math.random() * keys.length);
    // const randKey = keys[randIndex]
    // const result = loadUser([randKey])
    const user = loadUser();
    const result = user[Math.floor(Math.random()*user.length)]
    res.send(result);
}


// BONUS: Limit the number of users using query parameter(s)
// http://localhost:5000/api/user/allUser
// http://localhost:5000/api/user/allUser?limit=3
module.exports.getAllUsers = (req, res, next) => {
    const {limit} = req.query;
    // console.log(limit);
    res.json(loadUser().slice(0, limit));
}

module.exports.saveUser = (req, res, next) => {

  var data = fs.readFileSync("data.json");
  var myObject = JSON.parse(data);
  let newData = {
    ...req.body,
  };
  myObject.push(newData);
  var newData2 = JSON.stringify(myObject);
  fs.writeFile("data.json", newData2, (err) => {
    // Error checking
    if (err) throw err;
    console.log("New data added");
  });
  res.send(newData2)
}

module.exports.updateUser = (req, res) => {
    var data = fs.readFileSync("data.json");
    var myArray = JSON.parse(data);
    const { id } = req.params;
    const result = myArray.find((user => user._id == id))
    const newObj = { 
      ...result,
      ...req.body
    }
    const newData = JSON.stringify(newObj);
    fs.writeFile('data.json', newData, (err,data) => {
      if (err) {
        throw err;
      }else {
        res.send(data);
      }
    })
  };
  
  module.exports.bulkUpdate = (req, res) => {
    var data = fs.readFileSync("data.json");
    // var myArray = JSON.parse(data);
    // const { id } = req.params;
    const result = data.forEach((user => user._id == typeof String || Number))
    // const newData = JSON.stringify(result);
    fs.writeFile('data.json', result, (err,data) => {
      if (err) {
        throw err;
      }else {
        res.send(data);
      }
    })
  }

  module.exports.deleteUser = (req, res) => {
    var data = fs.readFileSync("data.json");
    var myArray = JSON.parse(data);
    const { id } = req.params;
    const result = myArray.filter((user => user._id != id))
    const newData = JSON.stringify(result);
    fs.writeFile('data.json', newData, (err,data) => {
      if (err) {
        throw err;
      }else {
        res.send(data);
      }
    })
  };