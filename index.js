const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' })
  })
  // Runs in this order:
  //   foo
  //   bar
  //   baz
  .get('/example1', (req, res) => {
    const messages = [];

    const foo = () => messages.push('foo')
    const bar = () => messages.push('bar')
    const baz = () => messages.push('baz')

    foo()
    bar()
    baz()

    // Really hacky way to create a poll waiting for all the
    // messages to be sent without introducing more promises
    // or callbacks directly into the examples.
    const sendResponse = () => {
      if (messages.length === 3) {
        res.json({
          demo: 'Example 1',
          messages,
        })
      } else {
        setTimeout(sendResponse, 250)
      }
    }

    sendResponse()
  })
  // Runs in this order:
  //   foo
  //   baz
  //   bar
  .get('/example2', (req, res) => {
    const messages = [];

    const foo = () => messages.push('foo')
    const bar = () => messages.push('bar')
    const baz = () => messages.push('baz')

    foo()
    setTimeout(bar, 0)
    baz()

    // Really hacky way to create a poll waiting for all the
    // messages to be sent without introducing more promises
    // or callbacks directly into the examples.
    const sendResponse = () => {
      if (messages.length === 3) {
        res.json({
          demo: 'Example 2',
          messages,
        })
      } else {
        setTimeout(sendResponse, 250)
      }
    }

    sendResponse()
  })
  // Runs in this order:
  //   foo
  //   baz
  //   bar
  .get('/example3', (req, res) => {
    const messages = [];

    const foo = () => messages.push('foo')
    const bar = () => messages.push('bar')
    const baz = () => messages.push('baz')

    foo()
    setTimeout(bar, 0)
    setImmediate(baz)

    // Really hacky way to create a poll waiting for all the
    // messages to be sent without introducing more promises
    // or callbacks directly into the examples.
    const sendResponse = () => {
      if (messages.length === 3) {
        res.json({
          demo: 'Example 3',
          messages,
        })
      } else {
        setTimeout(sendResponse, 250)
      }
    }

    sendResponse()
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
