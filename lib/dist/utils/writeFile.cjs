"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/writeFile.ts
var writeFile_exports = {};
__export(writeFile_exports, {
  default: () => writeFile_default
});
module.exports = __toCommonJS(writeFile_exports);
var import_fs = require("fs");
var writeFile = async (path, list, oldExtension, newExtension) => {
  try {
    const copy = [...list];
    path = path.replace("/", "");
    try {
      await import_fs.promises.rm("./build", { recursive: true });
    } catch (e) {
      console.error(`\u{1F4E6} \uB9CC\uB4E4\uAE30 :: \uC624\uB958: ${e.message}`);
    }
    for (const file of copy) {
      const filePath = `./build${file.filePath.replace(new RegExp(oldExtension, "g"), newExtension)}`;
      const content = file.content;
      await import_fs.promises.mkdir(filePath.replace(/\/[^/]+$/, ""), { recursive: true });
      await import_fs.promises.writeFile(filePath, content);
      console.log(`\u{1F4E6} \uB9CC\uB4E4\uAE30 :: ${filePath} (${content.length.toLocaleString()} \uBC14\uC774\uD2B8)`);
    }
    console.log(`\u{1F4E6} \uB9CC\uB4E4\uAE30 :: ${copy.length}\uAC1C\uC758 \uD30C\uC77C\uC744 \uB9CC\uB4E4\uC5C8\uC5B4\uC694.
`);
  } catch (e) {
    console.error(`\u{1F4E6} \uB9CC\uB4E4\uAE30 :: \uC624\uB958: ${e.message}`);
  }
};
var writeFile_default = writeFile;
//# sourceMappingURL=writeFile.cjs.map
