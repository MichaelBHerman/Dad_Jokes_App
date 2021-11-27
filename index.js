const jokeEl = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');



async function generateJoke() {
	const response = await fetch('https://icanhazdadjoke.com/', {
		headers: {
			'Accept': 'application/json'
		}
	});
	const joke = await response.json();
	jokeEl.innerHTML = joke.joke;
}



get_joke.addEventListener('click', generateJoke);

generateJoke();