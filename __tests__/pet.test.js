const Pet = require("../src/pet.js");
describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });
  describe("constructor", () => {
    it("sets the name property", () => {
      const pet = new Pet("Fido");

      expect(pet.name).toEqual("Fido");
    });
    describe("constructor", () => {
      it("has a initial age of 0", () => {
        const pet = new Pet("Fido");

        expect(pet.age).toEqual(0);
      });
    });
    describe("growUp", () => {
      it("increments the age by 1", () => {
        const pet = new Pet("Fido");
        pet.growUp();

        expect(pet.age).toEqual(1);
      });
      describe("constructor", () => {
        it("has a initial hunger of 0", () => {
          const pet = new Pet("Fido");

          expect(pet.hunger).toEqual(0);
        });
        describe("increaseHunger", () => {
          it("increase hunger by five as they grow up", () => {
            const pet = new Pet("Fido");
            pet.growUp();

            expect(pet.hunger).toEqual(5);
          });
          describe("constructor", () => {
            it("has a initial fitness of 10", () => {
              const pet = new Pet("Fido");

              expect(pet.fitness).toEqual(10);
            });
            describe("decrease fitness", () => {
              it("decrease fitness by 10 as pet grows up", () => {
                const pet = new Pet("Fido");
                pet.growUp();

                expect(pet.fitness).toEqual(7);
              });
            });
          });
        });
      });
    });
  });
});
