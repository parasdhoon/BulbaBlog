$(() => {

    $('#navbar').load('/components/navbar.html', loginIfNeeded)
    $('#footer').load('/components/footer.html')

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