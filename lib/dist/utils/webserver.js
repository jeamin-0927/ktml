// src/utils/webserver.ts
import * as http from "http";
import { promises as fs } from "fs";
var server = http.createServer();
var request = async (req, res) => {
  const { url } = req;
  let path = `./build${url?.replace(/.ktml/g, ".html")}`;
  const extension = url?.split(".").pop();
  const isIndex = url?.endsWith("/");
  if (isIndex) {
    path = `./build${url}index.html`;
  }
  try {
    await fs.readFile(path);
  } catch (e) {
    console.log(`\u{1F534} \uC11C\uBC84 :: [404] ${url}`);
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("404 Not Found");
    return res.end();
  }
  const file = (await fs.readFile(path)).toString();
  console.log(`\u{1F7E2} \uC11C\uBC84 :: [200] ${url}`);
  if (extension === "html") {
    res.writeHead(200, { "Content-Type": "text/html" });
  }
  res.write(file);
  return res.end();
};
var start = () => {
  console.log("\u{1F6DC} \uC11C\uBC84 :: \uC6F9 \uC11C\uBC84\uAC00 \uD3EC\uD2B8 3000\uBC88\uC5D0\uC11C \uC2DC\uC791\uB410\uC5B4\uC694.");
  console.log("\u{1F6DC} \uC11C\uBC84 :: http://localhost:3000/");
  console.log();
};
var webserver = async () => {
  server.on("request", request);
  server.listen(3e3, start);
};
var webserver_default = webserver;
export {
  webserver_default as default
};
//# sourceMappingURL=webserver.js.map
