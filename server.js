const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const port = 3100
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/css', express.static('css'));

app.listen(port, () => console.log(`Example app listening on port ${port}`))

app.get('/', (req,res) => {
    res.sendFile(path.resolve('index.html'));
})
app.get('/js/coderbunkerusers.json', (req,res) => {
    res.sendFile(path.resolve('js/coderbunkerusers.json'));

})
app.get('/js/index.js', (req,res) => {
    res.sendFile(path.resolve('js/index.js'));

})
app.get('/config.json', (req,res) => {
    res.sendFile(path.resolve('config.json'));

})
app.get('/libs/elasticlunr.min.js', (req,res) => {
    res.sendFile(path.resolve('libs/elasticlunr.min.js'));

})