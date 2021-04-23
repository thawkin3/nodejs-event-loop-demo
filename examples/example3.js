const sendResponse = require('./sendResponse')

const example3 = (req, res) => {
  const messages = [];

  const first = () => messages.push('first')
  const second = () => messages.push('second')
  const third = () => messages.push('third')

  first()
  setTimeout(second, 0)
  setImmediate(third)

  sendResponse({
    demoName: 'Example 3',
    messages,
    expectedMessageLength: 3,
    res,
  })
}

module.exports = example3

// Runs in this order:
//   first
//   third
//   second
