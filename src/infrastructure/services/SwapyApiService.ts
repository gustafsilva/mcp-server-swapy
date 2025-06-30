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

export class SwapyApiService {
  private readonly API_BASE = "https://swapi.bry.com.br/api";
  private readonly USER_AGENT = "swapy-app/1.0";

  async makeRequest<T>(endpoint: string): Promise<T | null> {
    const url = `${this.API_BASE}${endpoint}`;
    const headers = {
      "User-Agent": this.USER_AGENT,
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch(url, { headers });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return (await response.json()) as T;
    } catch (error) {
      console.error("Error making NWS request:", error);
      return null;
    }
  }

  async getRoot(): Promise<RootResponse | null> {
    return this.makeRequest<RootResponse>("/");
  }

  async getPeopleList(page: number = 1): Promise<ListResponse<People> | null> {
    const response = await this.makeRequest<ListResponse<People>>(
      `/people/?page=${page}`
    );
    return response;
  }

  async getPeople(id: number): Promise<People | null> {
    return this.makeRequest<People>(`/people/${id}`);
  }

  async getPlanetsList(page: number = 1): Promise<ListResponse<Planet> | null> {
    return this.makeRequest<ListResponse<Planet>>(`/planets/?page=${page}`);
  }

  async getPlanet(id: number): Promise<Planet | null> {
    return this.makeRequest<Planet>(`/planets/${id}`);
  }

  async getVehiclesList(
    page: number = 1
  ): Promise<ListResponse<Vehicle> | null> {
    return this.makeRequest<ListResponse<Vehicle>>(`/vehicles/?page=${page}`);
  }

  async getVehicle(id: number): Promise<Vehicle | null> {
    return this.makeRequest<Vehicle>(`/vehicles/${id}`);
  }

  async getStarshipsList(
    page: number = 1
  ): Promise<ListResponse<Starship> | null> {
    return this.makeRequest<ListResponse<Starship>>(`/starships/?page=${page}`);
  }

  async getStarship(id: number): Promise<Starship | null> {
    return this.makeRequest<Starship>(`/starships/${id}`);
  }

  async getSpeciesList(
    page: number = 1
  ): Promise<ListResponse<Species> | null> {
    return this.makeRequest<ListResponse<Species>>(`/species/?page=${page}`);
  }

  async getSpecies(id: number): Promise<Species | null> {
    return this.makeRequest<Species>(`/species/${id}`);
  }

  async getFilmsList(page: number = 1): Promise<ListResponse<Film> | null> {
    return this.makeRequest<ListResponse<Film>>(`/films/?page=${page}`);
  }

  async getFilm(id: number): Promise<Film | null> {
    return this.makeRequest<Film>(`/films/${id}`);
  }
}
