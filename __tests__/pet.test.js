const Pet = require("../src/pet.js");
describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });
  it("sets the name property", () => {
    const pet = new Pet("Fido");

    expect(pet.name).toEqual("Fido");
  });

  it("has a initial age of 0", () => {
    const pet = new Pet("Fido");

    expect(pet.age).toEqual(0);
  });
  it("has a initial hunger of 0", () => {
    const pet = new Pet("Fido");

    expect(pet.hunger).toEqual(0);
  });
  it("has a initial fitness of 10", () => {
    const pet = new Pet("Fido");

    expect(pet.fitness).toEqual(10);
  });
});
describe("growUp", () => {
  it("increments the age by 1", () => {
    const pet = new Pet("Fido");
    pet.growUp();

    expect(pet.age).toEqual(1);
  });

  describe("increaseHunger", () => {
    it("increase hunger by five as they grow up", () => {
      const pet = new Pet("Fido");
      pet.growUp();

      expect(pet.hunger).toEqual(5);
    });

    describe("decrease fitness", () => {
      it("decrease fitness by 10 as pet grows up", () => {
        const pet = new Pet("Fido");
        pet.growUp();

        expect(pet.fitness).toEqual(7);
      });
      describe("walk", () => {
        it("increases fitness by 4", () => {
          const pet = new Pet("fido");

          pet.fitness = 4;
          pet.walk();

          expect(pet.fitness).toEqual(8);
        });

        it("increases fitness by to a maximum of 10", () => {
          const pet = new Pet("fido");

          pet.fitness = 8;
          pet.walk();

          expect(pet.fitness).toEqual(10);
        });
        describe("feed", () => {
          it("decreases hunger by 3 but never below 0", () => {
            const pet = new Pet("fido");

            pet.hunger = 2;
            pet.feed();

            expect(pet.hunger).toEqual(0);
          });
          describe("checkup", () => {
            it("gives instruction if requires fitness or hungry", () => {
              const pet = new Pet("fido");

              pet.hunger = 5;
              pet.fitness = 3;
              pet.checkup();

              expect(pet.fitness).toEqual("I am hungry AND I need a walk");
              expect(pet.hunger).toEqual("I am hungry AND I need a walk");
            });

            it("gives instruction if pet needs a walk", () => {
              const pet = new Pet("fido");

              pet.fitness = 2;
              pet.hunger = 4;
              pet.checkup();
              expect(pet.fitness).toEqual("I need a walk");
            });
            it("gives instruction if pet is hungry", () => {
              const pet = new Pet("fido");

              pet.fitness = 4;
              pet.hunger = 5;
              pet.checkup();
              expect(pet.hunger).toEqual("I am hungry");
            });
            it("pet is feeling great", () => {
              const pet = new Pet("fido");

              pet.fitness = 4;
              pet.hunger = 4;
              pet.checkup();
              expect(pet.hunger).toEqual("I feel great!");
              expect(pet.fitness).toEqual("I feel great!");
            });
          });
        });
      });
    });
  });
});
