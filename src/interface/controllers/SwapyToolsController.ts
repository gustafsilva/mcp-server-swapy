import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { SwapyService } from "../../application/services/SwapyService.js";

export class SwapyToolsController {
  constructor(
    private server: McpServer,
    private swapyService: SwapyService
  ) {
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
  }

  private registerRootToolHandler(): void {
    this.server.tool(
      "get-root",
      "Get root information from the Star Wars universe",
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
      "Get information about a Star Wars character by ID",
      {
        id: z.number().int().positive().describe("Star Wars character ID"),
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
      "Get information about a Star Wars planet by ID",
      {
        id: z.number().int().positive().describe("Star Wars planet ID"),
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
      "Get information about a Star Wars vehicle by ID",
      {
        id: z.number().int().positive().describe("Star Wars vehicle ID"),
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
      "Get information about a Star Wars starship by ID",
      {
        id: z.number().int().positive().describe("Star Wars starship ID"),
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
      "Get information about a Star Wars species by ID",
      {
        id: z.number().int().positive().describe("Star Wars species ID"),
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
      "Get information about a Star Wars film by ID",
      {
        id: z.number().int().positive().describe("Star Wars film ID"),
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
      "Get a list of characters from the Star Wars universe",
      {
        page: z.number().int().min(1).default(1).describe("Page number"),
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
      "Get a list of planets from the Star Wars universe",
      {
        page: z.number().int().min(1).default(1).describe("Page number"),
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
      "Get a list of vehicles from the Star Wars universe",
      {
        page: z.number().int().min(1).default(1).describe("Page number"),
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
      "Get a list of starships from the Star Wars universe",
      {
        page: z.number().int().min(1).default(1).describe("Page number"),
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
      "Get a list of species from the Star Wars universe",
      {
        page: z.number().int().min(1).default(1).describe("Page number"),
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
      "Get a list of films from the Star Wars universe",
      {
        page: z.number().int().min(1).default(1).describe("Page number"),
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
}
