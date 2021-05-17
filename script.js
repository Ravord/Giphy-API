let form = document.querySelector('form')
let inputFind = document.querySelector('input[type="text"]')
let inputDelete = document.querySelector('input[type="button"]')
let gifs = document.querySelector('.gifs')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  gifs.innerHTML = ''
  axios.get(`https://api.giphy.com/v1/gifs/search?q=${inputFind.value}&api_key=DC0AenRuwr3bYszCS8hV90K09wN4iUmZ`)
    .then((response) => {
      response.data.data.map((elem, id) => {
        gifs.innerHTML += `<img src="${response.data.data[elem, id].images.original.url}" width="20%" />`
      })
    })
  inputFind.value = ''
})
inputDelete.addEventListener('click', () => {
  gifs.innerHTML = ''
  inputFind.value = ''
})