import {
  People,
  PeopleListResponse,
  Planet,
  PlanetListResponse,
  RootResponse,
} from "../../domain/models/Swapy.js";
import { SwapyApiService } from "../../infrastructure/services/SwapyApiService.js";

export class SwapyService {
  constructor(private apiService: SwapyApiService) {}

  formatRoot(root: RootResponse) {
    return [
      `Films: ${root.films}`,
      `People: ${root.people}`,
      `Planets: ${root.planets}`,
      `Species: ${root.species}`,
      `Starships: ${root.starships}`,
      `Vehicles: ${root.vehicles}`,
      "---",
    ].join("\n");
  }

  formatPeople(person: People): string {
    return [
      `Name: ${person.name}`,
      `Height: ${person.height} cm`,
      `Mass: ${person.mass} kg`,
      `Hair Color: ${person.hair_color}`,
      `Skin Color: ${person.skin_color}`,
      `Eye Color: ${person.eye_color}`,
      `Birth Year: ${person.birth_year}`,
      `Gender: ${person.gender}`,
    ].join("\n");
  }

  formatPlanet(planet: Planet): string {
    return [
      `Name: ${planet.name}`,
      `Rotation Period: ${planet.rotation_period} hours`,
      `Orbital Period: ${planet.orbital_period} days`,
      `Diameter: ${planet.diameter} km`,
      `Climate: ${planet.climate}`,
      `Gravity: ${planet.gravity}`,
      `Terrain: ${planet.terrain}`,
      `Surface Water: ${planet.surface_water}%`,
      `Population: ${planet.population}`,
    ].join("\n");
  }

  formatPeopleList(list: PeopleListResponse): string {
    if (!list || list.results.length === 0) {
      return "No people found";
    }
    return [
      `Total People: ${list.count}`,
      `Page: ${list.next ? "Next page available" : "Last page"}`,
      `Previous: ${
        list.previous ? "Previous page available" : "No previous page"
      }`,
      "---",
      ...list.results.map((person) => this.formatPeople(person)),
    ].join("\n");
  }

  formatPlanetList(list: PlanetListResponse): string {
    if (!list || list.results.length === 0) {
      return "No planets found";
    }
    return [
      `Total Planets: ${list.count}`,
      `Page: ${list.next ? "Next page available" : "Last page"}`,
      `Previous: ${
        list.previous ? "Previous page available" : "No previous page"
      }`,
      "---",
      ...list.results.map((planet) => this.formatPlanet(planet)),
    ].join("\n");
  }

  async getRoot(): Promise<string> {
    const root = await this.apiService.getRoot();
    if (!root) {
      return "Failed to retrieve root data from Swapy API";
    }
    return this.formatRoot(root);
  }

  async getPeople(id: number): Promise<string> {
    const person = await this.apiService.getPeople(id);
    if (!person) {
      return `Failed to retrieve person with ID ${id}`;
    }
    return this.formatPeople(person);
  }

  async getPlanet(id: number): Promise<string> {
    const planet = await this.apiService.getPlanet(id);
    if (!planet) {
      return `Failed to retrieve planet with ID ${id}`;
    }
    return this.formatPlanet(planet);
  }

  async getPeopleList(page: number = 1): Promise<string> {
    const peopleList = await this.apiService.getPeopleList(page);
    if (!peopleList) {
      return `Failed to retrieve people list for page ${page}`;
    }
    if (peopleList.results.length === 0) {
      return `No people found on page ${page}`;
    }
    return this.formatPeopleList(peopleList);
  }

  async getPlanetsList(page: number = 1): Promise<string> {
    const planetList = await this.apiService.getPlanetsList(page);
    if (!planetList) {
      return `Failed to retrieve planets list for page ${page}`;
    }
    if (planetList.results.length === 0) {
      return `No planets found on page ${page}`;
    }
    return planetList.results.map((planet) => planet.name).join(", ");
  }
}
