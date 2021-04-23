(function(){
  // Get DOM elements
  const example1Button = document.getElementById('example1Button')
  const example2Button = document.getElementById('example2Button')
  const example3Button = document.getElementById('example3Button')
  const example4Button = document.getElementById('example4Button')
  const example5Button = document.getElementById('example5Button')
  const codeForExampleName = document.getElementById('code-for-example-name')
  const codeContainer = document.getElementById('code-container')
  const outputForExampleName = document.getElementById('output-for-example-name')
  const messagesContainer = document.getElementById('messages-container')

  // Higher-order function for creating event handlers
  const runExample = (exampleRoute, exampleName, codeSnippet) => () => {
    codeForExampleName.textContent = `Code for ${exampleName}`
    codeContainer.innerHTML = `<pre>${codeSnippet}</pre>`
    outputForExampleName.textContent = `Output for ${exampleName}`
    messagesContainer.textContent = ''

    fetch(exampleRoute)
      .then(response => response.json())
      .then(response => {
        outputForExampleName.textContent = `Output for ${response.demo}`
        messagesContainer.innerHTML = `<ol>${response.messages.map(message => `<li>${message}</li>`).join('')}</ol>`
      })
  }

  // Code snippets
  const example1CodeSnippet = `
first()
second()
third()`

  const example2CodeSnippet = `
first()
setTimeout(second, 0)
third()`

  const example3CodeSnippet = `
first()
setTimeout(second, 0)
setImmediate(third)`

  const example4CodeSnippet = `
setImmediate(first)
second()
setTimeout(third, 0)`
  
  const example5CodeSnippet = `
setImmediate(first)
process.nextTick(second)
setTimeout(third, 0)
fourth()`

  // Create event handlers
  const runExample1 = runExample('/example1', 'Example 1', example1CodeSnippet)
  const runExample2 = runExample('/example2', 'Example 2', example2CodeSnippet)
  const runExample3 = runExample('/example3', 'Example 3', example3CodeSnippet)
  const runExample4 = runExample('/example4', 'Example 4', example4CodeSnippet)
  const runExample5 = runExample('/example5', 'Example 5', example5CodeSnippet)

  // Add event listeners
  example1Button.addEventListener('click', runExample1)
  example2Button.addEventListener('click', runExample2)
  example3Button.addEventListener('click', runExample3)
  example4Button.addEventListener('click', runExample4)
  example5Button.addEventListener('click', runExample5)
})()
