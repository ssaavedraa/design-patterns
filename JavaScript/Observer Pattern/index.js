import Observer from './observer'

const pinkButton = document.getElementById('pink-btn')
const blueButton = document.getElementById('blue-btn')

pinkButton.addEventListener('click', () => {
  const data = 'Click on pink button!'

  Observer.notify(data)
})

blueButton.addEventListener('click', () => {
  const data = 'Click on blue button!'

  Observer.notify(data)
})