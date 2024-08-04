const { Router } = require("express")
const {
    findAllBlogs,
    createNewBlog
} = require("../../controllers/blogs")

const route = Router()

route.get('/', async(req, res) => {
    const blogs = await findAllBlogs()
    res.status(200).send(blogs)
})

route.post('/', async(req, res) => {
    const { userId, title, body } = req.body
    if((!userId) || (!title) || (!body)) {
        return res.status(400).send({
            error: 'Need userid, title and body to create a blog'
        })
    }

    const blog = await createNewBlog(userId, title, body)
    res.status(201).send(blog)
})

module.exports = {
    blogsRoute: route
}