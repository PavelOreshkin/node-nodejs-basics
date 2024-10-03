import { cp, stat } from "node:fs/promises";

const copy = async () => {
  const PATH_FROM = "src/fs/files";
  const PATH_TO = "src/fs/files_copy";
  const ERROR_MESSAGE = "FS operation failed";

  try {
    await stat(PATH_FROM);
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }

  try {
    const stats = await stat(PATH_TO);
    if (stats) throw new Error(ERROR_MESSAGE);
  } catch (error) {
    if (error.message === ERROR_MESSAGE) {
      throw error;
    }
  }

  try {
    cp(PATH_FROM, PATH_TO, { recursive: true });
  } catch (error) {
    throw error;
  }
};

await copy();
