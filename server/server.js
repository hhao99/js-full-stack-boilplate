const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/json', (req,res)=> {
    res.json({msg: "Hello"})
})

const port = 4000
app.listen(port,()=> {
    console.log("start server on " +port)
})