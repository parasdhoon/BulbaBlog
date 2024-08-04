$(() => {

    $('#navbar').load('/components/navbar.html', loginIfNeeded)
    $('#footer').load('/components/footer.html')
    $('#content').load('/components/all-blogs.html', loadBlogs)

})

function loginIfNeeded() {

    window.currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    if(!currentUser) {
        $.post('/api/users', {}, (user) => {
            window.localStorage.user = JSON.stringify(user)
            currentUser = user
        })
    }
    $('#nav-username').text(currentUser.username)
    
}

function loadBlogs() {

    $.get('/api/blogs', (blogs) => {
        for(let blog of blogs) {
            $('#blogs-container').append(
                $(`
                <div class="col-4 m-2">
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">${blog.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${blog.user.username}</h6>
                        <p class="card-text">
                            ${blog.body.substr(0, 200)}
                            <a href="#">...read more
                        </p>
                        <a href="#" class="card-link">Comment</a>
                        <a href="#" class="card-link">Like</a>
                        </div>
                    </div>
                </div>    
                `)
            )
        }
    })
}