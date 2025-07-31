import Yargs from "yargs";
import { configSchema, OPTIONS } from "./types.ts";

function main() {
  const argv = Yargs(process.argv.slice(2)).argv;

  const result = configSchema.safeParse(argv[OPTIONS.CONFIG]);

  if (result.success) {
    console.log(result.data);
  } else throw new Error("Not found");

  // const buildPath = z.string({
  //       argv["config"]}
  //       error: ()=> return {mes);
}

main();
