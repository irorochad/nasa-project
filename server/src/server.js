const http = require("http");

const app = require("./app");
const { loadPlanetData } = require("./models/planets.models");

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

async function startServer() {
  await loadPlanetData(); // load the data b4 starting the server
  server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
}

startServer();
