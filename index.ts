import Yargs from "yargs";

type BuildJSON = {
  name: string;
  serviceType: string;
};

function main() {
  const argv = Yargs(process.argv.slice(2)).argv;
  console.log(argv);
}

main();
