const joke = document.querySelector(`.joke`);
const btn = document.querySelector(`.btn`);
const apiUrl = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,explicit&type=single`;

let getJoke = () => {
    joke.classList.remove(`fade`);
    fetch(apiUrl)
    .then(data => data.json())
    .then(item =>{ joke.innerHTML = `${item.joke}`;
    joke.classList.add(`fade`);
    });
}

btn.addEventListener(`click`, getJoke);

getJoke();