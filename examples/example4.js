const sendResponse = require('./sendResponse')

const example4 = (req, res) => {
  const messages = [];

  const first = () => messages.push('first')
  const second = () => messages.push('second')
  const third = () => messages.push('third')

  setImmediate(first)
  second()
  setTimeout(third, 0)

  sendResponse({
    demoName: 'Example 4',
    messages,
    expectedMessageLength: 3,
    res,
  })
}

module.exports = example4

// Runs in this order:
//   second
//   first
//   third
