const { loadUser } = require("../model/userModel");


module.exports.getARandomUser = (req, res, next) => {
    // another way
      // const keys = Object.keys(loadUser())
    // const randIndex = Math.floor(Math.random() * keys.length);
    // const randKey = keys[randIndex]
    // const result = loadUser([randKey])
    const x= loadUser();
    const y=x[Math.floor(Math.random()*x.length)]
    res.send(y);
}

module.exports.getAllUsers = (req, res, next) => {
    res.json(loadUser())
}