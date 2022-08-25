const axios = require('axios');
const fs = require("fs");

var database = {}

function saveDatabase() {
    var stringDatabase = JSON.stringify(database)

    fs.writeFileSync('db.json', stringDatabase)
}

function readDatabase() {
    var stringDatabase = fs.readFileSync('db.json')

    database = JSON.parse(stringDatabase)
}

export default function handler(req, res) {
    var { id } = req.query
    id = id.split('\.')[0]

    readDatabase()

    if (!database[id.toString()]) {
        database[id.toString()] = {}
    }

    database[id.toString()]["times-read"] = (database[id.toString()]["times-read"] + 1) || 1

    axios.get('http://127.0.0.1:' + process.env.PORT + '/image.png', {
        responseType: 'arraybuffer'
    }).then((response) => {
        res.status(200).send(Buffer.from(response.data, 'binary'))
    }).catch((err) => {
        console.error(err)
    })

    saveDatabase()
}