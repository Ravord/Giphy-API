let form = document.querySelector('form')
let inputFind = document.querySelector('input[type="text"]')
let inputDelete = document.querySelector('input[type="button"]')
let gifs = document.querySelector('.gifs')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  gifs.innerHTML = ''
  axios.get(`https://api.giphy.com/v1/gifs/search?q=${inputFind.value}&api_key=DC0AenRuwr3bYszCS8hV90K09wN4iUmZ`)
    .then(({ data }) => {
      data.data.map((elem) => {
        let image = document.createElement('img')
        image.setAttribute('src', elem.images.downsized_still.url)

        function append() {
          gifs.appendChild(image)
        }
        image.addEventListener('load', append)

        let clickCount = 0
        image.addEventListener('click', () => {
          image.removeEventListener('load', append)
          if (clickCount % 2 === 0) {
            image.setAttribute('src', elem.images.downsized.url)
          }
          else {
            image.setAttribute('src', elem.images.downsized_still.url)
          }
          clickCount++
        })
      })
    })
  inputFind.value = ''
  inputFind.focus()
})
inputDelete.addEventListener('click', () => {
  gifs.innerHTML = ''
  inputFind.value = ''
  inputFind.focus()
})
