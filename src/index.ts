import yargs from "yargs";
import type { BuildJSON } from "./types.ts";
import { buildJSONSchema, configSchema, OPTIONS } from "./types.ts";
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

  const configurationData: BuildJSON = buildJSONSchema.parse(
    JSON.parse(configuration),
  );
  console.log(configurationData);
}

main();
