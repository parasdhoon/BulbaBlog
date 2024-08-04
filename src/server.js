const express = require("express")

const { db } = require('./db/models')
const { usersRoute } = require("./routes/users")
const { blogsRoute } = require("./routes/blogs")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users', usersRoute)
app.use('/api/blogs', blogsRoute)
app.use('/', express.static(__dirname + '/public'))

db.sync()
    .then(() => {
        app.listen(7777, () => {
            console.log('server started on: http://localhost:7777')
        })
    })
    .catch((err) => {
        console.error(new Error('Could not start the Database.'))
        console.error(err)
    })