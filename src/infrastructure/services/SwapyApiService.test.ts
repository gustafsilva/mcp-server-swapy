import { People } from "../../domain/models/Swapy.ts";
import { SwapyApiService } from "./SwapyApiService.ts";

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

    // it("should return null from an invalid endpoint", async () => {
    //   const result = await service.makeRequest<any>("/invalid-endpoint");
    //   expect(result).toBeNull();
    // });
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
});