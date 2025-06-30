import { People, PeopleListResponse, Planet, PlanetListResponse, RootResponse } from "../../domain/models/Swapy.js";

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

  async getPeopleList(page: number = 1): Promise<PeopleListResponse | null> {
    const response = await this.makeRequest<PeopleListResponse>(`/people/?page=${page}`);
    return response;
  }

  async getPeople(id: number): Promise<People | null> {
    return this.makeRequest<People>(`/people/${id}`);
  }

  async getPlanetsList(page: number = 1): Promise<PlanetListResponse | null> {
    return this.makeRequest<PlanetListResponse>(`/planets/?page=${page}`);
  }

  async getPlanet(id: number): Promise<Planet | null> {
    return this.makeRequest<Planet>(`/planets/${id}`);
  }
  // async getSpecies(id: number): Promise<any | null> {
  //   return this.makeRequest<any>(`/species/${id}`);
  // }
  // async getStarships(id: number): Promise<any | null> {
  //   return this.makeRequest<any>(`/starships/${id}`);
  // }
  // async getVehicles(id: number): Promise<any | null> {
  //   return this.makeRequest<any>(`/vehicles/${id}`);
  // }
}
