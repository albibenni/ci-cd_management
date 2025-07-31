import Yargs from "yargs";
import { configSchema, OPTIONS } from "./types.ts";

function main() {
  const argv = Yargs(process.argv.slice(2)).argv;

  const result = configSchema.safeParse(argv[OPTIONS.CONFIG]);

  if (!result.success) {
    throw new Error("Not found");
  }
  console.log(result.data);
}

main();
