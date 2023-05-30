const express = require('express')
const router = require('./router')
const cors = require('cors')



const app = express()
const PORT = 3001


app.use(cors())
app.use(express.json())
app.use(router)
app.get('/', (_req, res) => {
    res.status(200).json('API working perfectly!')
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})

