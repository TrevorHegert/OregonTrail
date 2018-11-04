function Traveler(_name, _food, _isHealthy) {
    let name = _name;
    let food = _food;
    let isHealthy = _isHealthy;

    this.setFood = function(newFood) {
        food = newFood;
    }

    this.huntWin = function () {
        this.setFood(100);
    }

    this.eatFood = function () {
        this.setFood(this.getFood() - 20);
    }

    this.getName = function() {
        return name;
    }

    this.getFood = function() {
        return food;
    }

    this.getHealth = function() {
        return isHealthy;
    }

    this.setHealth = function(newHealth) {
        isHealthy = newHealth;
    }

    this.hunt = function() {
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

    this.eat = function() {
        if (this.getFood() >= 20) {
            this.eatFood();
            console.log(this.getName() + " has eaten!");
        }
        else {
            this.setFood(0);
            this.setHealth(false);
            console.log(this.getName() + " is hungry!")
        }
    }

    this.status = function() {
        console.log(this.getName() + " has " + this.getFood() + " food and is " + (this.getHealth() ? "feeling well." : "feeling sick"));
    }
}

var passengers = []

function Wagon(_passengers, _capacity) {
    let passengers = _passengers;
    let capacity = _capacity;

    this.getPassenger = function(i) {
        return passengers[i];
    }

    this.getPassengers = function() {
        return passengers;
    }

    this.getPassengerCount = function() {
        return passengers.length;
    }

    this.getCapacity = function() {
        return capacity;
    }

    this.join = function(traveler) {
        if(this.getPassengerCount() < this.getCapacity()) {
            passengers.push(traveler);
        }
        else {
            console.log("Sorry there is no room to add " + traveler.getName());
        }
    }

    this.quarantine = function() {
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

function food(wagon) {
    var totalFood = 0;
    for (let traveler of wagon.getPassengers()) {
        totalFood = (totalFood + traveler.getFood());
    };
    console.log("The wagon has " + totalFood + " food remaining.")
}

//Call Traveler Constructor to create travelers to populate a wagon
let traveler1 = new Traveler("Trevor", 100, true);
let traveler2 = new Traveler("Miki", 80, true);

//Assign travelers to an initial array
let travelers = [traveler1, traveler2]

//Call Wagon Constructor to Build a Wagon
let wagon1 = new Wagon(travelers, 3);

console.log("Test Hunt and Eat Functions on initial travelers:");
for (let traveler of wagon1.getPassengers()) {
    traveler.hunt();
    traveler.eat();
    traveler.status();
}
console.log(" ");

console.log("Test Quarantine Function for Negative Results:");
wagon1.quarantine();
console.log(" ");

//Construct another traveler outside of array to test join function
let traveler3 = new Traveler("Bob", 65, false);

//Test Join function
wagon1.join(traveler3);

console.log("Test Quarantine function for Positive Results after adding sick passenger:");
wagon1.quarantine();
console.log(" ");

console.log("Test food function on wagon1:");
food(wagon1);