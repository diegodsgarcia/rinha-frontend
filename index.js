import reader from './reader.js'
import createTreeView from './tree-view.js'
import splitComplexJSON from './splitComplexObject.js'

const form = document.querySelector('.form')
const input = document.querySelector('.input')
const error = document.querySelector('.error')
const titleFile = document.querySelector('.titleFile')
const code  = document.querySelector('.code')
const bottom = document.querySelector('.bottom')

input.addEventListener('change', async event => {
  error.style.setProperty('display', 'none')
  const file = event.target.files[0]
  let lazyJson
  try {
    const {json, fileName} = await reader(file)
    /* Tentativa de conseguir fazer a leitura do json em lazyload com yield, mas nâo consegui fazer uma estrutura ideal
    de split para cada iteraçâo :(

    // lazyJson = splitComplexJSON(json, 1000)
    createTreeView(lazyJson.next().value, code)*/

    createTreeView(json, code)
    titleFile.textContent = fileName
    form.style.setProperty('display', 'none')

    /*
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        createTreeView(lazyJson.next().value, code)
      }
    })
    intersectionObserver.observe(bottom)
    */
  } catch(error) {
    console.error(error)
    error.style.setProperty('display', 'block')
  }
})


