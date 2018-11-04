

//ES6 Traveler

class Traveler {
 
    constructor(_name, _food, _isHealthy) {
        this.name = _name;
        this.food = _food;
        this.isHealthy = _isHealthy;
    }

    getName() {return this.name;}
    getFood() {return this.food;}
    getHealth() {return this.isHealthy;}
    setFood(newFood) {this.food = newFood}
    setHealth(newHealth) {this.isHealthy = newHealth;}
    eatFood() {this.setFood(this.getFood() - 20);}
    huntWin() {this.setFood(100);}

    hunt() {
        let huntChance = Math.floor(Math.random() * 10);
        console.log("Hunt Roll: " + huntChance);
        if (huntChance <= 4) {
            console.log("Hunt Successful!");
            this.huntWin()
        }
        else {
            console.log("Hunt Unsuccessful....Better Luck Next Time!");
        }
    }

    eat() {
        if (this.getFood() >= 20) {
            console.log(this.getName() + " has eaten!");
        }
        else {
            this.setFood(0);
            this.setHealth(false);
            console.log(this.getName() + " is hungry!")
        }
    }
}

//Converted one of Traveler functions to a prototype for the practice.
Traveler.prototype.status = function(){
    console.log(this.getName() + " has " + this.getFood() + " food and is " + (this.getHealth() ? "feeling well." : "feeling sick"));
}

let passengers = []

class Wagon {

    constructor(_passengers, _capacity) {
        this.passengers = _passengers;
        this.capacity = _capacity;
    }

    getPassenger(i) {return passengers[i];}
    getPassengers() {return passengers;}
    getPassengerCount() {return passengers.length;}
    getCapacity() {return this.capacity;}

    join(traveler) {
        if(this.getPassengerCount() < this.getCapacity()) {
            passengers.push(traveler);
        }
        else {
            console.log("Sorry there is no room to add " + traveler.getName());
        }
    }

    quarantine() {
        let blackFlag = false;
        for (let i=0; i < this.getPassengerCount(); i++) {
            if (this.getPassenger(i).getHealth() === false) {
                blackFlag = true;
            }
        };
        if (blackFlag === true) {
            console.log("Sick and wounded Aboard")
        }
        else {
            console.log("Everyone is Healthy.....for now.")
        }
    }
}

function supplies(wagon) {
    var totalFood = 0;
    for (let traveler of wagon.getPassengers()) {
        totalFood = (totalFood + traveler.getFood());
    };
    console.log("The wagon has " + totalFood + " food remaining.");
}

//Call Traveler Constructor to create travelers to populate a wagon
let traveler1 = new Traveler("Trevor", 100, true);
let traveler2 = new Traveler("Miki", 50, true);

//Assign travelers to an initial array
let travelers = [traveler1, traveler2]

//Test Hunt and Eat Functions on initial travelers:
console.log("Test Hunt and Eat Functions on initial travelers:");
for (let traveler of travelers) {
    traveler.hunt();
    traveler.eat();
    traveler.status();
}
console.log(" ");

//Call Wagon Constructor to Build a Wagon
let wagon1 = new Wagon(travelers, 3);

//Construct another traveler outside of array to test join function
let traveler3 = new Traveler("Bob", 65, false);

//Test Join function
wagon1.join(traveler3);

console.log("Test Quarantine function for Positive Results after adding sick passenger:");
wagon1.quarantine();
console.log(" ");

console.log("Test food function on wagon1:");
supplies(wagon1);
console.log(" ");

for (let traveler of travelers) {
    traveler.status();
}