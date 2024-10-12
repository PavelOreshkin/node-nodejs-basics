import { spawn } from "node:child_process";
import { stdin, stdout } from "node:process";

const spawnChildProcess = async (args) => {
  const PATH_TO_CHILDREN = "src/cp/files/script.js";
  const childProcess = spawn("node", [PATH_TO_CHILDREN, ...args]);
  stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["1", 2, null]);
