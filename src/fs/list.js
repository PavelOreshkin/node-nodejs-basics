import { stat, readdir } from "node:fs/promises";

const list = async () => {
  const ERROR_MESSAGE = "FS operation failed";
  const PATH = "src/fs/files";

  try {
    await stat(PATH);
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }

  try {
    const fileList = await readdir(PATH);
    console.log(`File list from "${PATH}": `, fileList);
  } catch (error) {
    throw error;
  }
};

await list();
