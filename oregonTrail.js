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
            console.log(this.getName() + " is starving!")
        }
    }

    this.status = function() {
        console.log(this.getName() + " has " + this.getFood() + " food and is " + (this.getHealth() ? "feeling well." : "feeling sick"));
    }
}




let traveler1 = new Traveler("Trevor", 100, true);
let traveler2 = new Traveler("Miki", 80, true);

/*

for (let i=0; i < 30; i++) {
    traveler1.hunt();
    traveler1.eat();
    traveler1.status();
}

*/

function Wagon(_passengers, _capacity) {
    let passengers = _passengers;
    let capacity = _capacity;

    this.getPassenger = function(i) {
        return passengers[1];
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
}

let travelers = [traveler1, traveler2]

let wagon1 = new Wagon(travelers, 3);



// for (let passenger of wagon1.passengers) {
//     console.log("Passenger: " + passenger.getName() + " is aboard, " + (passenger.getHealth() ? "Healthy, and carrying " : "Sick, and carrying ") + passenger.getFood() + " food.");
// }

for (let i=0; i < wagon1.getPassengerCount(); i++) {
    console.log(wagon1.getPassengers[i].getName());
}