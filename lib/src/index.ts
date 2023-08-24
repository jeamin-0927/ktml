import decode from "./html/decode";
import encode from "./html/encode";

const dir = process.argv[3] || __dirname;
const type = process.argv[2] === "encode" ? encode : 
              process.argv[2] === "decode" ? decode : () => {};

console.clear();
console.log(`😏  한글 마크업 언어 v.1.1.1 😏`);
console.log();

type(dir);
