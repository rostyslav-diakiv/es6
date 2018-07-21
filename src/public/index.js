import {Fighter} from "./fighter";
import {fight} from "./fight";
import {ImprovedFighter} from "./improvedFighter";

const improvedFighterHealth = 200;
const fighterHealth = 100;

let fighterRoman = new Fighter('Romko', 1, fighterHealth);
let fighterRostik = new ImprovedFighter('Borya', 2, improvedFighterHealth);

fight(fighterRoman, fighterRostik, 1, 1, 2, 1)
    .then(value => showMessage(value))
    .catch(reason => showError(reason));

fighterRoman.health = fighterHealth
fighterRostik.health = improvedFighterHealth;
let points = [1, 1, 2, 1, 1];

fight(fighterRoman, fighterRostik, ...points)
    .then(value => showMessage(value))
    .catch(reason => showError(reason));


function showMessage(message) {
    const parent = document.getElementById('app');
    const child = document.createElement('p');
    child.innerText = message;
    child.style.color = 'green';
    parent.appendChild(child);
}

function showError(error) {
    const parent = document.getElementById('app');
    const child = document.createElement('p');
    child.innerText = `${error.name}: ${error.message}`;
    child.style.color = 'red';
    parent.appendChild(child);
}