// TODO: Autocomplete the input with AJAX calls.

const userResults = document.querySelector('#results');

const responseList = (data) => {
  console.log(data);
  data.words.forEach((w) => {
    userResults.insertAdjacentHTML('beforeend', `<li>${w}</li>`);
  });
};

const autocom = (event) => {
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${event.currentTarget.value}`)
    .then(response => response.json())
    .then(data => responseList(data));
  userResults.innerHTML = '';
};
const userInput = document.querySelector('#search');
userInput.addEventListener('keyup', autocom);
