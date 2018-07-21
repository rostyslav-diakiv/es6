export class Fighter {
    constructor(name, power, health){
        this.name = name;
        this.power = power;
        this._health = health
    }

    get health() {
        return this._health;
    }

    set health(value) {
        if(!isNaN(value)) this._health = value;
    }

    setDamage(damage = 1) {
        if(isNaN(damage)) {
            console.log('Error: damage is not a number');
            return;
        }

        this.health = this.health - damage;
        console.log(`Fighter: ${this.name}, health: ${this.health}`)
    }

    hit(enemy, point = 1) { // Default point is 1  // Enemy is another Fighter(object)
        if(isNaN(point)) {
            console.log(`Error: Point is not a number: ${point}`);
            return;
        }

        if(!(enemy instanceof Fighter))
        {
            console.log('Error: the enemy is not a fighter');
            return;
        }

        let damage = point * this.power;
        enemy.setDamage(damage);
    }

    knockout() {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                console.log('time is over');

                resolve(`Fighter: ${this.name} was knockouted. His current health: ${this.health}`);
            }, 500);

        });
    }
}