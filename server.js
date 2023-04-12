const express = require('express')
const app = express()

const manifest = require('./dist/manifest.json')

app.set('view engine', 'pug')
app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!', index: manifest['index.html'].file })
})

app.listen(4000)
