const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

const SELECT_ALL_USER_QUERY = ''

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'allgreen',
    password: 'allgreen94',
    database: 'allgreenTest'
})

connection.connect(err => {
    if(err) {
        return err;
    }
})

app.get('/', (req, res) =>{
    // Website you wish to allow to connect

res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);
    return res.json({data: 'Hello wordl'})
})

app.use(cors())

app.listen(4200, () => {
    console.log('le serveur fonctionne sur le port 4200')
})