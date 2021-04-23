const sendResponse = require('./sendResponse')

const example1 = (req, res) => {
  const messages = [];

  const foo = () => messages.push('foo')
  const bar = () => messages.push('bar')
  const baz = () => messages.push('baz')

  foo()
  bar()
  baz()

  sendResponse({
    demoName: 'Example 1',
    messages,
    expectedMessageLength: 3,
    res,
  })
}

module.exports = example1

// Runs in this order:
//   foo
//   bar
//   baz
