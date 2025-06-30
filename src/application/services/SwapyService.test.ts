import { SwapyService } from "./SwapyService";
import { SwapyApiService } from "../../infrastructure/services/SwapyApiService";
import { People, PeopleListResponse, Planet, PlanetListResponse, RootResponse } from "../../domain/models/Swapy";

describe("SwapyService", () => {
  let apiService: SwapyApiService;
  let service: SwapyService;

  beforeEach(() => {
    apiService = new SwapyApiService();
    service = new SwapyService(apiService);
  });

  describe("formatRoot", () => {
    it("should format root response", () => {
      const root: RootResponse = {
        films: "/films/",
        people: "/people/",
        planets: "/planets/",
        species: "/species/",
        starships: "/starships/",
        vehicles: "/vehicles/",
      };
      const result = service.formatRoot(root);

      expect(result).toContain("Films: /films/");
      expect(result).toContain("People: /people/");
    });
  });

  describe("formatPeople", () => {
    it("should format person", () => {
      const person: People = {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        homeworld: "Tatooine",
        films: [],
        species: [],
        vehicles: [],
        starships: [],
        created: "",
        edited: "",
        url: ""
      };
      const result = service.formatPeople(person);
      expect(result).toContain("Name: Luke Skywalker");
      expect(result).toContain("Height: 172 cm");
    });
  });

  describe("formatPlanet", () => {
    it("should format planet", () => {
      const planet: Planet = {
        name: "Tatooine",
        rotation_period: "23",
        orbital_period: "304",
        diameter: "10465",
        climate: "arid",
        gravity: "1 standard",
        terrain: "desert",
        surface_water: "1",
        population: "200000",
        residents: [],
        films: [],
        created: "",
        edited: "",
        url: ""
      };
      const result = service.formatPlanet(planet);
      expect(result).toContain("Name: Tatooine");
      expect(result).toContain("Climate: arid");
    });
  });

  describe("formatPeopleList", () => {
    it("should format people list", () => {
      const list: PeopleListResponse = {
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            name: "Luke Skywalker",
            height: "172",
            mass: "77",
            hair_color: "blond",
            skin_color: "fair",
            eye_color: "blue",
            birth_year: "19BBY",
            gender: "male",
            homeworld: "Tatooine",
            films: [],
            species: [],
            vehicles: [],
            starships: [],
            created: "",
            edited: "",
            url: ""
          },
        ],
      };
      const result = service.formatPeopleList(list);
      expect(result).toContain("Total People: 1");
      expect(result).toContain("Name: Luke Skywalker");
    });
    it("should return 'No people found' if list is empty", () => {
      const list: PeopleListResponse = { count: 0, next: null, previous: null, results: [] };
      const result = service.formatPeopleList(list);
      expect(result).toBe("No people found");
    });
  });

  describe("formatPlanetList", () => {
    it("should format planet list", () => {
      const list: PlanetListResponse = {
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            name: "Tatooine",
            rotation_period: "23",
            orbital_period: "304",
            diameter: "10465",
            climate: "arid",
            gravity: "1 standard",
            terrain: "desert",
            surface_water: "1",
            population: "200000",
            residents: [],
            films: [],
            created: "",
            edited: "",
            url: ""
          },
        ],
      };
      const result = service.formatPlanetList(list);
      expect(result).toContain("Total Planets: 1");
      expect(result).toContain("Name: Tatooine");
    });
    it("should return 'No planets found' if list is empty", () => {
      const list: PlanetListResponse = { count: 0, next: null, previous: null, results: [] };
      const result = service.formatPlanetList(list);
      expect(result).toBe("No planets found");
    });
  });
});
