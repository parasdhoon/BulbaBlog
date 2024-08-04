# BulbaBlog


## Database Setup

```shell
mysql -u root
```

```mysql
create database bulbablogdb;

create user bulbabloguser identifies by 'bulbablogpass';

grant all privileges on bulbablogdb.* to bulbabloguser;

flush privileges;
```

## Project Structure 

### Backend (Server)
```shell
src
├───controllers             # functions to connect routes to db operations
├───db                      # db connection and model definitions
├───public                  # html/css/js files for static part of site
└───routes                  # express middlewares (route wise)
```

### Frontend (Client Side Code)
```shell
src
└── public
    │   index.html                          # first / home page
    │
    ├── app                                 # our own frontend js and css code
    │   ├── common.js
    │   └── common.css
    │
    ├── components                          # our own html snippets
    │   └── navbar.html
    │
    ├── css                                 # css libraries we are using
    │   └── bootstrap.css
    │
    ├── fonts                               # fonts that we are using
    │   ├── Muli-Italic.woff2
    │   ├── muli.css
    │   └── Muli.woff2
    │
    └── js                                  # js libraries we are using
        ├── bootstrap.js
        ├── jquery.js
        └── popper.js
```

## Logic

### Users

1. **create users:**
    this will create a new user with a random username.

### Blogs

1. **create blog:**
    this will create a new post, required fields are
    -username (the author of the post)
    -title
    -body

2. **show all blogs:**
    list all existing blogs, we should have following filtering support

    -filter by username
    -filter by query contained in title (search by title)

3. **edit posts:** `TBD`

4. **delete posts:** `TBD`

### Comments

1. **show all comments (of a user)**

2. **show all comments (of a post)**

3. **add a comment**

## API documentation

### `users`

1. `POST/users`

Creates a new user with a random username and an user id.

2. `GET/users/{userid}`

Get an user with a given user id.

3. `GET/users/{username}`

Get an user with a given user name.


### `blogs`

1. `GET/blogs`

Get all blogs by everyone.

2. `POST/blogs`

Create a new blog.
Required fields in body - 
```
userId=
title=
body=
```