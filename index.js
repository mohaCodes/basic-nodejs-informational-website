const express = require('express');
const path = require('path')
const app = express()

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/index.html'));
})

app.get('/about', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/about.html'));
})

app.get('/contact-me', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/contact-me.html'));
})


// handles my 404 code
app.all('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '/404.html'))
})


app.listen(8080, () => {
    console.log("Server listening on 8080...")
})