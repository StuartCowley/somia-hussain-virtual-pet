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

// The Pet should have an initial fitness of 10

module.exports = Pet;
