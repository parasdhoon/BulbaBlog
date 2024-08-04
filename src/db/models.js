const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'mysql',
    database: 'bulbablogdb',
    username: 'bulbabloguser',
    password: 'bulbabloguserpass'
})

const COL_ID_DEF = {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}

const COL_USERNAME_DEF = {
    type: Sequelize.DataTypes.STRING(30),
    unique: true,
    allowNull: false
}

const COL_TITLE_DEF = {
    type: Sequelize.DataTypes.STRING(150),
    allowNull: false
}

const Users = db.define('user', {
    id: COL_ID_DEF,
    username: COL_USERNAME_DEF
})

const Blogs = db.define('blog', {
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
    }
})

const Comments = db.define('comment', {
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.TEXT('tiny')
    }
})

// Defining the Relationships
Users.hasMany(Blogs)
Blogs.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Blogs.hasMany(Comments)
Comments.belongsTo(Blogs)

module.exports = {
    db,
    Users,
    Blogs,
    Comments
}