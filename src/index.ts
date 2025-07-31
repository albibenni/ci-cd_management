import Yargs from "yargs";
import { buildJSONSchema } from "./types";

function main() {
  const argv = Yargs(process.argv.slice(2))
    .option("name", {
      type: "string",
      demandOption: true,
      describe: "Name of the build",
    })
    .option("serviceType", {
      type: "string",
      demandOption: true,
      describe: "Type of service",
    }).argv;

  console.log(argv);
}

main();
