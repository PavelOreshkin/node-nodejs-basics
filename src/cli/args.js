import { argv } from "node:process";

const parseArgs = () => {
  const OPTION_MARKER = "--";

  const resultString = argv.reduce((acc, item, index, arr) => {
    if (item.startsWith(OPTION_MARKER)) {
      const keyValuePair = `${item.slice(2)} is ${arr[index + 1]}`;
      return acc ? `${acc}, ${keyValuePair}` : keyValuePair;
    }
    return acc;
  }, "");

  console.log(`Result string: `, resultString);
};

parseArgs();
