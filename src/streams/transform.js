import { stdin, stdout } from "node:process";
import { Transform } from "node:stream";

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, _, callback) {
      const reversedChunk = chunk
        .toString()
        .split("")
        .reverse()
        .join("")
        .concat("\n");
      callback(null, reversedChunk);
    },
  });

  stdin.pipe(reverseTransform).pipe(stdout);
};

await transform();
