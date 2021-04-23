// Really hacky way to create a poll waiting for all the
// messages to be sent without introducing more promises
// or callbacks directly into the examples.
const sendResponse = ({ demoName, messages, expectedMessageLength, res }) => {
  if (messages.length === expectedMessageLength) {
    res.json({
      demo: demoName,
      messages,
    })
  } else {
    setTimeout(() => sendResponse({ demoName, messages, expectedMessageLength, res }), 250)
  }
}

module.exports = sendResponse
