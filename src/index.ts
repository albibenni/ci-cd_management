import yargs from "yargs";
import type { BuildJSON } from "./types.ts";
import { BuildJSONSchema, ConfigSchema, OPTIONS } from "./types.ts";
import { readFileSync } from "node:fs";
import { configure, render } from "nunjucks";
import { getSelectedFolder } from "./utils.ts";

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

  render("Dockerfile", {
    serviceName: configurationData.serviceName,
    serviceType: configurationData.serviceType,
  });
  console.log(configurationData);
}

main();
