const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const basicAuth = require('express-basic-auth')
const port = 3100
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/css', express.static('css'));

app.use((req, res, next) => {
  
    const auth = {login: 'coderbunker', password: 'coderbunkerpassword'} // change this
  
    // parse login and password from headers
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = new Buffer(b64auth, 'base64').toString().split(':')
  
    // Verify login and password are set and correct
    if (!login || !password || login !== auth.login || password !== auth.password) {
      res.set('WWW-Authenticate', 'Basic realm="401"') 
      res.status(401).send('Authentication required.') // custom message
      return
    }

    // Access granted
    next()
  
  })
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