"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/html/data/elements.ts
var elements = Object.entries({
  "a": "\uC5F0\uACB0",
  "abbr": "\uC57D\uC5B4",
  "address": "\uC8FC\uC18C",
  "area": "\uC601\uC5ED",
  "article": "\uAE30\uC0AC",
  "aside": "\uC5EC\uB2F4",
  "audio": "\uC18C\uB9AC",
  "b": "\uAD75\uAC8C",
  "base": "\uAE30\uBCF8",
  "bdi": "\uD14D\uC2A4\uD2B8\uBC29\uD5A5",
  "bdo": "\uBC29\uD5A5\uC81C\uC5B4",
  "blockquote": "\uC778\uC6A9",
  "body": "\uBAB8\uD1B5",
  "br": "\uC904\uBC14\uAFC8",
  "button": "\uBC84\uD2BC",
  "canvas": "\uADF8\uB9BC\uD310",
  "caption": "\uC544\uB798\uC124\uBA85",
  "cite": "\uC778\uC6A9",
  "code": "\uCF54\uB4DC",
  "col": "\uC5F4",
  "colgroup": "\uC5F4\uADF8\uB8F9",
  "data": "\uAC12",
  "datalist": "\uAC12\uBAA9\uB85D",
  "dd": "\uC124\uBA85",
  "del": "\uC0AD\uC81C",
  "details": "\uC138\uBD80\uC815\uBCF4",
  "dfn": "\uC815\uC758",
  "dialog": "\uB300\uD654",
  "div": "\uAD6C\uC5ED",
  "dl": "\uC6A9\uC5B4\uBAA9\uB85D",
  "dt": "\uC6A9\uC5B4",
  "em": "\uAC15\uC870",
  "embed": "\uC0BD\uC785",
  "fieldset": "\uB4E4\uD310\uC138\uD2B8",
  "figcaption": "\uADF8\uB9BC\uC124\uBA85",
  "figure": "\uADF8\uB9BC",
  "footer": "\uBC14\uB2E5\uAE00",
  "form": "\uBC29\uC2DD",
  "h1": "\uC81C\uBAA91",
  "h2": "\uC81C\uBAA92",
  "h3": "\uC81C\uBAA93",
  "h4": "\uC81C\uBAA94",
  "h5": "\uC81C\uBAA95",
  "h6": "\uC81C\uBAA96",
  "head": "\uBA38\uB9AC",
  "header": "\uBA38\uB9BF\uB9D0",
  "hgroup": "\uC81C\uBAA9\uADF8\uB8F9",
  "hr": "\uAD6C\uBD84\uC120",
  "html": "\uBB38\uC11C",
  "i": "\uAE30\uC6B8\uC774\uAE30",
  "iframe": "\uD2C0",
  "img": "\uC0AC\uC9C4",
  "input": "\uC785\uB825",
  "ins": "\uC0BD\uC785",
  "kbd": "\uD0A4\uBCF4\uB4DC",
  "label": "\uB531\uC9C0",
  "legend": "\uBC94\uB840",
  "li": "\uBAA9\uB85D",
  "link": "\uC5F0\uACB0",
  "main": "\uC8FC\uC694",
  "map": "\uC57D\uB3C4",
  "mark": "\uD45C\uC2DC",
  "menu": "\uBA54\uB274",
  "meta": "\uC815\uBCF4",
  "meter": "\uACC4\uB7C9",
  "nav": "\uAE38\uCC3E\uAE30",
  "nobr": "\uC904\uBC14\uAFC8\uC5C6\uC74C",
  "noembed": "\uC0BD\uC785\uC5C6\uC74C",
  "noframes": "\uD2C0\uC5C6\uC74C",
  "noscript": "\uBA85\uB839\uC5B4\uC5C6\uC74C",
  "object": "\uAC1D\uCCB4",
  "ol": "\uC815\uB82C\uBAA9\uB85D",
  "optgroup": "\uC635\uC158\uADF8\uB8F9",
  "option": "\uC120\uD0DD\uD56D\uBAA9",
  "output": "\uCD9C\uB825",
  "p": "\uB2E8\uB77D",
  "param": "\uB9E4\uAC1C\uBCC0\uC218",
  "picture": "\uADF8\uB9BC",
  "plaintext": "\uD3C9\uBB38",
  "portal": "\uC815\uBB38",
  "pre": "\uC11C\uC2DD\uC720\uC9C0",
  "progress": "\uC9C4\uD589",
  "q": "\uC778\uC6A9",
  "rp": "\uAD04\uD638",
  "rt": "\uB8E8\uBE44\uD14D\uC2A4\uD2B8",
  "ruby": "\uB8E8\uBE44",
  "s": "\uCDE8\uC18C\uC120",
  "samp": "\uC608\uC2DC",
  "script": "\uBA85\uB839\uC5B4",
  "search": "\uAC80\uC0C9",
  "section": "\uAD6C\uBD84",
  "select": "\uC120\uD0DD",
  "slot": "\uAD6C\uBA4D",
  "small": "\uC791\uAC8C",
  "source": "\uC6D0\uCC9C",
  "span": "\uBC94\uC704",
  "strong": "\uAC15\uC870",
  "style": "\uC2A4\uD0C0\uC77C",
  "sub": "\uC544\uB798\uCCA8\uC790",
  "summary": "\uC694\uC57D",
  "sup": "\uC704\uCCA8\uC790",
  "table": "\uD45C",
  "tbody": "\uD46C\uBAB8\uD1B5",
  "td": "\uD45C\uAC12",
  "template": "\uACAC\uBCF8",
  "textarea": "\uD14D\uC2A4\uD2B8\uC601\uC5ED",
  "tfoot": "\uD45C\uBC14\uB2E5\uAE00",
  "th": "\uD45C\uC81C\uBAA9",
  "thead": "\uD45C\uBA38\uB9AC",
  "time": "\uC2DC\uAC04",
  "title": "\uC81C\uBAA9",
  "tr": "\uD45C\uD589",
  "track": "\uAE38",
  "u": "\uBC11\uC904",
  "ul": "\uBAA9\uB85D",
  "var": "\uBCC0\uC218",
  "video": "\uC601\uC0C1",
  "wbr": "\uC904\uBC14\uAFC8\uC81C\uC548",
  "xmp": "\uC608\uC2DC"
});
var elements_default = elements;

// src/html/data/attributes.ts
var attributes = Object.entries({
  "accesskey": "\uC811\uADFC\uD0A4",
  "autocapitalize": "\uC790\uB3D9\uB300\uBB38\uC790",
  "autofocus": "\uC790\uB3D9\uCD08\uC810",
  "class": "\uACC4\uCE35",
  "content": "\uB0B4\uC6A9",
  "contenteditable": "\uB0B4\uC6A9\uD3B8\uC9D1\uC5EC\uBD80",
  "charset": "\uBB38\uC790\uBB36\uC74C",
  "dir": "\uBC29\uD5A5",
  "draggable": "\uB4DC\uB798\uADF8\uC5EC\uBD80",
  "enterkeyhint": "\uC5D4\uD130\uD0A4\uD78C\uD2B8",
  "exportparts": "\uBD80\uBD84\uB0B4\uBCF4\uB0B4\uAE30",
  "hidden": "\uC228\uAE40",
  "id": "\uC544\uC774\uB514",
  "inert": "\uBE44\uD65C\uC131",
  "inputmode": "\uC785\uB825\uBAA8\uB4DC",
  "is": "\uB3D9\uC791",
  "itemid": "\uD56D\uBAA9\uC544\uC774\uB514",
  "itemprop": "\uD56D\uBAA9\uC18D\uC131",
  "itemref": "\uD56D\uBAA9\uCC38\uC870",
  "itemscope": "\uD56D\uBAA9\uBC94\uC704",
  "itemtype": "\uD56D\uBAA9\uC720\uD615",
  "initial-scale": "\uCD08\uAE30\uCD95\uCC99",
  "lang": "\uC5B8\uC5B4",
  "nonce": "\uC784\uC2DC",
  "part": "\uBD80\uBD84",
  "popover": "\uB744\uC6B0\uAE30",
  "slot": "\uC7A5\uC18C",
  "spellcheck": "\uCCA0\uC790\uD655\uC778",
  "style": "\uC2A4\uD0C0\uC77C",
  "tabindex": "\uBB36\uC74C\uC21C\uC11C",
  "title": "\uC81C\uBAA9",
  "translate": "\uBC88\uC5ED",
  "virtualkeyboardpolicy": "\uAC00\uC0C1\uD0A4\uBCF4\uB4DC\uC815\uCC45",
  "src": "\uC8FC\uC18C",
  "name": "\uC774\uB984"
});
var attributes_default = attributes;

// src/html/data/gloabl.ts
var global = Object.entries({
  "<!DOCTYPE html>": "<!\uBB38\uC11C \uC885\uB958: \uD55C\uAE00 \uB9C8\uD06C\uC5C5 \uC5B8\uC5B4>"
});
var gloabl_default = global;

// src/utils/readFile.ts
var import_fs = require("fs");
var readFile = async (path, extension) => {
  const list = [];
  path = path.replace("/", "");
  const check = async (innerPath) => {
    try {
      const files = await import_fs.promises.readdir(innerPath);
      for (const file of files) {
        const filePath = `${innerPath}/${file}`;
        const stat = await import_fs.promises.stat(filePath);
        if (stat.isDirectory()) {
          await check(filePath);
          continue;
        }
        if (file.split(".").pop() !== extension)
          continue;
        list.push({
          filePath: filePath.replace(path, ""),
          content: (await import_fs.promises.readFile(filePath, "utf-8")).replace(/\r?\n|\t|\r/g, "")
        });
        console.log(`\u{1F4DA} \uC77D\uAE30 :: ./${filePath} (${list[list.length - 1].content.length.toLocaleString()} \uBC14\uC774\uD2B8)`);
      }
    } catch (err) {
      console.error(`\u{1F4DA} \uC77D\uAE30 :: \uC624\uB958: ${err.message}`);
    }
  };
  await check(path);
  console.log(`\u{1F4DA} \uC77D\uAE30 :: ${list.length.toLocaleString()}\uAC1C\uC758 \uD30C\uC77C\uC744 \uC77D\uC5C8\uC5B4\uC694.`);
  console.log();
  return list;
};
var readFile_default = readFile;

// src/utils/writeFile.ts
var import_fs2 = require("fs");
var writeFile = async (path, list, oldExtension, newExtension) => {
  try {
    const copy = [...list];
    path = path.replace("/", "");
    try {
      await import_fs2.promises.rm(`./build`, { recursive: true });
    } catch (e) {
    }
    for (const file of copy) {
      const filePath = `./build${file.filePath.replace(new RegExp(oldExtension, "g"), newExtension)}`;
      const content = file.content;
      await import_fs2.promises.mkdir(filePath.replace(/\/[^/]+$/, ""), { recursive: true });
      await import_fs2.promises.writeFile(filePath, content);
      console.log(`\u{1F4E6} \uB9CC\uB4E4\uAE30 :: ${filePath} (${content.length.toLocaleString()} \uBC14\uC774\uD2B8)`);
    }
    console.log(`\u{1F4E6} \uB9CC\uB4E4\uAE30 :: ${copy.length}\uAC1C\uC758 \uD30C\uC77C\uC744 \uB9CC\uB4E4\uC5C8\uC5B4\uC694.`);
    console.log();
  } catch (e) {
    console.error(`\u{1F4E6} \uB9CC\uB4E4\uAE30 :: \uC624\uB958: ${e.message}`);
  }
};
var writeFile_default = writeFile;

// src/html/decode.ts
var decode = async (path) => {
  const list = await readFile_default(path, "ktml");
  const newElements = [...elements_default].sort((a, b) => b[1].length - a[1].length);
  const newGlobal = [...gloabl_default].sort((a, b) => b[1].length - a[1].length);
  const newAttributes = [...attributes_default].sort((a, b) => b[1].length - a[1].length);
  for (const file of list) {
    for (const [htmlGlobal, ktmlGlobal] of newGlobal) {
      file.content = file.content.replace(new RegExp(ktmlGlobal, "g"), htmlGlobal);
    }
    for (const [htmlElements, ktmlElements] of newElements) {
      file.content = file.content.replace(new RegExp(`<${ktmlElements}`, "g"), `<${htmlElements}`);
      file.content = file.content.replace(new RegExp(`</${ktmlElements}`, "g"), `</${htmlElements}`);
    }
    ;
    for (const [htmlAttributes, ktmlAttributes] of newAttributes) {
      file.content = file.content.replace(new RegExp(`<([^>]*)${ktmlAttributes}([^>]*)>`, "g"), `<$1${htmlAttributes}$2>`);
    }
    console.log(`\u{1F6E0}\uFE0F  \uBCF5\uD638\uD654 :: .${file.filePath} (${file.content.length.toLocaleString()} \uBC14\uC774\uD2B8)`);
  }
  console.log(`\u{1F6E0}\uFE0F  \uBCF5\uD638\uD654 :: ${list.length}\uAC1C\uC758 \uD30C\uC77C\uC744 \uBCF5\uD638\uD654\uD588\uC5B4\uC694.`);
  console.log();
  await writeFile_default(path, list, "ktml", "html");
  return list;
};
var decode_default = decode;

// src/html/encode.ts
var encode = async (path) => {
  const list = await readFile_default(path, "html");
  const newElements = [...elements_default].sort((a, b) => b[0].length - a[0].length);
  const newGlobal = [...gloabl_default].sort((a, b) => b[0].length - a[0].length);
  const newAttributes = [...attributes_default].sort((a, b) => b[0].length - a[0].length);
  for (const file of list) {
    for (const [htmlGlobal, ktmlGlobal] of newGlobal) {
      file.content = file.content.replace(new RegExp(htmlGlobal, "g"), ktmlGlobal);
    }
    for (const [htmlElements, ktmlElements] of newElements) {
      file.content = file.content.replace(new RegExp(`<${htmlElements}`, "g"), `<${ktmlElements}`);
      file.content = file.content.replace(new RegExp(`</${htmlElements}`, "g"), `</${ktmlElements}`);
    }
    ;
    for (const [htmlAttributes, ktmlAttributes] of newAttributes) {
      file.content = file.content.replace(new RegExp(`<([^>]*)${htmlAttributes}([^>]*)>`, "g"), `<$1${ktmlAttributes}$2>`);
    }
    console.log(`\u{1F6E0}\uFE0F  \uC554\uD638\uD654 :: .${file.filePath} (${file.content.length.toLocaleString()} \uBC14\uC774\uD2B8)`);
  }
  console.log(`\u{1F6E0}\uFE0F  \uC554\uD638\uD654 :: ${list.length}\uAC1C\uC758 \uD30C\uC77C\uC744 \uC554\uD638\uD654\uD588\uC5B4\uC694.`);
  console.log();
  await writeFile_default(path, list, "html", "ktml");
  return list;
};
var encode_default = encode;

// src/utils/webserver.ts
var http = __toESM(require("http"), 1);
var import_fs3 = require("fs");
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
    await import_fs3.promises.readFile(path);
  } catch (e) {
    console.log(`\u{1F534} \uC11C\uBC84 :: [404] ${url}`);
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("404 Not Found");
    return res.end();
  }
  const file = (await import_fs3.promises.readFile(path)).toString();
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

// src/index.ts
var fs4 = __toESM(require("fs"), 1);
(async () => {
  console.clear();
  console.log(`\u{1F60F}  \uD55C\uAE00 \uB9C8\uD06C\uC5C5 \uC5B8\uC5B4 v.1.1.1 \u{1F60F}`);
  console.log();
  let dir, type;
  if (process.argv[3]) {
    dir = process.argv[3] || __dirname;
    type = process.argv[2] === "encode" ? encode_default : process.argv[2] === "decode" ? decode_default : () => {
    };
    await type(dir);
  } else {
    dir = process.argv[2] || __dirname;
    await decode_default(dir);
    await webserver_default();
    const watcher = fs4.watch(dir, { recursive: true });
    watcher.on("change", async (event, filename) => {
      console.clear();
      console.log(`\u{1F60F}  \uD55C\uAE00 \uB9C8\uD06C\uC5C5 \uC5B8\uC5B4 v.1.1.1 \u{1F60F}`);
      console.log();
      await decode_default(dir);
      console.log("\u{1F6DC} \uC11C\uBC84 :: \uC6F9 \uC11C\uBC84\uAC00 \uD3EC\uD2B8 3000\uBC88\uC5D0\uC11C \uC2DC\uC791\uB410\uC5B4\uC694.");
      console.log("\u{1F6DC} \uC11C\uBC84 :: http://localhost:3000/");
      console.log();
    });
  }
})();
//# sourceMappingURL=index.cjs.map
