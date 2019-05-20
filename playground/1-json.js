const fs = require('fs')
console.log(__dirname)
const dataBuffer = fs.readFileSync(`${__dirname}/1-json.json`)
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = "test"
user.age = "30"

const userJSON = JSON.stringify(user)
fs.writeFileSync(`${__dirname}/1-json.json`,userJSON)