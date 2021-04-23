const sendResponse = require('./sendResponse')

const example3 = (req, res) => {
  const messages = [];

  const foo = () => messages.push('foo')
  const bar = () => messages.push('bar')
  const baz = () => messages.push('baz')

  foo()
  setTimeout(bar, 0)
  setImmediate(baz)

  sendResponse({
    demoName: 'Example 3',
    messages,
    expectedMessageLength: 3,
    res,
  })
}

module.exports = example3

// Runs in this order:
//   foo
//   baz
//   bar
