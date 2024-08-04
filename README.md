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

```shell
src
├───controllers             # functions to connect routes to db operations
├───db                      # db connection and model definitions
├───public                  # html/css/js files for static part of site
└───routes                  # express middlewares (route wise)
```

