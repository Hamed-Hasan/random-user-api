const { loadUser } = require("../model/userModel");


module.exports.getARandomUser = (req, res, next) => {
      // const keys = Object.keys(loadUser())
    // const randIndex = Math.floor(Math.random() * keys.length);
    // const randKey = keys[randIndex]
    // const result = loadUser([randKey])
    const x= loadUser();
    const y=x[Math.floor(Math.random()*x.length)]
    res.send(y);
}