import reader from './reader.js'

const input = document.querySelector('.input')
const error = document.querySelector('.error')
const code  = document.querySelector('.code')

input.addEventListener('change', async event => {
  error.style.setProperty('display', 'none')
  const file = event.target.files[0]
  try {
    const data = await reader(file)
    code.innerHTML = JSON.stringify(data)
    console.log(data)
  } catch {
    error.style.setProperty('display', 'block')
  }
})


