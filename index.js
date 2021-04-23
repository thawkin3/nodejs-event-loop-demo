const express = require('express')
const path = require('path')

const example1 = require('./examples/example1');
const example2 = require('./examples/example2');
const example3 = require('./examples/example3');

const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' })
  })
  .get('/example1', example1)
  .get('/example2', example2)
  .get('/example3', example3)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
