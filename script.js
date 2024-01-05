let button = document.querySelector('button');

let score = 0;

button.addEventListener("click", increaseScore);

function increaseScore() {
    score++;
    document.querySelector('#score').innerHTML = 'Score: ' + score;
    console.log('Score: ' + score);
}
