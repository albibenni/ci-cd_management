import yargs from "yargs";
import { configSchema, OPTIONS } from "./types.ts";
import { readFileSync } from "node:fs";

function main() {
  const argv = yargs(process.argv.slice(2))
    .option(OPTIONS.CONFIG, {
      type: "string",
      description: "Configuration file path",
    })
    .parseSync();

  const resultPath = configSchema.safeParse(argv[OPTIONS.CONFIG]);

  if (!resultPath.success) {
    throw new Error(resultPath.error.message);
  }
  console.log(resultPath.data);

  const configuration = readFileSync(resultPath.data, { encoding: "utf8" });
  console.log(configuration);
}

main();
