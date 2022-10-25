const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World 1 2 3 4')
})

app.get('/teste', function (req, res) {
  res.send('Testeeeeeee')
})

app.listen(3000, () => console.log(`ONLINE http://localhost:3000`))