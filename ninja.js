class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
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

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Yeah, well, you know, that's just, like, your opinion, man.");
    }
}

// const ninja1 = new Ninja("Sasuke");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();

const superSensei = new Sensei("Master Johnny Lawrence");
superSensei.speakWisdom();
superSensei.showStats();