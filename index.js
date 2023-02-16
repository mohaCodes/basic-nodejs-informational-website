const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.status(200).send("This is home page")
})

app.get('/about', (req, res) => {
    res.status(200).send("This is about page")
})

app.get('/contact-me', (req, res) => {
    res.status(200).send("This is contact page")
})

app.listen(8080, () => {
    console.log("Server listening on 8080...")
})