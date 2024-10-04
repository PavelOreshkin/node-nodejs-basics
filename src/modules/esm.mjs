import path from "node:path";
import { release, version } from "node:os";
import { createServer as createServerHttp } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import "./files/c.js";

const random = Math.random();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const unknownObject = await (async () => {
  const fileName =
    random > 0.5 ? `${__dirname}/files/a.json` : `${__dirname}/files/b.json`;

  try {
    const data = await readFile(fileName, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    throw error;
  }
})();

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
