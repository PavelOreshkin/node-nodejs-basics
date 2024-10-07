import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { createGzip } from "node:zlib";
import { cwd } from "node:process";
import { promisify } from "node:util";
import { unlink } from "node:fs/promises";

const asyncPipeline = promisify(pipeline);

const compress = async () => {
  const commonPath = `${cwd()}\\src\\zip\\files`;
  const sourcePath = `${commonPath}\\fileToCompress.txt`;
  const destinationPath = `${commonPath}\\archive.gz`;

  const gzip = createGzip();

  const source = createReadStream(sourcePath);
  const destination = createWriteStream(destinationPath);

  try {
    await asyncPipeline(source, gzip, destination);
    await unlink(sourcePath);
  } catch (error) {
    throw error;
  }
};

await compress();
