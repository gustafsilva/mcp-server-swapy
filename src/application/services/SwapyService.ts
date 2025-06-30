import {
  Film,
  ListResponse,
  People,
  Planet,
  RootResponse,
  Species,
  Starship,
  Vehicle,
} from "../../domain/models/Swapy.js";
import { SwapyApiService } from "../../infrastructure/services/SwapyApiService.js";

export class SwapyService {
  constructor(private apiService: SwapyApiService) {}

  formatRoot(root: RootResponse) {
    return [
      `Info about film in: ${root.films}`,
      `Info about people in: ${root.people}`,
      `Info about planets in: ${root.planets}`,
      `Info about species in: ${root.species}`,
      `Info about starships in: ${root.starships}`,
      `Info about vehicles in: ${root.vehicles}`,
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
      `Homeworld: ${person.homeworld}`,
      `Films: ${person.films.join(", ")}`,
      `Species: ${person.species.join(", ")}`,
      `Vehicles: ${person.vehicles.join(", ")}`,
      `Starships: ${person.starships.join(", ")}`,
      `Created: ${new Date(person.created).toLocaleString()}`,
      `Edited: ${new Date(person.edited).toLocaleString()}`,
      `URL: ${person.url}`,
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
      `Residents: ${planet.residents.join(", ")}`,
      `Films: ${planet.films.join(", ")}`,
      `Created: ${new Date(planet.created).toLocaleString()}`,
      `Edited: ${new Date(planet.edited).toLocaleString()}`,
      `URL: ${planet.url}`,
    ].join("\n");
  }

  formatVehicle(vehicle: Vehicle): string {
    return [
      `Name: ${vehicle.name}`,
      `Cargo Capacity: ${vehicle.cargo_capacity} kg`,
      `Consumables: ${vehicle.consumables}`,
      `Cost in Credits: ${vehicle.cost_in_credits}`,
      `Crew: ${vehicle.crew}`,
      `Length: ${vehicle.length} m`,
      `Max Atmosphering Speed: ${vehicle.max_atmosphering_speed} km/h`,
      `Manufacturer: ${vehicle.manufacturer}`,
      `Model: ${vehicle.model}`,
      `Passengers: ${vehicle.passengers}`,
      `Vehicle Class: ${vehicle.vehicle_class}`,
      `Pilots: ${vehicle.pilots.join(", ")}`,
      `Films: ${vehicle.films.join(", ")}`,
      `Created: ${new Date(vehicle.created).toLocaleString()}`,
      `Edited: ${new Date(vehicle.edited).toLocaleString()}`,
      `URL: ${vehicle.url}`,
    ].join("\n");
  }

  formatStarship(starship: Starship): string {
    return [
      `Name: ${starship.name}`,
      `Model: ${starship.model}`,
      `Manufacturer: ${starship.manufacturer}`,
      `Cost in Credits: ${starship.cost_in_credits}`,
      `Length: ${starship.length} m`,
      `Max Atmosphering Speed: ${starship.max_atmosphering_speed} km/h`,
      `Crew: ${starship.crew}`,
      `Passengers: ${starship.passengers}`,
      `Cargo Capacity: ${starship.cargo_capacity} kg`,
      `Consumables: ${starship.consumables}`,
      `Hyperdrive Rating: ${starship.hyperdrive_rating}`,
      `MGLT: ${starship.MGLT} MGLT`,
      `Starship Class: ${starship.starship_class}`,
      `Pilots: ${starship.pilots.join(", ")}`,
      `Films: ${starship.films.join(", ")}`,
      `Created: ${new Date(starship.created).toLocaleString()}`,
      `Edited: ${new Date(starship.edited).toLocaleString()}`,
      `URL: ${starship.url}`,
    ].join("\n");
  }

  formatSpecies(species: Species): string {
    return [
      `Name: ${species.name}`,
      `Classification: ${species.classification}`,
      `Designation: ${species.designation}`,
      `Average Height: ${species.average_height} cm`,
      `Average Lifespan: ${species.average_lifespan} years`,
      `Eye Colors: ${species.eye_colors}`,
      `Hair Colors: ${species.hair_colors}`,
      `Skin Colors: ${species.skin_colors}`,
      `Language: ${species.language}`,
      `Homeworld: ${species.homeworld}`,
      `People: ${species.people.join(", ")}`,
      `Films: ${species.films.join(", ")}`,
      `Created: ${new Date(species.created).toLocaleString()}`,
      `Edited: ${new Date(species.edited).toLocaleString()}`,
      `URL: ${species.url}`,
    ].join("\n");
  }

  formatFilm(film: Film): string {
    return [
      `Title: ${film.title}`,
      `Episode ID: ${film.episode_id}`,
      `Opening Crawl: ${film.opening_crawl}`,
      `Director: ${film.director}`,
      `Producer: ${film.producer}`,
      `Release Date: ${film.release_date}`,
      `Characters: ${film.characters.join(", ")}`,
      `Planets: ${film.planets.join(", ")}`,
      `Starships: ${film.starships.join(", ")}`,
      `Species: ${film.species.join(", ")}`,
      `Created: ${new Date(film.created).toLocaleString()}`,
      `Edited: ${new Date(film.edited).toLocaleString()}`,
      `URL: ${film.url}`,
    ].join("\n");
  }

  formatPeopleList(list: ListResponse<People>): string {
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

  formatPlanetList(list: ListResponse<Planet>): string {
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

  formatVehicleList(list: ListResponse<Vehicle>): string {
    if (!list || list.results.length === 0) {
      return "No vehicles found";
    }
    return [
      `Total Vehicles: ${list.count}`,
      `Page: ${list.next ? "Next page available" : "Last page"}`,
      `Previous: ${
        list.previous ? "Previous page available" : "No previous page"
      }`,
      "---",
      ...list.results.map((vehicle) => this.formatVehicle(vehicle)),
    ].join("\n");
  }

  formatStarshipList(list: ListResponse<Starship>): string {
    if (!list || list.results.length === 0) {
      return "No starships found";
    }
    return [
      `Total Starships: ${list.count}`,
      `Page: ${list.next ? "Next page available" : "Last page"}`,
      `Previous: ${
        list.previous ? "Previous page available" : "No previous page"
      }`,
      "---",
      ...list.results.map((starship) => this.formatStarship(starship)),
    ].join("\n");
  }

  formatSpeciesList(list: ListResponse<Species>): string {
    if (!list || list.results.length === 0) {
      return "No species found";
    }
    return [
      `Total Species: ${list.count}`,
      `Page: ${list.next ? "Next page available" : "Last page"}`,
      `Previous: ${
        list.previous ? "Previous page available" : "No previous page"
      }`,
      "---",
      ...list.results.map((species) => this.formatSpecies(species)),
    ].join("\n");
  }

  formatFilmList(list: ListResponse<Film>): string {
    if (!list || list.results.length === 0) {
      return "No films found";
    }
    return [
      `Total Films: ${list.count}`,
      `Page: ${list.next ? "Next page available" : "Last page"}`,
      `Previous: ${
        list.previous ? "Previous page available" : "No previous page"
      }`,
      "---",
      ...list.results.map((film) => this.formatFilm(film)),
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

  async getVehicle(id: number): Promise<string> {
    const vehicle = await this.apiService.getVehicle(id);
    if (!vehicle) {
      return `Failed to retrieve vehicle with ID ${id}`;
    }
    return this.formatVehicle(vehicle);
  }

  async getStarship(id: number): Promise<string> {
    const starship = await this.apiService.getStarship(id);
    if (!starship) {
      return `Failed to retrieve starship with ID ${id}`;
    }
    return this.formatStarship(starship);
  }

  async getSpecies(id: number): Promise<string> {
    const species = await this.apiService.getSpecies(id);
    if (!species) {
      return `Failed to retrieve species with ID ${id}`;
    }
    return this.formatSpecies(species);
  }

  async getFilm(id: number): Promise<string> {
    const film = await this.apiService.getFilm(id);
    if (!film) {
      return `Failed to retrieve film with ID ${id}`;
    }
    return this.formatFilm(film);
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

  async getVehiclesList(page: number = 1): Promise<string> {
    const vehicleList = await this.apiService.getVehiclesList(page);
    if (!vehicleList) {
      return `Failed to retrieve vehicles list for page ${page}`;
    }
    if (vehicleList.results.length === 0) {
      return `No vehicles found on page ${page}`;
    }
    return this.formatVehicleList(vehicleList);
  }

  async getStarshipsList(page: number = 1): Promise<string> {
    const starshipList = await this.apiService.getStarshipsList(page);
    if (!starshipList) {
      return `Failed to retrieve starships list for page ${page}`;
    }
    if (starshipList.results.length === 0) {
      return `No starships found on page ${page}`;
    }
    return this.formatStarshipList(starshipList);
  }

  async getSpeciesList(page: number = 1): Promise<string> {
    const speciesList = await this.apiService.getSpeciesList(page);
    if (!speciesList) {
      return `Failed to retrieve species list for page ${page}`;
    }
    if (speciesList.results.length === 0) {
      return `No species found on page ${page}`;
    }
    return this.formatSpeciesList(speciesList);
  }

  async getFilmsList(page: number = 1): Promise<string> {
    const filmList = await this.apiService.getFilmsList(page);
    if (!filmList) {
      return `Failed to retrieve films list for page ${page}`;
    }
    if (filmList.results.length === 0) {
      return `No films found on page ${page}`;
    }
    return this.formatFilmList(filmList);
  }

  async searchPeopleList(search: string): Promise<string> {
    const peopleList = await this.apiService.searchPeopleList(search);
    if (!peopleList) {
      return `Failed to retrieve people list for search "${search}"`;
    }
    if (peopleList.results.length === 0) {
      return `No people found for search "${search}"`;
    }
    return this.formatPeopleList(peopleList);
  }

  async searchPlanetsList(search: string): Promise<string> {
    const planetList = await this.apiService.searchPlanetsList(search);
    if (!planetList) {
      return `Failed to retrieve planets list for search "${search}"`;
    }
    if (planetList.results.length === 0) {
      return `No planets found for search "${search}"`;
    }
    return this.formatPlanetList(planetList);
  }

  async searchVehiclesList(search: string): Promise<string> {
    const vehicleList = await this.apiService.searchVehiclesList(search);
    if (!vehicleList) {
      return `Failed to retrieve vehicles list for search "${search}"`;
    }
    if (vehicleList.results.length === 0) {
      return `No vehicles found for search "${search}"`;
    }
    return this.formatVehicleList(vehicleList);
  }

  async searchStarshipsList(search: string): Promise<string> {
    const starshipList = await this.apiService.searchStarshipsList(search);
    if (!starshipList) {
      return `Failed to retrieve starships list for search "${search}"`;
    }
    if (starshipList.results.length === 0) {
      return `No starships found for search "${search}"`;
    }
    return this.formatStarshipList(starshipList);
  }

  async searchSpeciesList(search: string): Promise<string> {
    const speciesList = await this.apiService.searchSpeciesList(search);
    if (!speciesList) {
      return `Failed to retrieve species list for search "${search}"`;
    }
    if (speciesList.results.length === 0) {
      return `No species found for search "${search}"`;
    }
    return this.formatSpeciesList(speciesList);
  }

  async searchFilmsList(search: string): Promise<string> {
    const filmList = await this.apiService.searchFilmsList(search);
    if (!filmList) {
      return `Failed to retrieve films list for search "${search}"`;
    }
    if (filmList.results.length === 0) {
      return `No films found for search "${search}"`;
    }
    return this.formatFilmList(filmList);
  }
}
