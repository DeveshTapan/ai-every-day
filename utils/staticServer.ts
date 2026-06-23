import fs from 'fs';
import http, { type Server } from 'http';
import path from 'path';

const port = 3000;
const rootDir = process.cwd();

const contentTypes: Record<string, string> = {
  '.css': 'text/css',
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

function resolveRequestPath(requestUrl = '/') {
  const url = new URL(requestUrl, `http://localhost:${port}`);
  const requestedPath = url.pathname === '/' ? '/index.html' : url.pathname;
  const filePath = path.normalize(path.join(rootDir, decodeURIComponent(requestedPath)));

  if (!filePath.startsWith(rootDir)) {
    return null;
  }

  return filePath;
}

function createStaticServer() {
  return http.createServer((request, response) => {
    const filePath = resolveRequestPath(request.url);

    if (!filePath) {
      response.writeHead(403);
      response.end('Forbidden');
      return;
    }

    fs.readFile(filePath, (error, content) => {
      if (error) {
        response.writeHead(404);
        response.end('Not found');
        return;
      }

      response.writeHead(200, {
        'Content-Type': contentTypes[path.extname(filePath)] || 'application/octet-stream',
      });
      response.end(content);
    });
  });
}

async function startServer(server: Server) {
  await new Promise<void>((resolve) => {
    server.listen(port, resolve);
  });
}

async function stopServer(server: Server) {
  await new Promise<void>((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
}

export default async function globalSetup() {
  const server = createStaticServer();
  await startServer(server);

  return async () => {
    await stopServer(server);
  };
}
