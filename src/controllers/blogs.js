const { Blogs, Users } = require('../db/models')

async function createNewBlog(userId, title, body) {

    const blog = await Blogs.create({
        title,
        body,
        userId
    })

    return blog
}

async function findAllBlogs(query) {

    // TODO: Handle query params
    const blogs = await Blogs.findAll({
        include: [Users]
    })

    return blogs
}

module.exports = {
    createNewBlog,
    findAllBlogs
}

/* Test Code */

/*
async function task() {
    console.log(
        await createNewBlog(
            1, 
            'This is a Testing Blog.',
            'Body of the blog goes here'
        )
    )
    console.log(
        await createNewBlog(
            2, 
            'This is a Testing Blog 2.',
            'Body of the blog goes here 2'
        )
    )
    console.log(
        await createNewBlog(
            3, 
            'This is a Testing Blog 3.',
            'Body of the blog goes here 3'
        )
    )

    const blogs = await showAllBlogs()
    for(let b of blogs) {
        console.log(`${b.title}\n${b.user.username}\n${b.body}\n============\n`)
    }
}
    */

task()