import http from "node:http";
import app from "./app.js";

const port = process.env.PORT || 4000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`[server] listening on http://localhost:${port}`);
});
