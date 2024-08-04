const express = require("express")

const { db } = require('./db/models')

const app = express()

db.sync({force:true})
    .then(() => {
        app.listen(7777, () => {
            console.log('server started on: http://localhost:7777')
        })
    })
    .catch((err) => {
        console.error(new Error('Could not start the Database.'))
        console.error(err)
    })