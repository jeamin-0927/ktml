"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/webserver.ts
var webserver_exports = {};
__export(webserver_exports, {
  default: () => webserver_default
});
module.exports = __toCommonJS(webserver_exports);
var http = __toESM(require("http"), 1);
var import_fs = require("fs");
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
    await import_fs.promises.readFile(path);
  } catch (e) {
    console.log(`\u{1F534} \uC11C\uBC84 :: [404] ${url}`);
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("404 Not Found");
    return res.end();
  }
  const file = (await import_fs.promises.readFile(path)).toString();
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
//# sourceMappingURL=webserver.cjs.map
