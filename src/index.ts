import yargs from "yargs";
import type { BuildJSON } from "./types.ts";
import { BuildJSONSchema, ConfigSchema, OPTIONS } from "./types.ts";
import { readFileSync, writeFileSync } from "node:fs";
import { getSelectedFolder } from "./utils.ts";
import pkg from "nunjucks";
const { configure, render } = pkg;

function main() {
  const argv = yargs(process.argv.slice(2))
    .option(OPTIONS.CONFIG, {
      type: "string",
      description: "Configuration file path",
    })
    .parseSync();

  const resultPath = ConfigSchema.safeParse(argv[OPTIONS.CONFIG]);

  if (!resultPath.success) {
    throw new Error(resultPath.error.message);
  }
  console.log(resultPath.data);

  const configuration = readFileSync(resultPath.data, { encoding: "utf8" });

  const configurationData: BuildJSON = BuildJSONSchema.parse(
    JSON.parse(configuration),
  );

  // Template engine
  const templateFolder = getSelectedFolder("templates");
  configure(templateFolder, { autoescape: true });

  const dockerfile = render("Dockerfile", configurationData);
  console.log(dockerfile);
  writeFileSync("Dockerfile", dockerfile);
}

main();
