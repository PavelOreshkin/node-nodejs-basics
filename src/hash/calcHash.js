import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { cwd } from "node:process";

const calculateHash = async () => {
  const filename = `${cwd()}\\src\\hash\\files\\fileToCalculateHashFor.txt`;
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
