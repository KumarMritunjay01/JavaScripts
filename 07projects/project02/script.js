const form = document.querySelector('form');
// console.log(form)

// this useCase will give you empty while using here
// const height = parseInt(document.querySelector('#height').value)

// Event addEventListener
form.addEventListener('submit', function (e) {
//   e.preventDefault(); // hold with emidiate submit

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0) {
    // results.innerHTML = 'Plese give a valide height';
    console.log('Hello');
  }
});
