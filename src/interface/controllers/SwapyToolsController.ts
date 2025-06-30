import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SwapyService } from "../../application/services/SwapyService.js";

export class SwapyToolsController {
  constructor(private server: McpServer, private swapyService: SwapyService) {
    this.registerTools();
  }

  private registerTools(): void {
    this.registerRootToolHandler();
    this.registerGetPeopleToolHandler();
    this.registerGetPlanetToolHandler();
    this.registerGetVehicleToolHandler();
    this.registerGetStarshipToolHandler();
    this.registerGetSpeciesToolHandler();
    this.registerGetFilmToolHandler();
    this.registerGetPeopleListToolHandler();
    this.registerGetPlanetsListToolHandler();
    this.registerGetVehiclesListToolHandler();
    this.registerGetStarshipsListToolHandler();
    this.registerGetSpeciesListToolHandler();
    this.registerGetFilmsListToolHandler();
    this.registerSearchPeopleToolHandler();
    this.registerSearchPlanetsToolHandler();
    this.registerSearchVehiclesToolHandler();
    this.registerSearchStarshipsToolHandler();
    this.registerSearchSpeciesToolHandler();
    this.registerSearchFilmsToolHandler();
  }

  private registerRootToolHandler(): void {
    this.server.tool(
      "get-root",
      "Get general information about the Star Wars API (SWAPI)",
      {},
      async () => {
        const rootText = await this.swapyService.getRoot();
        return {
          content: [
            {
              type: "text",
              text: rootText,
            },
          ],
        };
      }
    );
  }

  private registerGetPeopleToolHandler(): void {
    this.server.tool(
      "get-people",
      "Retrieve details about a Star Wars character by ID.",
      {
        id: z
          .number()
          .int()
          .positive()
          .describe(
            "Numeric ID of the character (see SWAPI documentation for valid IDs)."
          ),
      },
      async ({ id }) => {
        const personText = await this.swapyService.getPeople(id);
        return {
          content: [
            {
              type: "text",
              text: personText,
            },
          ],
        };
      }
    );
  }

  private registerGetPlanetToolHandler(): void {
    this.server.tool(
      "get-planet",
      "Retrieve details about a Star Wars planet by ID.",
      {
        id: z
          .number()
          .int()
          .positive()
          .describe(
            "Numeric ID of the planet (see SWAPI documentation for valid IDs)."
          ),
      },
      async ({ id }) => {
        const planetText = await this.swapyService.getPlanet(id);
        return {
          content: [
            {
              type: "text",
              text: planetText,
            },
          ],
        };
      }
    );
  }

  private registerGetVehicleToolHandler(): void {
    this.server.tool(
      "get-vehicle",
      "Retrieve details about a Star Wars vehicle by ID.",
      {
        id: z
          .number()
          .int()
          .positive()
          .describe(
            "Numeric ID of the vehicle (see SWAPI documentation for valid IDs)."
          ),
      },
      async ({ id }) => {
        const vehicleText = await this.swapyService.getVehicle(id);
        return {
          content: [
            {
              type: "text",
              text: vehicleText,
            },
          ],
        };
      }
    );
  }

  private registerGetStarshipToolHandler(): void {
    this.server.tool(
      "get-starship",
      "Retrieve details about a Star Wars starship by ID.",
      {
        id: z
          .number()
          .int()
          .positive()
          .describe(
            "Numeric ID of the starship (see SWAPI documentation for valid IDs)."
          ),
      },
      async ({ id }) => {
        const starshipText = await this.swapyService.getStarship(id);
        return {
          content: [
            {
              type: "text",
              text: starshipText,
            },
          ],
        };
      }
    );
  }

  private registerGetSpeciesToolHandler(): void {
    this.server.tool(
      "get-species",
      "Retrieve details about a Star Wars species by ID.",
      {
        id: z
          .number()
          .int()
          .positive()
          .describe(
            "Numeric ID of the species (see SWAPI documentation for valid IDs)."
          ),
      },
      async ({ id }) => {
        const speciesText = await this.swapyService.getSpecies(id);
        return {
          content: [
            {
              type: "text",
              text: speciesText,
            },
          ],
        };
      }
    );
  }

  private registerGetFilmToolHandler(): void {
    this.server.tool(
      "get-film",
      "Retrieve details about a Star Wars film by ID.",
      {
        id: z
          .number()
          .int()
          .positive()
          .describe(
            "Numeric ID of the film (see SWAPI documentation for valid IDs)."
          ),
      },
      async ({ id }) => {
        const filmText = await this.swapyService.getFilm(id);
        return {
          content: [
            {
              type: "text",
              text: filmText,
            },
          ],
        };
      }
    );
  }

  private registerGetPeopleListToolHandler(): void {
    this.server.tool(
      "get-people-list",
      "List Star Wars characters (paginated).",
      {
        page: z
          .number()
          .int()
          .min(1)
          .default(1)
          .describe("Page number for paginated results (starts at 1)."),
      },
      async ({ page }) => {
        const peopleListText = await this.swapyService.getPeopleList(page);
        return {
          content: [
            {
              type: "text",
              text: peopleListText,
            },
          ],
        };
      }
    );
  }

  private registerGetPlanetsListToolHandler(): void {
    this.server.tool(
      "get-planets-list",
      "List Star Wars planets (paginated).",
      {
        page: z
          .number()
          .int()
          .min(1)
          .default(1)
          .describe("Page number for paginated results (starts at 1)."),
      },
      async ({ page }) => {
        const planetListText = await this.swapyService.getPlanetsList(page);
        return {
          content: [
            {
              type: "text",
              text: planetListText,
            },
          ],
        };
      }
    );
  }

  private registerGetVehiclesListToolHandler(): void {
    this.server.tool(
      "get-vehicles-list",
      "List Star Wars vehicles (paginated).",
      {
        page: z
          .number()
          .int()
          .min(1)
          .default(1)
          .describe("Page number for paginated results (starts at 1)."),
      },
      async ({ page }) => {
        const vehicleListText = await this.swapyService.getVehiclesList(page);
        return {
          content: [
            {
              type: "text",
              text: vehicleListText,
            },
          ],
        };
      }
    );
  }

  private registerGetStarshipsListToolHandler(): void {
    this.server.tool(
      "get-starships-list",
      "List Star Wars starships (paginated).",
      {
        page: z
          .number()
          .int()
          .min(1)
          .default(1)
          .describe("Page number for paginated results (starts at 1)."),
      },
      async ({ page }) => {
        const starshipListText = await this.swapyService.getStarshipsList(page);
        return {
          content: [
            {
              type: "text",
              text: starshipListText,
            },
          ],
        };
      }
    );
  }

  private registerGetSpeciesListToolHandler(): void {
    this.server.tool(
      "get-species-list",
      "List Star Wars species (paginated).",
      {
        page: z
          .number()
          .int()
          .min(1)
          .default(1)
          .describe("Page number for paginated results (starts at 1)."),
      },
      async ({ page }) => {
        const speciesListText = await this.swapyService.getSpeciesList(page);
        return {
          content: [
            {
              type: "text",
              text: speciesListText,
            },
          ],
        };
      }
    );
  }

  private registerGetFilmsListToolHandler(): void {
    this.server.tool(
      "get-films-list",
      "List Star Wars films (paginated).",
      {
        page: z
          .number()
          .int()
          .min(1)
          .default(1)
          .describe("Page number for paginated results (starts at 1)."),
      },
      async ({ page }) => {
        const filmListText = await this.swapyService.getFilmsList(page);
        return {
          content: [
            {
              type: "text",
              text: filmListText,
            },
          ],
        };
      }
    );
  }

  private registerSearchPeopleToolHandler(): void {
    this.server.tool(
      "search-people",
      "Search for Star Wars characters by name.",
      {
        search: z
          .string()
          .min(1)
          .describe("Name or part of the name of the character to search for."),
      },
      async ({ search }) => {
        const peopleListText = await this.swapyService.searchPeopleList(search);
        return {
          content: [
            {
              type: "text",
              text: peopleListText,
            },
          ],
        };
      }
    );
  }

  private registerSearchPlanetsToolHandler(): void {
    this.server.tool(
      "search-planets",
      "Search for Star Wars planets by name.",
      {
        search: z
          .string()
          .min(1)
          .describe("Name or part of the name of the planet to search for."),
      },
      async ({ search }) => {
        const planetListText = await this.swapyService.searchPlanetsList(
          search
        );
        return {
          content: [
            {
              type: "text",
              text: planetListText,
            },
          ],
        };
      }
    );
  }

  private registerSearchVehiclesToolHandler(): void {
    this.server.tool(
      "search-vehicles",
      "Search for Star Wars vehicles by name.",
      {
        search: z
          .string()
          .min(1)
          .describe("Name or part of the name of the vehicle to search for."),
      },
      async ({ search }) => {
        const vehicleListText = await this.swapyService.searchVehiclesList(
          search
        );
        return {
          content: [
            {
              type: "text",
              text: vehicleListText,
            },
          ],
        };
      }
    );
  }

  private registerSearchStarshipsToolHandler(): void {
    this.server.tool(
      "search-starships",
      "Search for Star Wars starships by name.",
      {
        search: z
          .string()
          .min(1)
          .describe("Name or part of the name of the starship to search for."),
      },
      async ({ search }) => {
        const starshipListText = await this.swapyService.searchStarshipsList(
          search
        );
        return {
          content: [
            {
              type: "text",
              text: starshipListText,
            },
          ],
        };
      }
    );
  }

  private registerSearchSpeciesToolHandler(): void {
    this.server.tool(
      "search-species",
      "Search for Star Wars species by name.",
      {
        search: z
          .string()
          .min(1)
          .describe("Name or part of the name of the species to search for."),
      },
      async ({ search }) => {
        const speciesListText = await this.swapyService.searchSpeciesList(
          search
        );
        return {
          content: [
            {
              type: "text",
              text: speciesListText,
            },
          ],
        };
      }
    );
  }

  private registerSearchFilmsToolHandler(): void {
    this.server.tool(
      "search-films",
      "Search for Star Wars films by title.",
      {
        search: z
          .string()
          .min(1)
          .describe("Title or part of the title of the film to search for."),
      },
      async ({ search }) => {
        const filmListText = await this.swapyService.searchFilmsList(search);
        return {
          content: [
            {
              type: "text",
              text: filmListText,
            },
          ],
        };
      }
    );
  }
}
