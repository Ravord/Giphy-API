let inputs = document.querySelectorAll('input');
let gifs = document.querySelector('.gifs');
inputs[1].addEventListener('click', () => {
  $.get(
    `https://api.giphy.com/v1/gifs/search?q=${inputs[0].value}&api_key=DC0AenRuwr3bYszCS8hV90K09wN4iUmZ`
  ).then((response) => {
    $.each(response.data, function (elem) {
      gifs.innerHTML += `<img src='${response.data[elem].images.original.url}' width='20%' />`;
    });
    inputs[0].value = '';
  });
});
inputs[2].addEventListener('click', () => {
  gifs.innerHTML = '';
  inputs[0].value = '';
});
