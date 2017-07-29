import Individual, { getDistance } from './individual'; 

const mockMathRandom = jest.fn(() => 0.5);

describe('An individual route', () => {
  const cities = [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }];
  const reversed = [{ x: 2, y: 2 }, { x: 1, y: 1 }, { x: 0, y: 0 }];

  it('initializes properly', () => {
    const empty = new Individual();
    expect(empty).toBeInstanceOf(Individual);
    expect(empty.dna).toEqual([]);

    const filled = new Individual(cities);
    expect(filled).toBeInstanceOf(Individual);
    expect(filled.dna).toEqual(cities);
  })

  describe('mutates properly', () => {
    const testRoute1 = new Individual(cities);
    const testRoute2 = new Individual(reversed);


    it('returns a completely new individual', () => {
      const mutated1 = testRoute1.mutate(0); // no swaps
      expect(mutated1).not.toBe(testRoute1);
    });

    it('mutates by swapping cities in the route', () => {

    });

    it('only mutates if mutation probability is above threshold', () => {

    });
  });

  describe('calculates fitness properly', () => {
    it('calculates distance to visit all cities and return to origin', () => {

    });

    it('high distances have low fitness scores and vice-versa', () => {

    });
  })
});

// TSP requires all chromosomes to share same unique set of routes
// therefore we have two options:
//   1. only SWAP locations to mutate, always producing valid routes
//   2. insert/delete random locations, cull invalid routes post-hoc (nahhh)

Individual.prototype.mutate = function (probMutate) {
  const mutatedRoute = this.dna.slice();
  for (let index = 0; index < mutatedRoute.length; index++) {
    if (Math.random() < probMutate) {

      const randInd = Math.floor(Math.random() * mutatedRoute.length);
      // if (randInd === index) return this.mutate(probMutate);

      const tempLoc = mutatedRoute[randInd];
      mutatedRoute[randInd] = mutatedRoute[index];
      mutatedRoute[index] = tempLoc;
    }
  }

  return new Individual(mutatedRoute);
};