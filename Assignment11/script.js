document.getElementById('jokeButton').addEventListener('click', getJoke);

function getJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
      const jokeText = data.value;
      console.log(data);
      document.getElementById('jokeContainer').innerHTML = `<p>${jokeText}</p>`;
    })
    .catch(error => {
      console.error('Error fetching joke:', error);
      document.getElementById('jokeContainer').innerHTML = `<p>Oops! Something went wrong.</p>`;
    });
}