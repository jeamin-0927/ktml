import decode from "./html/decode";
import encode from "./html/encode";
import webserver, { stop } from "./utils/webserver";
import * as fs from 'fs';

(async () => {
  console.clear();
  console.log(`😏  한글 마크업 언어 v.1.1.1 😏`);
  console.log();

  let dir: string, type: Function;
  if(process.argv[3]) {
    dir = process.argv[3] || __dirname;
    type = process.argv[2] === "encode" ? encode : 
    process.argv[2] === "decode" ? decode : () => {};
    await type(dir);
  }
  else {
    dir = process.argv[2] || __dirname;
    await decode(dir);
    await webserver();

    const watcher = fs.watch(dir, { recursive: true });
    watcher.on("change", async (event, filename) => {
      console.clear();
      console.log(`😏  한글 마크업 언어 v.1.1.1 😏`);
      console.log();
      await decode(dir);
      console.log("🛜 서버 :: 웹 서버가 포트 3000번에서 시작됐어요.");
      console.log("🛜 서버 :: http://localhost:3000/");
      console.log();
    });
  }
})();
