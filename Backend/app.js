const express = require('express')
const cors = require('cors')
const app = express()
require('./Connection/conn')
require('dotenv').config()
app.use(express.json())
app.use(cors())

const router = require('./Router/Book')
const authRouter = require('./Router/user')

app.get('/' , (req , res)=>{
    res.send('hello');
})
app.use('/auth' , authRouter)
app.use('/insert' , router)

app.listen(8000, ()=>{
    console.log('server is running on http://localhost:8000');
})