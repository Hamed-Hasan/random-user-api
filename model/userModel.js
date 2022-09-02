const { readFileSync } = require('fs');

let loadUser = () => {
    let user = JSON.parse(readFileSync('data.json'));
    return user
}

module.exports = {loadUser}