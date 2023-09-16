import * as fs from "fs";

import ktmlDecode from "./ktml/decode";
import ktmlEncode from "./ktml/encode";
import { File } from "./utils/types";
import webserver from "./utils/webserver";

const decodes = async (dir: string) => Promise.all([
  ktmlDecode(dir),
]);

const encodes = async (dir: string) => Promise.all([
  ktmlEncode(dir),
]);

(async () => {
  console.clear();
  console.log("😏  한글 마크업 언어 v.1.1.1 😏");
  console.log();

  let dir: string, type: ((dir: string) => Promise<[File[]]>) | null;
  if(process.argv[3]) {
    dir = process.argv[3] || __dirname;
    type = process.argv[2] === "encode" ? encodes : 
      process.argv[2] === "decode" ? decodes : null;
    if(type) await type(dir);
  }
  else {
    dir = process.argv[2] || __dirname;
    await decodes(dir);
    await webserver();

    const watcher = fs.watch(dir, { recursive: true });
    watcher.on("change", async () => {
      console.clear();
      console.log("😏  한글 마크업 언어 v.1.1.1 😏");
      console.log();
      await decodes(dir);
      console.log("🛜 서버 :: 웹 서버가 포트 3000번에서 시작됐어요.");
      console.log("🛜 서버 :: http://localhost:3000/");
      console.log();
    });
  }
})();
