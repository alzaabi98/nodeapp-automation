const express = require('express')
const app = express()

const port = 8080;

app.get('/', (req,res)=> {
    res.send('started')
})

app.listen(port , ()=> {
    console.log(`started  at port ${port}`)
})

