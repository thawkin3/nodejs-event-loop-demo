(function(){
  const example1Button = document.getElementById('example1Button')
  const example2Button = document.getElementById('example2Button')
  const example3Button = document.getElementById('example3Button')

  const runExample1 = () => fetch('/example1')
    .then(response => response.json())
    .then(response => console.log(response))

  const runExample2 = () => fetch('/example2')
    .then(response => response.json())
    .then(response => console.log(response))

  const runExample3 = () => fetch('/example3')
    .then(response => response.json())
    .then(response => console.log(response))

  example1Button.addEventListener('click', runExample1)
  example2Button.addEventListener('click', runExample2)
  example3Button.addEventListener('click', runExample3)
})()
