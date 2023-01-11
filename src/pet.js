
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
  Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= 10 ) {
      this.fitness += 4;
    } else {
      this.fitness = 10;
    }
  }
  const MAXIMUM_FITNESS = 10;
  const INCREASE_FITNESS = 4;
    if ((this.fitness + INCREASE_FITNESS) <= MAXIMUM_FITNESS ) {
      this.fitness += INCREASE_FITNESS;
    } else {
      this.fitness = MAXIMUM_FITNESS;
    }

}


module.exports = Pet;
