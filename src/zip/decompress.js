import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { createGunzip } from "node:zlib";
import { cwd } from "node:process";
import { promisify } from "node:util";
import { unlink } from "node:fs/promises";

const asyncPipeline = promisify(pipeline);

const decompress = async () => {
  const commonPath = `${cwd()}\\src\\zip\\files`;
  const sourcePath = `${commonPath}\\archive.gz`;
  const destinationPath = `${commonPath}\\fileToCompress.txt`;

  const gUnzip = createGunzip();

  const source = createReadStream(sourcePath);
  const destination = createWriteStream(destinationPath);

  try {
    await asyncPipeline(source, gUnzip, destination);
    await unlink(sourcePath);
  } catch (error) {
    throw error;
  }
};

await decompress();
