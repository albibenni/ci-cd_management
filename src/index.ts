import Yargs from "yargs";
import { configSchema } from "./types.ts";

function main() {
  const argv =
    // .option("name", {
    //   type: "string",
    //   demandOption: true,
    //   describe: "Name of the build",
    // })
    // .option("serviceType", {
    //   type: "string",
    //   demandOption: true,
    //   describe: "Type of service",
    // }).argv;
    // .option("config", {
    //   type: "string",
    //   demandOption: true,
    //   describe: "Type of service",
    // }).argv;
    Yargs(process.argv.slice(2)).argv;

  //console.log(argv["config"]);
  console.log(argv);

  const result = configSchema.safeParse(argv["config"]);
  if (result.success) {
    console.log(result.data);
  } else throw new Error("Not found");

  // const buildPath = z.string({
  //       argv["config"]}
  //       error: ()=> return {mes);
}

main();
