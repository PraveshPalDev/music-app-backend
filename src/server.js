import http from "http";
import app from "./app.js";
import config from "./config/config.js";

const PORT = config.port || 8000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
