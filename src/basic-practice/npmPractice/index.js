import {franc, francAll} from "franc";
import langs from "langs";
import colors from "colors";

const input = process.argv[2];
const langCode = franc(input);

if (langCode === 'und') {
  console.log("Couldn't figure it out, type longer text please".red);
} else {
  const language = langs.where('3', langCode);
  console.log(`Our best quess is: ${language.name}`.green)
}