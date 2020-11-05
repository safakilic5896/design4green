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

app.options('*', cors())

app.use(cors())

app.get('/', (req, res) =>{
    return res.json({data: 'Hello wordl'})
})

app.listen(4200, () => {
    console.log('le serveur fonctionne sur le port 4200')
})