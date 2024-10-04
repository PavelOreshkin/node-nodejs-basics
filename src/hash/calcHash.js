import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const filename = `${__dirname}\\files\\fileToCalculateHashFor.txt`;
  const hash = createHash("sha256");

  const input = createReadStream(filename);

  input.on("readable", () => {
    const data = input.read();
    if (data) {
      hash.update(data);
    } else {
      console.log(`>>> ${hash.digest("hex")} ${filename}`);
    }
  });
};

await calculateHash();
