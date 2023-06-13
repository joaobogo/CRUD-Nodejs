const express = require('express')
const router = require('./router')
<<<<<<< HEAD
const connection = require("./db/index")
=======
const cors = require('cors')



>>>>>>> ae950adaab335952d2fedd7bf88ab5af23c5a4cb
const app = express()
const PORT = 3001


app.use(cors())
app.use(express.json())
app.use(router)

connection()

app.get('/', (_req, res) => {
    res.status(200).json('API working perfectly!')
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})

