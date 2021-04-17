const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' })
  })
  .get('/example1', (req, res) => {
    res.json({
      demo: 'example1'
    })
  })
  .get('/example2', (req, res) => {
    res.json({
      demo: 'example2'
    })
  })
  .get('/example3', (req, res) => {
    res.json({
      demo: 'example3'
    })
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
