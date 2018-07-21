import {Fighter} from "./fighter";
import {ImprovedFighter} from "./improvedFighter";

export async function fight(fighter, improvedFighter, ...point) {
    let i = 0;
    while (improvedFighter.health > 0) {
        if (i >= point.length) i = 0;
        improvedFighter.doubleHit(fighter, point[i]);
        if (fighter.health <= 0) {
            break;
        }
        fighter.hit(improvedFighter, point[i]);
        i++;
    }
    if (fighter.health <= 0) {
        endTheFight(fighter, 'Fighter');
        // throw new Error("WQewerewredgfrrfd");
        return await fighter.knockout(); // returns a promise that fulfills with message.
    }
    else {
        endTheFight(improvedFighter, 'ImprovedFighter');
        // throw new Error("WQewerewredgfrrfd");
        return await improvedFighter.knockout(); // returns a promise that fulfills with message.
    }
}

function endTheFight(someFighter, fighterType) {
    console.log(`${fighterType}: ${someFighter.name} in knockout!!! THE FIGHT IS OVER!!!`);
}