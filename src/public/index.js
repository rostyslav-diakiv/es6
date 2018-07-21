import {Fighter} from "./fighter";
import {fight} from "./fight";
import {ImprovedFighter} from "./improvedFighter";

const improvedFighterHealth = 150;
const fighterHealth = 100;
const points = [1, 1, 2, 1, 1];

const fighterRoman = new Fighter('Romko', 4, fighterHealth);
const fighterRostik = new ImprovedFighter('Borya', 2, improvedFighterHealth);

fight(fighterRoman, fighterRostik, 1, 1, 2, 1)
    .then(value => showMessage(value))
    .then(_ => {
        fighterRoman.health = fighterHealth;
        fighterRostik.health = improvedFighterHealth;

        return fight(fighterRoman, fighterRostik, ...points);
    })
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