const express = require('express')
const path = require('path')

const example1 = require('./examples/example1');
const example2 = require('./examples/example2');
const example3 = require('./examples/example3');
const example4 = require('./examples/example4');
const example5 = require('./examples/example5');

const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' })
  })
  .get('/example1', example1)
  .get('/example2', example2)
  .get('/example3', example3)
  .get('/example4', example4)
  .get('/example5', example5)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
