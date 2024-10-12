import { stat, appendFile } from "node:fs/promises";

const create = async () => {
  const PATH = "src/fs/files/fresh.txt";
  const TEXT = "I am fresh and young";
  const ERROR_MESSAGE = "FS operation failed";

  try {
    const stats = await stat(PATH);
    if (stats) throw new Error(ERROR_MESSAGE);
  } catch {}

  try {
    appendFile(PATH, TEXT);
  } catch (error) {
    throw error;
  }
};

await create();
