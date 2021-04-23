const sendResponse = require('./sendResponse')

const example2 = (req, res) => {
  const messages = [];

  const foo = () => messages.push('foo')
  const bar = () => messages.push('bar')
  const baz = () => messages.push('baz')

  foo()
  setTimeout(bar, 0)
  baz()

  sendResponse({
    demoName: 'Example 2',
    messages,
    expectedMessageLength: 3,
    res,
  })
}

module.exports = example2

// Runs in this order:
//   foo
//   baz
//   bar