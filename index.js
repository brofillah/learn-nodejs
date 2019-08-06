const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
//Import Routes
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

dotenv.config()

//Connect To DB
mongoose.connect(
    process.env.DB_LOCAL, { useNewUrlParser: true },  ()=> console.log('connected to db!')
)

//Middleware post request
app.use(express.json())


//Route Middlewares
app.use('/api/user', authRoute)
app.use('/api/posts', postRoute)

app.listen(3000, ()=> console.log('hallo owrld'))