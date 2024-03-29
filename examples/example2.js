const sendResponse = require('./sendResponse')

const example2 = (req, res) => {
  const messages = [];

  const first = () => messages.push('first')
  const second = () => messages.push('second')
  const third = () => messages.push('third')

  first()
  setTimeout(second, 0)
  third()

  sendResponse({
    demoName: 'Example 2',
    messages,
    expectedMessageLength: 3,
    res,
  })
}

module.exports = example2

// Runs in this order:
//   first
//   third
//   second