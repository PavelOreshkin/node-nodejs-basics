import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import { cwd } from "node:process";

const read = async () => {
  const pathToFile = `${cwd()}\\src\\streams\\files\\fileToRead.txt`;
  const readableStream = createReadStream(pathToFile, { encoding: "utf8" });

  // I think next line should work but for some reason it doesn't
  readableStream.pipe(stdout);

  readableStream.on("readable", () => {
    const result = readableStream.read();
    if (result) console.log(result);
  });
};

await read();
