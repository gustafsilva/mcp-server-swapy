import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { SwapyToolsController } from "./interface/controllers/SwapyToolsController.js";
import { SwapyService } from "./application/services/SwapyService.js";
import { SwapyApiService } from "./infrastructure/services/SwapyApiService.js";

async function main() {
  // Criação da instância do servidor MCP
  const server = new McpServer({
    name: "weather",
    version: "1.0.0",
    capabilities: {
      resources: {},
      tools: {},
    },
  });

  // Inicializando serviços e controladores
  const swapyApiService = new SwapyApiService();
  const swapyService = new SwapyService(swapyApiService);

  // Controlador que registra as ferramentas
  new SwapyToolsController(server, swapyService);

  // Configurando e iniciando o servidor
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Swapy MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
