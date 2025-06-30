import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { SwapyToolsController } from "./interface/controllers/SwapyToolsController.js";
import { SwapyService } from "./application/services/SwapyService.js";
import { SwapyApiService } from "./infrastructure/services/SwapyApiService.js";

async function main() {
  const server = new McpServer({
    name: "weather",
    version: "1.0.0",
    capabilities: {
      resources: {},
      tools: {},
    },
  });

  const swapyApiService = new SwapyApiService();
  const swapyService = new SwapyService(swapyApiService);

  new SwapyToolsController(server, swapyService);

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Swapy MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
