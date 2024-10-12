import { createWriteStream } from "node:fs";
import { stdin, stdout } from "node:process";
import { cwd } from "node:process";

const write = async () => {
  const pathToFile = `${cwd()}\\src\\streams\\files\\fileToWrite.txt`;

  const writableStream = createWriteStream(pathToFile);
  stdin.pipe(writableStream);
};

await write();
