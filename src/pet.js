function Pet(name) {
  this.name = name;
  this.age = 0;
  this.growUp = function () {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  };
  this.hunger = 0;
  this.fitness = 10;
}

Pet.prototype = {
  get isAlive() {
    if (this.age >= 30 && this.hunger >= 10 && this.fitness <= 0) {
      return false;
    } else {
      return true;
    }
  },
};

const MAXIMUM_FITNESS = 10;
const INCREASE_FITNESS = 4;
Pet.prototype.walk = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  if (this.fitness + INCREASE_FITNESS <= MAXIMUM_FITNESS) {
    this.fitness += INCREASE_FITNESS;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
};

const DECREASE_HUNGER = 3;
const MINIMUM_HUNGER = 0;
Pet.prototype.feed = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  if (this.hunger - DECREASE_HUNGER >= MINIMUM_HUNGER) {
    this.hunger -= DECREASE_HUNGER;
  } else {
    this.hunger = MINIMUM_HUNGER;
  }
};

  Pet.prototype.checkup = function () {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
    if (this.fitness <= 3 && this.hunger >= 5) {
      this.fitness = "I am hungry AND I need a walk";
      this.hunger = "I am hungry AND I need a walk";
      return;
    }

    if (this.fitness <= 3 && this.hunger < 5) {
      this.fitness = "I need a walk";
      return;
    }

    if (this.fitness > 3 && this.hunger >= 5) {
      this.hunger = "I am hungry";
      return;
    }

    if (this.fitness > 3 && this.hunger < 5) {
      this.hunger = "I feel great!";
      this.fitness = "I feel great!";
      return;
    }


  };


module.exports = Pet;
