import path from 'path';
import Express from 'express'

// app set up
const app = Express()

// static assets
app.use(Express.static('public'))

// routes
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + '/root.html'));
})

// server up
app.listen(3000, () => {
  console.log('App up on 3000')
})