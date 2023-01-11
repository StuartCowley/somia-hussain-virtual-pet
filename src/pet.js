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
const MAXIMUM_FITNESS = 10;
const INCREASE_FITNESS = 4;
Pet.prototype.walk = function () {
  if (this.fitness + INCREASE_FITNESS <= MAXIMUM_FITNESS) {
    this.fitness += INCREASE_FITNESS;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
};

const DECREASE_HUNGER = 3;
const MINIMUM_HUNGER = 0;
Pet.prototype.feed = function () {
  if (this.hunger - DECREASE_HUNGER >= MINIMUM_HUNGER) {
    this.hunger -= DECREASE_HUNGER;
  } else {
    this.hunger = MINIMUM_HUNGER;
  }
 
};
module.exports = Pet;
