const { loadUser } = require("../model/userModel");


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