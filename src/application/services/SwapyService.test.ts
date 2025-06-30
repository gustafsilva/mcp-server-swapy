import { SwapyService } from "./SwapyService";
import { SwapyApiService } from "../../infrastructure/services/SwapyApiService";
import {
  People,
  ListResponse,
  Planet,
  RootResponse,
} from "../../domain/models/Swapy";

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

      expect(result).toContain("Info about film in: /films/");
      expect(result).toContain("Info about people in: /people/");
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
        url: "",
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
        url: "",
      };
      const result = service.formatPlanet(planet);
      expect(result).toContain("Name: Tatooine");
      expect(result).toContain("Climate: arid");
    });
  });

  describe("formatPeopleList", () => {
    it("should format people list", () => {
      const list: ListResponse<People> = {
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
            url: "",
          },
        ],
      };
      const result = service.formatPeopleList(list);
      expect(result).toContain("Total People: 1");
      expect(result).toContain("Name: Luke Skywalker");
    });
    it("should return 'No people found' if list is empty", () => {
      const list: ListResponse<People> = {
        count: 0,
        next: null,
        previous: null,
        results: [],
      };
      const result = service.formatPeopleList(list);
      expect(result).toBe("No people found");
    });
  });

  describe("formatPlanetList", () => {
    it("should format planet list", () => {
      const list: ListResponse<Planet> = {
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
            url: "",
          },
        ],
      };
      const result = service.formatPlanetList(list);
      expect(result).toContain("Total Planets: 1");
      expect(result).toContain("Name: Tatooine");
    });
    it("should return 'No planets found' if list is empty", () => {
      const list: ListResponse<Planet> = {
        count: 0,
        next: null,
        previous: null,
        results: [],
      };
      const result = service.formatPlanetList(list);
      expect(result).toBe("No planets found");
    });
  });

  describe("formatVehicle", () => {
    it("should format vehicle", () => {
      const vehicle = {
        name: "Sand Crawler",
        cargo_capacity: "50000",
        consumables: "2 months",
        cost_in_credits: "150000",
        crew: "46",
        length: "36.8",
        max_atmosphering_speed: "30",
        manufacturer: "Corellia Mining Corporation",
        model: "Digger Crawler",
        passengers: "30",
        vehicle_class: "wheeled",
        pilots: [],
        films: [],
        created: "2023-01-01T00:00:00.000Z",
        edited: "2023-01-01T00:00:00.000Z",
        url: "https://swapi.dev/api/vehicles/4/",
      };
      const result = service.formatVehicle(vehicle);
      expect(result).toContain("Name: Sand Crawler");
      expect(result).toContain("Cargo Capacity: 50000 kg");
    });
  });

  describe("formatVehicleList", () => {
    it("should format vehicle list", () => {
      const list = {
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            name: "Sand Crawler",
            cargo_capacity: "50000",
            consumables: "2 months",
            cost_in_credits: "150000",
            crew: "46",
            length: "36.8",
            max_atmosphering_speed: "30",
            manufacturer: "Corellia Mining Corporation",
            model: "Digger Crawler",
            passengers: "30",
            vehicle_class: "wheeled",
            pilots: [],
            films: [],
            created: "2023-01-01T00:00:00.000Z",
            edited: "2023-01-01T00:00:00.000Z",
            url: "https://swapi.dev/api/vehicles/4/",
          },
        ],
      };
      const result = service.formatVehicleList(list);
      expect(result).toContain("Total Vehicles: 1");
      expect(result).toContain("Name: Sand Crawler");
    });
    it("should return 'No vehicles found' if list is empty", () => {
      const list = { count: 0, next: null, previous: null, results: [] };
      const result = service.formatVehicleList(list);
      expect(result).toBe("No vehicles found");
    });
  });

  describe("formatStarship", () => {
    it("should format starship", () => {
      const starship = {
        name: "Millennium Falcon",
        model: "YT-1300 light freighter",
        manufacturer: "Corellian Engineering Corporation",
        cost_in_credits: "100000",
        length: "34.37",
        max_atmosphering_speed: "1050",
        crew: "4",
        passengers: "6",
        cargo_capacity: "100000",
        consumables: "2 months",
        hyperdrive_rating: "0.5",
        MGLT: "75",
        starship_class: "Light freighter",
        pilots: [],
        films: [],
        created: "2023-01-01T00:00:00.000Z",
        edited: "2023-01-01T00:00:00.000Z",
        url: "https://swapi.dev/api/starships/10/",
      };
      const result = service.formatStarship(starship);
      expect(result).toContain("Name: Millennium Falcon");
      expect(result).toContain("Model: YT-1300 light freighter");
    });
  });

  describe("formatStarshipList", () => {
    it("should format starship list", () => {
      const list = {
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            name: "Millennium Falcon",
            model: "YT-1300 light freighter",
            manufacturer: "Corellian Engineering Corporation",
            cost_in_credits: "100000",
            length: "34.37",
            max_atmosphering_speed: "1050",
            crew: "4",
            passengers: "6",
            cargo_capacity: "100000",
            consumables: "2 months",
            hyperdrive_rating: "0.5",
            MGLT: "75",
            starship_class: "Light freighter",
            pilots: [],
            films: [],
            created: "2023-01-01T00:00:00.000Z",
            edited: "2023-01-01T00:00:00.000Z",
            url: "https://swapi.dev/api/starships/10/",
          },
        ],
      };
      const result = service.formatStarshipList(list);
      expect(result).toContain("Total Starships: 1");
      expect(result).toContain("Name: Millennium Falcon");
    });
    it("should return 'No starships found' if list is empty", () => {
      const list = { count: 0, next: null, previous: null, results: [] };
      const result = service.formatStarshipList(list);
      expect(result).toBe("No starships found");
    });
  });

  describe("formatSpecies", () => {
    it("should format species", () => {
      const species = {
        name: "Human",
        classification: "mammal",
        designation: "sentient",
        average_height: "180",
        average_lifespan: "120",
        eye_colors: "brown, blue, green, hazel, grey, amber",
        hair_colors: "blonde, brown, black, red",
        skin_colors: "caucasian, black, asian, hispanic",
        language: "Galactic Basic",
        homeworld: "Earth",
        people: [],
        films: [],
        created: "2023-01-01T00:00:00.000Z",
        edited: "2023-01-01T00:00:00.000Z",
        url: "https://swapi.dev/api/species/1/",
      };
      const result = service.formatSpecies(species);
      expect(result).toContain("Name: Human");
      expect(result).toContain("Classification: mammal");
    });
  });

  describe("formatSpeciesList", () => {
    it("should format species list", () => {
      const list = {
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            name: "Human",
            classification: "mammal",
            designation: "sentient",
            average_height: "180",
            average_lifespan: "120",
            eye_colors: "brown, blue, green, hazel, grey, amber",
            hair_colors: "blonde, brown, black, red",
            skin_colors: "caucasian, black, asian, hispanic",
            language: "Galactic Basic",
            homeworld: "Earth",
            people: [],
            films: [],
            created: "2023-01-01T00:00:00.000Z",
            edited: "2023-01-01T00:00:00.000Z",
            url: "https://swapi.dev/api/species/1/",
          },
        ],
      };
      const result = service.formatSpeciesList(list);
      expect(result).toContain("Total Species: 1");
      expect(result).toContain("Name: Human");
    });
    it("should return 'No species found' if list is empty", () => {
      const list = { count: 0, next: null, previous: null, results: [] };
      const result = service.formatSpeciesList(list);
      expect(result).toBe("No species found");
    });
  });

  describe("formatFilm", () => {
    it("should format film", () => {
      const film = {
        title: "A New Hope",
        episode_id: 4,
        opening_crawl: "It is a period of civil war...",
        director: "George Lucas",
        producer: "Gary Kurtz, Rick McCallum",
        release_date: "1977-05-25",
        characters: [],
        planets: [],
        starships: [],
        vehicles: [],
        species: [],
        created: "2023-01-01T00:00:00.000Z",
        edited: "2023-01-01T00:00:00.000Z",
        url: "https://swapi.dev/api/films/1/",
      };
      const result = service.formatFilm(film);
      expect(result).toContain("Title: A New Hope");
      expect(result).toContain("Director: George Lucas");
    });
  });

  describe("formatFilmList", () => {
    it("should format film list", () => {
      const list = {
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            title: "A New Hope",
            episode_id: 4,
            opening_crawl: "It is a period of civil war...",
            director: "George Lucas",
            producer: "Gary Kurtz, Rick McCallum",
            release_date: "1977-05-25",
            characters: [],
            planets: [],
            starships: [],
            vehicles: [],
            species: [],
            created: "2023-01-01T00:00:00.000Z",
            edited: "2023-01-01T00:00:00.000Z",
            url: "https://swapi.dev/api/films/1/",
          },
        ],
      };
      const result = service.formatFilmList(list);
      expect(result).toContain("Total Films: 1");
      expect(result).toContain("Title: A New Hope");
    });
    it("should return 'No films found' if list is empty", () => {
      const list = { count: 0, next: null, previous: null, results: [] };
      const result = service.formatFilmList(list);
      expect(result).toBe("No films found");
    });
  });
});

describe("SwapyService async methods", () => {
  let apiService: SwapyApiService;
  let service: SwapyService;

  beforeEach(() => {
    apiService = new SwapyApiService();
    service = new SwapyService(apiService);
  });

  it("getRoot should return formatted root", async () => {
    const root = {
      films: "/films/",
      people: "/people/",
      planets: "/planets/",
      species: "/species/",
      starships: "/starships/",
      vehicles: "/vehicles/",
    };
    jest.spyOn(apiService, "getRoot").mockResolvedValue(root);
    const result = await service.getRoot();
    expect(result).toContain("Info about film in: /films/");
  });
  it("getRoot should return error message if fails", async () => {
    jest.spyOn(apiService, "getRoot").mockResolvedValue(null);
    const result = await service.getRoot();
    expect(result).toBe("Failed to retrieve root data from Swapy API");
  });

  it("getPeople should return formatted person", async () => {
    const person = {
      name: "Luke",
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
      created: new Date().toISOString(),
      edited: new Date().toISOString(),
      url: "",
    };
    jest.spyOn(apiService, "getPeople").mockResolvedValue(person);
    const result = await service.getPeople(1);
    expect(result).toContain("Name: Luke");
  });
  it("getPeople should return error if not found", async () => {
    jest.spyOn(apiService, "getPeople").mockResolvedValue(null);
    const result = await service.getPeople(1);
    expect(result).toBe("Failed to retrieve person with ID 1");
  });

  it("getPlanet should return formatted planet", async () => {
    const planet = {
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
      created: new Date().toISOString(),
      edited: new Date().toISOString(),
      url: "",
    };
    jest.spyOn(apiService, "getPlanet").mockResolvedValue(planet);
    const result = await service.getPlanet(1);
    expect(result).toContain("Name: Tatooine");
  });
  it("getPlanet should return error if not found", async () => {
    jest.spyOn(apiService, "getPlanet").mockResolvedValue(null);
    const result = await service.getPlanet(1);
    expect(result).toBe("Failed to retrieve planet with ID 1");
  });

  it("getVehicle should return formatted vehicle", async () => {
    const vehicle = {
      name: "Sand Crawler",
      cargo_capacity: "50000",
      consumables: "2 months",
      cost_in_credits: "150000",
      crew: "46",
      length: "36.8",
      max_atmosphering_speed: "30",
      manufacturer: "Corellia Mining Corporation",
      model: "Digger Crawler",
      passengers: "30",
      vehicle_class: "wheeled",
      pilots: [],
      films: [],
      created: new Date().toISOString(),
      edited: new Date().toISOString(),
      url: "",
    };
    jest.spyOn(apiService, "getVehicle").mockResolvedValue(vehicle);
    const result = await service.getVehicle(1);
    expect(result).toContain("Name: Sand Crawler");
  });
  it("getVehicle should return error if not found", async () => {
    jest.spyOn(apiService, "getVehicle").mockResolvedValue(null);
    const result = await service.getVehicle(1);
    expect(result).toBe("Failed to retrieve vehicle with ID 1");
  });

  it("getStarship should return formatted starship", async () => {
    const starship = {
      name: "Falcon",
      model: "YT-1300",
      manufacturer: "Corellian",
      cost_in_credits: "100000",
      length: "34.37",
      max_atmosphering_speed: "1050",
      crew: "4",
      passengers: "6",
      cargo_capacity: "100000",
      consumables: "2 months",
      hyperdrive_rating: "0.5",
      MGLT: "75",
      starship_class: "Light freighter",
      pilots: [],
      films: [],
      created: new Date().toISOString(),
      edited: new Date().toISOString(),
      url: "",
    };
    jest.spyOn(apiService, "getStarship").mockResolvedValue(starship);
    const result = await service.getStarship(1);
    expect(result).toContain("Name: Falcon");
  });
  it("getStarship should return error if not found", async () => {
    jest.spyOn(apiService, "getStarship").mockResolvedValue(null);
    const result = await service.getStarship(1);
    expect(result).toBe("Failed to retrieve starship with ID 1");
  });

  it("getSpecies should return formatted species", async () => {
    const species = {
      name: "Human",
      classification: "mammal",
      designation: "sentient",
      average_height: "180",
      average_lifespan: "120",
      eye_colors: "brown",
      hair_colors: "blonde",
      skin_colors: "caucasian",
      language: "Galactic Basic",
      homeworld: "Earth",
      people: [],
      films: [],
      created: new Date().toISOString(),
      edited: new Date().toISOString(),
      url: "",
    };
    jest.spyOn(apiService, "getSpecies").mockResolvedValue(species);
    const result = await service.getSpecies(1);
    expect(result).toContain("Name: Human");
  });
  it("getSpecies should return error if not found", async () => {
    jest.spyOn(apiService, "getSpecies").mockResolvedValue(null);
    const result = await service.getSpecies(1);
    expect(result).toBe("Failed to retrieve species with ID 1");
  });

  it("getFilm should return formatted film", async () => {
    const film = {
      title: "A New Hope",
      episode_id: 4,
      opening_crawl: "It is a period of civil war...",
      director: "George Lucas",
      producer: "Gary Kurtz",
      release_date: "1977-05-25",
      characters: [],
      planets: [],
      starships: [],
      vehicles: [],
      species: [],
      created: new Date().toISOString(),
      edited: new Date().toISOString(),
      url: "",
    };
    jest.spyOn(apiService, "getFilm").mockResolvedValue(film);
    const result = await service.getFilm(1);
    expect(result).toContain("Title: A New Hope");
  });
  it("getFilm should return error if not found", async () => {
    jest.spyOn(apiService, "getFilm").mockResolvedValue(null);
    const result = await service.getFilm(1);
    expect(result).toBe("Failed to retrieve film with ID 1");
  });

  it("getPeopleList should return formatted list", async () => {
    const list = {
      count: 1,
      next: null,
      previous: null,
      results: [
        {
          name: "Luke",
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
          created: new Date().toISOString(),
          edited: new Date().toISOString(),
          url: "",
        },
      ],
    };
    jest.spyOn(apiService, "getPeopleList").mockResolvedValue(list);
    const result = await service.getPeopleList(1);
    expect(result).toContain("Total People: 1");
  });
  it("getPeopleList should return error if fails", async () => {
    jest.spyOn(apiService, "getPeopleList").mockResolvedValue(null);
    const result = await service.getPeopleList(1);
    expect(result).toBe("Failed to retrieve people list for page 1");
  });
  it("getPeopleList should return message if empty list", async () => {
    jest
      .spyOn(apiService, "getPeopleList")
      .mockResolvedValue({ count: 0, next: null, previous: null, results: [] });
    const result = await service.getPeopleList(1);
    expect(result).toBe("No people found on page 1");
  });

  it("getPlanetsList should return planet names", async () => {
    jest.spyOn(apiService, "getPlanetsList").mockResolvedValue({
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
          created: new Date().toISOString(),
          edited: new Date().toISOString(),
          url: "",
        },
      ],
    });
    const result = await service.getPlanetsList(1);
    expect(result).toContain("Tatooine");
  });
  it("getPlanetsList should return error if fails", async () => {
    jest.spyOn(apiService, "getPlanetsList").mockResolvedValue(null);
    const result = await service.getPlanetsList(1);
    expect(result).toBe("Failed to retrieve planets list for page 1");
  });
  it("getPlanetsList should return message if empty list", async () => {
    jest
      .spyOn(apiService, "getPlanetsList")
      .mockResolvedValue({ count: 0, next: null, previous: null, results: [] });
    const result = await service.getPlanetsList(1);
    expect(result).toBe("No planets found on page 1");
  });

  it("getVehiclesList should return formatted list", async () => {
    jest
      .spyOn(apiService, "getVehiclesList")
      .mockResolvedValue({
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            name: "Sand Crawler",
            cargo_capacity: "50000",
            consumables: "2 months",
            cost_in_credits: "150000",
            crew: "46",
            length: "36.8",
            max_atmosphering_speed: "30",
            manufacturer: "Corellia Mining Corporation",
            model: "Digger Crawler",
            passengers: "30",
            vehicle_class: "wheeled",
            pilots: [],
            films: [],
            created: new Date().toISOString(),
            edited: new Date().toISOString(),
            url: "",
          },
        ],
      });
    const result = await service.getVehiclesList(1);
    expect(result).toContain("Total Vehicles: 1");
  });
  it("getVehiclesList should return error if fails", async () => {
    jest.spyOn(apiService, "getVehiclesList").mockResolvedValue(null);
    const result = await service.getVehiclesList(1);
    expect(result).toBe("Failed to retrieve vehicles list for page 1");
  });
  it("getVehiclesList should return message if empty list", async () => {
    jest
      .spyOn(apiService, "getVehiclesList")
      .mockResolvedValue({ count: 0, next: null, previous: null, results: [] });
    const result = await service.getVehiclesList(1);
    expect(result).toBe("No vehicles found on page 1");
  });

  it("getStarshipsList should return formatted list", async () => {
    jest
      .spyOn(apiService, "getStarshipsList")
      .mockResolvedValue({
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            name: "Falcon",
            model: "YT-1300",
            manufacturer: "Corellian",
            cost_in_credits: "100000",
            length: "34.37",
            max_atmosphering_speed: "1050",
            crew: "4",
            passengers: "6",
            cargo_capacity: "100000",
            consumables: "2 months",
            hyperdrive_rating: "0.5",
            MGLT: "75",
            starship_class: "Light freighter",
            pilots: [],
            films: [],
            created: new Date().toISOString(),
            edited: new Date().toISOString(),
            url: "",
          },
        ],
      });
    const result = await service.getStarshipsList(1);
    expect(result).toContain("Total Starships: 1");
  });
  it("getStarshipsList should return error if fails", async () => {
    jest.spyOn(apiService, "getStarshipsList").mockResolvedValue(null);
    const result = await service.getStarshipsList(1);
    expect(result).toBe("Failed to retrieve starships list for page 1");
  });
  it("getStarshipsList should return message if empty list", async () => {
    jest
      .spyOn(apiService, "getStarshipsList")
      .mockResolvedValue({ count: 0, next: null, previous: null, results: [] });
    const result = await service.getStarshipsList(1);
    expect(result).toBe("No starships found on page 1");
  });

  it("getSpeciesList should return formatted list", async () => {
    jest
      .spyOn(apiService, "getSpeciesList")
      .mockResolvedValue({
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            name: "Human",
            classification: "mammal",
            designation: "sentient",
            average_height: "180",
            average_lifespan: "120",
            eye_colors: "brown",
            hair_colors: "blonde",
            skin_colors: "caucasian",
            language: "Galactic Basic",
            homeworld: "Earth",
            people: [],
            films: [],
            created: new Date().toISOString(),
            edited: new Date().toISOString(),
            url: "",
          },
        ],
      });
    const result = await service.getSpeciesList(1);
    expect(result).toContain("Total Species: 1");
  });
  it("getSpeciesList should return error if fails", async () => {
    jest.spyOn(apiService, "getSpeciesList").mockResolvedValue(null);
    const result = await service.getSpeciesList(1);
    expect(result).toBe("Failed to retrieve species list for page 1");
  });
  it("getSpeciesList should return message if empty list", async () => {
    jest
      .spyOn(apiService, "getSpeciesList")
      .mockResolvedValue({ count: 0, next: null, previous: null, results: [] });
    const result = await service.getSpeciesList(1);
    expect(result).toBe("No species found on page 1");
  });

  it("getFilmsList should return formatted list", async () => {
    jest
      .spyOn(apiService, "getFilmsList")
      .mockResolvedValue({
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            title: "A New Hope",
            episode_id: 4,
            opening_crawl: "It is a period of civil war...",
            director: "George Lucas",
            producer: "Gary Kurtz",
            release_date: "1977-05-25",
            characters: [],
            planets: [],
            starships: [],
            vehicles: [],
            species: [],
            created: new Date().toISOString(),
            edited: new Date().toISOString(),
            url: "",
          },
        ],
      });
    const result = await service.getFilmsList(1);
    expect(result).toContain("Total Films: 1");
  });
  it("getFilmsList should return error if fails", async () => {
    jest.spyOn(apiService, "getFilmsList").mockResolvedValue(null);
    const result = await service.getFilmsList(1);
    expect(result).toBe("Failed to retrieve films list for page 1");
  });
  it("getFilmsList should return message if empty list", async () => {
    jest
      .spyOn(apiService, "getFilmsList")
      .mockResolvedValue({ count: 0, next: null, previous: null, results: [] });
    const result = await service.getFilmsList(1);
    expect(result).toBe("No films found on page 1");
  });

  it("searchPeopleList should return formatted list", async () => {
    jest
      .spyOn(apiService, "searchPeopleList")
      .mockResolvedValue({
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            name: "Luke",
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
            created: new Date().toISOString(),
            edited: new Date().toISOString(),
            url: "",
          },
        ],
      });
    const result = await service.searchPeopleList("Luke");
    expect(result).toContain("Total People: 1");
  });
  it("searchPeopleList should return error if fails", async () => {
    jest.spyOn(apiService, "searchPeopleList").mockResolvedValue(null);
    const result = await service.searchPeopleList("Luke");
    expect(result).toBe('Failed to retrieve people list for search "Luke"');
  });
  it("searchPeopleList should return message if empty list", async () => {
    jest
      .spyOn(apiService, "searchPeopleList")
      .mockResolvedValue({ count: 0, next: null, previous: null, results: [] });
    const result = await service.searchPeopleList("Luke");
    expect(result).toBe('No people found for search "Luke"');
  });

  it("searchPlanetsList should return formatted list", async () => {
    jest
      .spyOn(apiService, "searchPlanetsList")
      .mockResolvedValue({
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
            created: new Date().toISOString(),
            edited: new Date().toISOString(),
            url: "",
          },
        ],
      });
    const result = await service.searchPlanetsList("Tatooine");
    expect(result).toContain("Total Planets: 1");
  });
  it("searchPlanetsList should return error if fails", async () => {
    jest.spyOn(apiService, "searchPlanetsList").mockResolvedValue(null);
    const result = await service.searchPlanetsList("Tatooine");
    expect(result).toBe(
      'Failed to retrieve planets list for search "Tatooine"'
    );
  });
  it("searchPlanetsList should return message if empty list", async () => {
    jest
      .spyOn(apiService, "searchPlanetsList")
      .mockResolvedValue({ count: 0, next: null, previous: null, results: [] });
    const result = await service.searchPlanetsList("Tatooine");
    expect(result).toBe('No planets found for search "Tatooine"');
  });

  it("searchVehiclesList should return formatted list", async () => {
    jest
      .spyOn(apiService, "searchVehiclesList")
      .mockResolvedValue({
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            name: "Sand Crawler",
            cargo_capacity: "50000",
            consumables: "2 months",
            cost_in_credits: "150000",
            crew: "46",
            length: "36.8",
            max_atmosphering_speed: "30",
            manufacturer: "Corellia Mining Corporation",
            model: "Digger Crawler",
            passengers: "30",
            vehicle_class: "wheeled",
            pilots: [],
            films: [],
            created: new Date().toISOString(),
            edited: new Date().toISOString(),
            url: "",
          },
        ],
      });
    const result = await service.searchVehiclesList("Sand");
    expect(result).toContain("Total Vehicles: 1");
  });
  it("searchVehiclesList should return error if fails", async () => {
    jest.spyOn(apiService, "searchVehiclesList").mockResolvedValue(null);
    const result = await service.searchVehiclesList("Sand");
    expect(result).toBe('Failed to retrieve vehicles list for search "Sand"');
  });
  it("searchVehiclesList should return message if empty list", async () => {
    jest
      .spyOn(apiService, "searchVehiclesList")
      .mockResolvedValue({ count: 0, next: null, previous: null, results: [] });
    const result = await service.searchVehiclesList("Sand");
    expect(result).toBe('No vehicles found for search "Sand"');
  });

  it("searchStarshipsList should return formatted list", async () => {
    jest
      .spyOn(apiService, "searchStarshipsList")
      .mockResolvedValue({
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            name: "Falcon",
            model: "YT-1300",
            manufacturer: "Corellian",
            cost_in_credits: "100000",
            length: "34.37",
            max_atmosphering_speed: "1050",
            crew: "4",
            passengers: "6",
            cargo_capacity: "100000",
            consumables: "2 months",
            hyperdrive_rating: "0.5",
            MGLT: "75",
            starship_class: "Light freighter",
            pilots: [],
            films: [],
            created: new Date().toISOString(),
            edited: new Date().toISOString(),
            url: "",
          },
        ],
      });
    const result = await service.searchStarshipsList("Falcon");
    expect(result).toContain("Total Starships: 1");
  });
  it("searchStarshipsList should return error if fails", async () => {
    jest.spyOn(apiService, "searchStarshipsList").mockResolvedValue(null);
    const result = await service.searchStarshipsList("Falcon");
    expect(result).toBe(
      'Failed to retrieve starships list for search "Falcon"'
    );
  });
  it("searchStarshipsList should return message if empty list", async () => {
    jest
      .spyOn(apiService, "searchStarshipsList")
      .mockResolvedValue({ count: 0, next: null, previous: null, results: [] });
    const result = await service.searchStarshipsList("Falcon");
    expect(result).toBe('No starships found for search "Falcon"');
  });

  it("searchSpeciesList should return formatted list", async () => {
    jest
      .spyOn(apiService, "searchSpeciesList")
      .mockResolvedValue({
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            name: "Human",
            classification: "mammal",
            designation: "sentient",
            average_height: "180",
            average_lifespan: "120",
            eye_colors: "brown",
            hair_colors: "blonde",
            skin_colors: "caucasian",
            language: "Galactic Basic",
            homeworld: "Earth",
            people: [],
            films: [],
            created: new Date().toISOString(),
            edited: new Date().toISOString(),
            url: "",
          },
        ],
      });
    const result = await service.searchSpeciesList("Human");
    expect(result).toContain("Total Species: 1");
  });
  it("searchSpeciesList should return error if fails", async () => {
    jest.spyOn(apiService, "searchSpeciesList").mockResolvedValue(null);
    const result = await service.searchSpeciesList("Human");
    expect(result).toBe('Failed to retrieve species list for search "Human"');
  });
  it("searchSpeciesList should return message if empty list", async () => {
    jest
      .spyOn(apiService, "searchSpeciesList")
      .mockResolvedValue({ count: 0, next: null, previous: null, results: [] });
    const result = await service.searchSpeciesList("Human");
    expect(result).toBe('No species found for search "Human"');
  });

  it("searchFilmsList should return formatted list", async () => {
    jest
      .spyOn(apiService, "searchFilmsList")
      .mockResolvedValue({
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            title: "A New Hope",
            episode_id: 4,
            opening_crawl: "It is a period of civil war...",
            director: "George Lucas",
            producer: "Gary Kurtz",
            release_date: "1977-05-25",
            characters: [],
            planets: [],
            starships: [],
            vehicles: [],
            species: [],
            created: new Date().toISOString(),
            edited: new Date().toISOString(),
            url: "",
          },
        ],
      });
    const result = await service.searchFilmsList("Hope");
    expect(result).toContain("Total Films: 1");
  });
  it("searchFilmsList should return error if fails", async () => {
    jest.spyOn(apiService, "searchFilmsList").mockResolvedValue(null);
    const result = await service.searchFilmsList("Hope");
    expect(result).toBe('Failed to retrieve films list for search "Hope"');
  });
  it("searchFilmsList should return message if empty list", async () => {
    jest
      .spyOn(apiService, "searchFilmsList")
      .mockResolvedValue({ count: 0, next: null, previous: null, results: [] });
    const result = await service.searchFilmsList("Hope");
    expect(result).toBe('No films found for search "Hope"');
  });
});
