import { People } from "../../domain/models/Swapy";
import { SwapyApiService } from "./SwapyApiService";

describe("SwapyApiService (real API)", () => {
  let service: SwapyApiService;

  beforeEach(() => {
    service = new SwapyApiService();
  });

  describe("makeRequest", () => {
    it("should return data from a valid endpoint", async () => {
      const result = await service.makeRequest<People>("/people/1");
      expect(result).toBeDefined();
      expect(result).toHaveProperty("name");
    });
  });

  describe("getRoot", () => {
    it("should return root data from API", async () => {
      const result = await service.getRoot();
      expect(result).toBeDefined();
      expect(result).toHaveProperty("people");
      expect(result).toHaveProperty("planets");
    });
  });

  describe("getPeopleList", () => {
    it("should return a list of people", async () => {
      const result = await service.getPeopleList(1);
      expect(result).toBeDefined();
      expect(result).toHaveProperty("results");
      expect(Array.isArray(result!.results)).toBe(true);
    });
  });

  describe("getPeople", () => {
    it("should return a person by id", async () => {
      const result = await service.getPeople(1);
      expect(result).toBeDefined();
      expect(result).toHaveProperty("name");
    });
  });

  describe("getPlanetsList", () => {
    it("should return a list of planets", async () => {
      const result = await service.getPlanetsList(1);
      expect(result).toBeDefined();
      expect(result).toHaveProperty("results");
      expect(Array.isArray(result!.results)).toBe(true);
    });
  });

  describe("getPlanet", () => {
    it("should return a planet by id", async () => {
      const result = await service.getPlanet(1);
      expect(result).toBeDefined();
      expect(result).toHaveProperty("name");
    });
  });

  describe("searchPeopleList", () => {
    it("should return a list of people matching the search", async () => {
      const result = await service.searchPeopleList("Luke");
      expect(result).toBeDefined();
      expect(result).toHaveProperty("results");
      expect(Array.isArray(result!.results)).toBe(true);
    });
  });

  describe("searchPlanetsList", () => {
    it("should return a list of planets matching the search", async () => {
      const result = await service.searchPlanetsList("Tatooine");
      expect(result).toBeDefined();
      expect(result).toHaveProperty("results");
      expect(Array.isArray(result!.results)).toBe(true);
    });
  });

  describe("searchVehiclesList", () => {
    it("should return a list of vehicles matching the search", async () => {
      const result = await service.searchVehiclesList("Speeder");
      expect(result).toBeDefined();
      expect(result).toHaveProperty("results");
      expect(Array.isArray(result!.results)).toBe(true);
    });
  });

  describe("getVehiclesList", () => {
    it("should return a list of vehicles", async () => {
      const result = await service.getVehiclesList(1);
      expect(result).toBeDefined();
      expect(result).toHaveProperty("results");
      expect(Array.isArray(result!.results)).toBe(true);
    });
  });

  describe("getVehicle", () => {
    it("should return a vehicle by id", async () => {
      const result = await service.getVehicle(4); // id 4: Sand Crawler
      expect(result).toBeDefined();
      expect(result).toHaveProperty("name");
    });
  });

  describe("searchStarshipsList", () => {
    it("should return a list of starships matching the search", async () => {
      const result = await service.searchStarshipsList("Falcon");
      expect(result).toBeDefined();
      expect(result).toHaveProperty("results");
      expect(Array.isArray(result!.results)).toBe(true);
    });
  });

  describe("getStarshipsList", () => {
    it("should return a list of starships", async () => {
      const result = await service.getStarshipsList(1);
      expect(result).toBeDefined();
      expect(result).toHaveProperty("results");
      expect(Array.isArray(result!.results)).toBe(true);
    });
  });

  describe("getStarship", () => {
    it("should return a starship by id", async () => {
      const result = await service.getStarship(9); // id 9: Death Star
      expect(result).toBeDefined();
      expect(result).toHaveProperty("name");
    });
  });

  describe("searchSpeciesList", () => {
    it("should return a list of species matching the search", async () => {
      const result = await service.searchSpeciesList("Human");
      expect(result).toBeDefined();
      expect(result).toHaveProperty("results");
      expect(Array.isArray(result!.results)).toBe(true);
    });
  });

  describe("getSpeciesList", () => {
    it("should return a list of species", async () => {
      const result = await service.getSpeciesList(1);
      expect(result).toBeDefined();
      expect(result).toHaveProperty("results");
      expect(Array.isArray(result!.results)).toBe(true);
    });
  });

  describe("getSpecies", () => {
    it("should return a species by id", async () => {
      const result = await service.getSpecies(1); // id 1: Human
      expect(result).toBeDefined();
      expect(result).toHaveProperty("name");
    });
  });

  describe("searchFilmsList", () => {
    it("should return a list of films matching the search", async () => {
      const result = await service.searchFilmsList("Hope");
      expect(result).toBeDefined();
      expect(result).toHaveProperty("results");
      expect(Array.isArray(result!.results)).toBe(true);
    });
  });

  describe("getFilmsList", () => {
    it("should return a list of films", async () => {
      const result = await service.getFilmsList(1);
      expect(result).toBeDefined();
      expect(result).toHaveProperty("results");
      expect(Array.isArray(result!.results)).toBe(true);
    });
  });

  describe("getFilm", () => {
    it("should return a film by id", async () => {
      const result = await service.getFilm(1); // id 1: A New Hope
      expect(result).toBeDefined();
      expect(result).toHaveProperty("title");
    });
  });
});
