const sendResponse = require('./sendResponse')

const example1 = (req, res) => {
  const messages = [];

  const first = () => messages.push('first')
  const second = () => messages.push('second')
  const third = () => messages.push('third')

  first()
  second()
  third()

  sendResponse({
    demoName: 'Example 1',
    messages,
    expectedMessageLength: 3,
    res,
  })
}

module.exports = example1

// Runs in this order:
//   first
//   second
//   third
