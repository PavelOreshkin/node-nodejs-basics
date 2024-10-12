import { stat, readFile } from "node:fs/promises";

const read = async () => {
  const ERROR_MESSAGE = "FS operation failed";
  const PATH = "src/fs/files/fileToRead.txt";

  try {
    await stat(PATH);
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }

  try {
    const file = await readFile(PATH, { encoding: "utf8" });
    console.log(`File from "${PATH}": `, file);
  } catch (error) {
    throw error;
  }
};

await read();
