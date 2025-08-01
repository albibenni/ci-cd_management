import yargs from "yargs";
import { configSchema, OPTIONS } from "./types.ts";

function main() {
  const argv = yargs(process.argv.slice(2))
    .option(OPTIONS.CONFIG, {
      type: "string",
      description: "Configuration file path",
    })
    .parseSync();

  const result = configSchema.safeParse(argv[OPTIONS.CONFIG]);

  if (!result.success) {
    throw new Error(result.error.message);
  }
  console.log(result.data);
}

main();
