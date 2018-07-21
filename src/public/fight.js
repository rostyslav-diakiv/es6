import {Fighter} from "./fighter";
import {ImprovedFighter} from "./improvedFighter";

export async function fight(fighter, improvedFighter, ...point) {
    let i = 0;
    while (fighter.health > 0 && improvedFighter.health > 0 ) {
        fighter.hit(improvedFighter, point[i]);
        improvedFighter.doubleHit(fighter, point[i]);
        i++;
        if(i >= point.length) i = 0;
    }
    if(fighter.health <= 0){
        endTheFight(fighter);
        // throw new Error("WQewerewredgfrrfd");
        return await fighter.knockout(); // returns a promise that fulfills with message.
    }
    else {
        endTheFight(improvedFighter);
        // throw new Error("WQewerewredgfrrfd");
        return await improvedFighter.knockout(); // returns a promise that fulfills with message.
    }
}

function endTheFight(someFighter) {
    let fighterType;

    if(someFighter instanceof ImprovedFighter)
        fighterType = 'ImprovedFighter';
    else
        fighterType = 'Fighter';

    console.log(`${fighterType}: ${someFighter.name} in knockout!!! THE FIGHT IS OVER!!!`);
}