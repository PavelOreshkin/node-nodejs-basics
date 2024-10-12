import { stat, unlink } from "node:fs/promises";

const remove = async () => {
  const ERROR_MESSAGE = "FS operation failed";
  const PATH = "src/fs/files/fileToRemove.txt";

  try {
    await stat(PATH);
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }

  try {
    unlink(PATH);
  } catch (error) {
    throw error;
  }
};

await remove();
