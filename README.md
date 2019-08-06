# Palestine-flower

  # its a website to show flowers and details of these flowers around palestine to help user know palestine nature.


### website

### user journey: 
  - As a user i should see kind of flowers.
  - As a user i should see details for each flower when i press the photo
  - As a user i should able to add flower with correct inputs
  
  
### File Structure: 
  - public 
    - dom.js
    - css
      - main.css
  - src
    - controllers
    - server.js
    - app.js
    - database
      - db_bulid.js
      - db_build.sql
      - db_connection.js
      - queries
        - getFlower.js
        - addFlower.js
    - views 
      - partial
        -title.hbs
      - layout
        - main.hbs
      - home.hbs
      - flower.hbs

  - config.env
  - .gitignore
  - readme.md
  
### Scheme:

![](https://files.gitter.im/Muniralsharif/VB0w/thumb/Hockey-ERD-_1_.png)
 
### EndPoints:
```
1- 1st Endpoint '/' =>  Home Page
GET request => respond with html 
Display flowers 

2- 2nd EndPoint '/flower/{id}' => specific flower
GET request => respond with html 
Display details about flower

3- 3rd EndPoint '/addflower' => add details
POST request => insert into database


```
### Instructions :
  - clone the repo and be there (cd command)
  - npm i 
  - CREATE DATABASE (nameOfDB) 
  - CREATE USER (userName) with password 'password' 
  - GRANT ALL PRIVILEGES ON DATABASE (nameOfDB) to (userName) 
  - go to root and make config.env file
  - add DATABASE_URL in config.env

### Team members:
- [Nadeen](https://github.com/Nadeen123)
- [Munir](https://github.com/Muniralsharif)
- [Yaqoot](https://github.com/yaqootturman)
