import { env } from "node:process";

const parseEnv = () => {
  const PREFIX = "RSS_";

  const resultStringByPrefix = Object.entries(env).reduce(
    (acc, [key, value]) => {
      if (key.startsWith(PREFIX)) {
        const keyValuePair = `${key}=${value}`;
        return acc ? `${acc}; ${keyValuePair}` : keyValuePair;
      }
      return acc;
    },
    ""
  );

  console.log(`Result string by prefix "${PREFIX}": `, resultStringByPrefix);
};

parseEnv();
