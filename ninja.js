class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 10;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
    }

    showStats(){
        console.log("Name: " +this.name + " Strength: " +this.strength+ " Speed: " +this.speed+ " Health: " +this.health )
    }

    drinkSake(){
        this.health += 10;
        console.log(this.name + " drinks sake! +10HP");
    }
}

const ninja1 = new Ninja("Sasuke");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
