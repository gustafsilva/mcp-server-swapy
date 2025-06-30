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
    this.registerGetPeopleListToolHandler();
    this.registerGetPlanetsListToolHandler();
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

  
}
