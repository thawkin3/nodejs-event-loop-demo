const sendResponse = require('./sendResponse')

const example5 = (req, res) => {
  const messages = [];

  const first = () => messages.push('first')
  const second = () => messages.push('second')
  const third = () => messages.push('third')
  const fourth = () => messages.push('fourth')

  setImmediate(first)
  process.nextTick(second)
  setTimeout(third, 0)
  fourth()

  sendResponse({
    demoName: 'Example 5',
    messages,
    expectedMessageLength: 4,
    res,
  })
}

module.exports = example5

// Runs in this order:
//   fourth
//   second
//   first
//   third
