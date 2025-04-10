import http from 'http';
import app from './app.js';
import config from './config/index.js';

const PORT = config.port || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
