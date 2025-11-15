import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDirectoryPath = path.join(__dirname, "public");

const server = http.createServer((req, res) => {
  let filePath = path.join(publicDirectoryPath, req.url);

  if (req.url === "/") {
    filePath = path.join(publicDirectoryPath, "index.html");
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
  };

  const contentType = mimeTypes[extname] || "application/octet-stream";

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === "ENOENT") {
        fs.readFile(
          path.join(publicDirectoryPath, "404.html"),
          (error404, content404) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(content404, "utf-8");
          }
        );
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}/`);
});
