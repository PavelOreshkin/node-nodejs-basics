import { stat, rename as nodejsRename } from "node:fs/promises";

const rename = async () => {
  const ERROR_MESSAGE = "FS operation failed";
  const OLD_PATH = "src/fs/files/wrongFilename.txt";
  const NEW_PATH = "src/fs/files/properFilename.md";

  try {
    await stat(OLD_PATH);
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }

  try {
    const stats = await stat(NEW_PATH);
    if (stats) throw new Error(ERROR_MESSAGE);
  } catch (error) {
    if (error.message === ERROR_MESSAGE) {
      throw error;
    }
  }

  try {
    nodejsRename(OLD_PATH, NEW_PATH);
  } catch (error) {
    throw error;
  }
};

await rename();
