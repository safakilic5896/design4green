const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

const SELECT_ALL_REGION = `select nom FROM region ORDER BY nom`

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

app.get('/region', (req, res) =>{
    connection.query(SELECT_ALL_REGION, (err, resultRegion) => {
        if(err) {
            return res.send(err)
        } else {
            const dataRegion  = resultRegion.map((region) => {
                return region['nom']
            })
            return res.json(dataRegion)
        }
    })
})

app.get('/departement', (req, res) =>{
    const{ region } = req.query
    let SELECT_ALL_DEPARTEMENT_FROM_REGION = ``
    if (region === '') {
        SELECT_ALL_DEPARTEMENT_FROM_REGION = `select departement.nom as nom from 
        departement inner JOIN attachementDeptRegion on departement.id = attachementDeptRegion.id_dept INNER JOIN 
        region on region.id = attachementDeptRegion.id_reg WHERE 1 ORDER BY nom`
    } else {
        SELECT_ALL_DEPARTEMENT_FROM_REGION = `select departement.nom as nom from 
        departement inner JOIN attachementDeptRegion on departement.id = attachementDeptRegion.id_dept INNER JOIN 
        region on region.id = attachementDeptRegion.id_reg WHERE region.nom = "${region}" ORDER BY nom`
    }
    connection.query(SELECT_ALL_DEPARTEMENT_FROM_REGION, (err, resultDepartement) => {
        if(err) {
            return res.send(err)
        } else {
            const dataDepartement = resultDepartement.map((departement) => {
                return departement['nom']
            })
            return res.json(dataDepartement)
        }
    })
})

app.get('/commune', (req, res) => {
    let SELECT_ALL_COMMUNE_FROM_DEPARTEMENT = ``
    const{ departement, region } = req.query
    if (departement === '' && region === '') {
        SELECT_ALL_COMMUNE_FROM_DEPARTEMENT = `select distinct nom from
        commune ORDER BY nom`
        } 
    else if(departement === '') {
        SELECT_ALL_COMMUNE_FROM_DEPARTEMENT = `SELECT distinct commune.nom as nom FROM commune INNER JOIN attachementCommuneDept ON 
        commune.id = attachementCommuneDept.id_commune inner join departement on attachementCommuneDept.id_dept = departement.id 
        inner join attachementDeptRegion ON departement.id = attachementDeptRegion.id_dept inner join 
        region on attachementDeptRegion.id_reg = region.id WHERE region.nom = "${region}" ORDER BY nom`
        } 
    else {
        SELECT_ALL_COMMUNE_FROM_DEPARTEMENT = `select distinct commune.nom as nom from
        commune inner JOIN attachementCommuneDept on commune.id = attachementCommuneDept.id_commune INNER JOIN
        departement on departement.id = attachementCommuneDept.id_dept WHERE departement.nom = "${departement}" ORDER BY nom`
    }
    connection.query(SELECT_ALL_COMMUNE_FROM_DEPARTEMENT, (err, resultCommune) => {
        if(err) {
            return res.send(err)
        } else {
            const dataCommune = resultCommune.map((commune) => {
                return commune['nom']
            })
            return res.json(dataCommune)
        }
    })
})

app.get('/search', (req, res) => {
    let SEARCHE_QUERY = ''
    const {departement, region, commune} = req.query
    if (commune !== '') {
        SEARCHE_QUERY = ` SELECT commune.nom, commune.codePostal, commune.quartier, commune.scoreGlob, commune.scoreGlobDept, commune.scoreGlobReg
        FROM commune INNER JOIN attachementCommuneDept ON commune.id = attachementCommuneDept.id_commune inner join departement on 
        attachementCommuneDept.id_dept = departement.id inner join attachementDeptRegion ON departement.id = attachementDeptRegion.id_dept inner join region on attachementDeptRegion.id_reg = region.id
        WHERE commune.nom = "${commune}" ORDER BY commune.nom`
    } 
    else if(departement !== '') {
        SEARCHE_QUERY = ` SELECT commune.nom, commune.codePostal, commune.quartier, commune.scoreGlob, commune.scoreGlobDept, commune.scoreGlobReg
        FROM commune INNER JOIN attachementCommuneDept ON commune.id = attachementCommuneDept.id_commune inner join departement on 
        attachementCommuneDept.id_dept = departement.id inner join attachementDeptRegion ON departement.id = attachementDeptRegion.id_dept inner join region on attachementDeptRegion.id_reg = region.id
        WHERE departement.nom = "${departement}" ORDER BY commune.nom`
    }
    else {
        SEARCHE_QUERY = `SELECT commune.nom, commune.codePostal, commune.quartier, commune.scoreGlob, commune.scoreGlobDept, commune.scoreGlobReg
        FROM commune INNER JOIN attachementCommuneDept ON commune.id = attachementCommuneDept.id_commune inner join departement on 
        attachementCommuneDept.id_dept = departement.id inner join attachementDeptRegion ON departement.id = attachementDeptRegion.id_dept inner join region on attachementDeptRegion.id_reg = region.id
        WHERE region.nom = "${region}" ORDER BY commune.nom`
    }
    connection.query(SEARCHE_QUERY, (err, data) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json(data)
        }
    })
})

app.listen(4200, () => {
    console.log('le serveur fonctionne sur le port 4200')
})