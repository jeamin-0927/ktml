// src/utils/readFile.ts
import { promises as fs } from "fs";
var readFile = async (path, extension) => {
  const list = [];
  path = path.replace("/", "");
  const check = async (innerPath) => {
    try {
      const files = await fs.readdir(innerPath);
      for (const file of files) {
        const filePath = `${innerPath}/${file}`;
        const stat = await fs.stat(filePath);
        if (stat.isDirectory()) {
          await check(filePath);
          continue;
        }
        if (file.split(".").pop() !== extension)
          continue;
        list.push({
          filePath: filePath.replace(path, ""),
          content: (await fs.readFile(filePath, "utf-8")).replace(/\r?\n|\t|\r/g, "")
        });
        console.log(`\u{1F4DA} \uC77D\uAE30 :: ./${filePath} (${list[list.length - 1].content.length.toLocaleString()} \uBC14\uC774\uD2B8)`);
      }
    } catch (err) {
      console.error(`\u{1F4DA} \uC77D\uAE30 :: \uC624\uB958: ${err.message}`);
    }
  };
  await check(path);
  console.log(`\u{1F4DA} \uC77D\uAE30 :: ${list.length.toLocaleString()}\uAC1C\uC758 \uD30C\uC77C\uC744 \uC77D\uC5C8\uC5B4\uC694.
`);
  return list;
};
var readFile_default = readFile;

// src/utils/writeFile.ts
import { promises as fs2 } from "fs";
var writeFile = async (path, list, oldExtension, newExtension) => {
  try {
    const copy = [...list];
    path = path.replace("/", "");
    try {
      await fs2.rm("./build", { recursive: true });
    } catch (e) {
      console.error(`\u{1F4E6} \uB9CC\uB4E4\uAE30 :: \uC624\uB958: ${e.message}`);
    }
    for (const file of copy) {
      const filePath = `./build${file.filePath.replace(new RegExp(oldExtension, "g"), newExtension)}`;
      const content = file.content;
      await fs2.mkdir(filePath.replace(/\/[^/]+$/, ""), { recursive: true });
      await fs2.writeFile(filePath, content);
      console.log(`\u{1F4E6} \uB9CC\uB4E4\uAE30 :: ${filePath} (${content.length.toLocaleString()} \uBC14\uC774\uD2B8)`);
    }
    console.log(`\u{1F4E6} \uB9CC\uB4E4\uAE30 :: ${copy.length}\uAC1C\uC758 \uD30C\uC77C\uC744 \uB9CC\uB4E4\uC5C8\uC5B4\uC694.
`);
  } catch (e) {
    console.error(`\u{1F4E6} \uB9CC\uB4E4\uAE30 :: \uC624\uB958: ${e.message}`);
  }
};
var writeFile_default = writeFile;

// src/ktml/data/elements.ts
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
  "style": "\uAFB8\uBBF8\uAE30",
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

// src/ktml/data/gloabl.ts
var global = Object.entries({
  "<!DOCTYPE html>": "<!\uBB38\uC11C \uC885\uB958: \uD55C\uAE00 \uB9C8\uD06C\uC5C5 \uC5B8\uC5B4>"
});
var gloabl_default = global;

// src/ktml/data/globalAttributes.ts
var globalAttributes = Object.entries({
  // Global Attributes (events)
  "onabort": "\uC911\uB2E8\uC2DC",
  "onautocomplete": "\uC790\uB3D9\uC644\uC131\uC2DC",
  "onautocompleteerror": "\uC790\uB3D9\uC644\uC131\uC624\uB958\uC2DC",
  "onblur": "\uD3EC\uCEE4\uC2A4\uC783\uC744\uC2DC",
  "oncancel": "\uCDE8\uC18C\uC2DC",
  "oncanplay": "\uC7AC\uC0DD\uAC00\uB2A5\uC2DC",
  "oncanplaythrough": "\uB05D\uAE4C\uC9C0\uC7AC\uC0DD\uAC00\uB2A5\uC2DC",
  "onchange": "\uBCC0\uACBD\uC2DC",
  "onclick": "\uD074\uB9AD\uC2DC",
  "onclose": "\uB2EB\uD790\uC2DC",
  "oncontextmenu": "\uCEE8\uD14D\uC2A4\uD2B8\uBA54\uB274\uC2DC",
  "oncuechange": "\uD050\uBCC0\uACBD\uC2DC",
  "ondblclick": "\uB354\uBE14\uD074\uB9AD\uC2DC",
  "ondrag": "\uB4DC\uB798\uADF8\uC2DC",
  "ondragend": "\uB4DC\uB798\uADF8\uC885\uB8CC\uC2DC",
  "ondragenter": "\uB4DC\uB798\uADF8\uC9C4\uC785\uC2DC",
  "ondragexit": "\uB4DC\uB798\uADF8\uB098\uAC08\uC2DC",
  "ondragleave": "\uB4DC\uB798\uADF8\uB5A0\uB0A0\uC2DC",
  "ondragover": "\uB4DC\uB798\uADF8\uC704\uC5D0\uC2DC",
  "ondragstart": "\uB4DC\uB798\uADF8\uC2DC\uC791\uC2DC",
  "ondrop": "\uB4DC\uB78D\uC2DC",
  "ondurationchange": "\uAE30\uAC04\uBCC0\uACBD\uC2DC",
  "onemptied": "\uBE44\uC6CC\uC9C8\uC2DC",
  "onended": "\uC885\uB8CC\uC2DC",
  "onerror": "\uC624\uB958\uC2DC",
  "onfocus": "\uD3EC\uCEE4\uC2A4\uC2DC",
  "oninput": "\uC785\uB825\uC2DC",
  "oninvalid": "\uBB34\uD6A8\uC2DC",
  "onkeydown": "\uD0A4\uB2E4\uC6B4\uC2DC",
  "onkeypress": "\uD0A4\uC785\uB825\uC2DC",
  "onkeyup": "\uD0A4\uC5C5\uC2DC",
  "onload": "\uBD88\uB7EC\uC654\uC744\uC2DC",
  "onloadeddata": "\uAC12\uBD88\uB7EC\uC624\uAE30\uC644\uB8CC\uC2DC",
  "onloadedmetadata": "\uC815\uBCF4\uBD88\uB7EC\uC624\uAE30\uC644\uB8CC\uC2DC",
  "onloadstart": "\uBD88\uB7EC\uC624\uAE30\uC2DC\uC791\uC2DC",
  "onmousedown": "\uB9C8\uC6B0\uC2A4\uB2E4\uC6B4\uC2DC",
  "onmouseenter": "\uB9C8\uC6B0\uC2A4\uC9C4\uC785\uC2DC",
  "onmouseleave": "\uB9C8\uC6B0\uC2A4\uB5A0\uB0A0\uC2DC",
  "onmousemove": "\uB9C8\uC6B0\uC2A4\uC774\uB3D9\uC2DC",
  "onmouseout": "\uB9C8\uC6B0\uC2A4\uC544\uC6C3\uC2DC",
  "onmouseover": "\uB9C8\uC6B0\uC2A4\uC624\uBC84\uC2DC",
  "onmouseup": "\uB9C8\uC6B0\uC2A4\uC5C5\uC2DC",
  "onmousewheel": "\uB9C8\uC6B0\uC2A4\uD720\uC2DC",
  "onpause": "\uC77C\uC2DC\uC815\uC9C0\uC2DC",
  "onplay": "\uC7AC\uC0DD\uC2DC",
  "onplaying": "\uC7AC\uC0DD\uC911\uC2DC",
  "onprogress": "\uC9C4\uD589\uC2DC",
  "onratechange": "\uC18D\uB3C4\uBCC0\uACBD\uC2DC",
  "onreset": "\uCD08\uAE30\uD654\uC2DC",
  "onresize": "\uD06C\uAE30\uBCC0\uACBD\uC2DC",
  "onscroll": "\uC2A4\uD06C\uB864\uC2DC",
  "onseeked": "\uD0D0\uC0C9\uC644\uB8CC\uC2DC",
  "onseeking": "\uD0D0\uC0C9\uC911\uC2DC",
  "onselect": "\uC120\uD0DD\uC2DC",
  "onshow": "\uD45C\uC2DC\uC2DC",
  "onsort": "\uC815\uB82C\uC2DC",
  "onstalled": "\uC911\uB2E8\uC2DC",
  "onsubmit": "\uC81C\uCD9C\uC2DC",
  "onsuspend": "\uC77C\uC2DC\uC911\uB2E8\uC2DC",
  "ontimeupdate": "\uC2DC\uAC04\uC5C5\uB370\uC774\uD2B8\uC2DC",
  "ontoggle": "\uD1A0\uAE00\uC2DC",
  "onvolumechange": "\uBCFC\uB968\uBCC0\uACBD\uC2DC",
  "onwaiting": "\uB300\uAE30\uC2DC",
  // Global Attributes (properties)
  "accesskey": "\uC811\uADFC\uD0A4",
  "autocapitalize": "\uC790\uB3D9\uB300\uBB38\uC790",
  "autofocus": "\uC790\uB3D9\uD3EC\uCEE4\uC2A4",
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
  "style": "\uAFB8\uBBF8\uAE30",
  "tabindex": "\uBB36\uC74C\uC21C\uC11C",
  "title": "\uC81C\uBAA9",
  "translate": "\uBC88\uC5ED",
  "virtualkeyboardpolicy": "\uAC00\uC0C1\uD0A4\uBCF4\uB4DC\uC815\uCC45"
});
var globalAttributes_default = globalAttributes;

// src/ktml/encode.ts
var encode = async (path) => {
  const list = await readFile_default(path, "html");
  const newElements = [...elements_default].sort((a, b) => b[0].length - a[0].length);
  const newGlobal = [...gloabl_default].sort((a, b) => b[0].length - a[0].length);
  const newAttributes = [...globalAttributes_default].sort((a, b) => b[0].length - a[0].length);
  for (const file of list) {
    for (const [htmlGlobal, ktmlGlobal] of newGlobal) {
      file.content = file.content.replace(new RegExp(htmlGlobal, "g"), ktmlGlobal);
    }
    for (const [htmlElements, ktmlElements] of newElements) {
      file.content = file.content.replace(new RegExp(`<${htmlElements}`, "g"), `<${ktmlElements}`);
      file.content = file.content.replace(new RegExp(`</${htmlElements}`, "g"), `</${ktmlElements}`);
    }
    for (const [htmlAttributes, ktmlAttributes] of newAttributes) {
      file.content = file.content.replace(new RegExp(`<([^>]*)${htmlAttributes}([^>]*)>`, "g"), `<$1${ktmlAttributes}$2>`);
    }
    console.log(`\u{1F6E0}\uFE0F  \uC554\uD638\uD654 :: .${file.filePath} (${file.content.length.toLocaleString()} \uBC14\uC774\uD2B8)`);
  }
  console.log(`\u{1F6E0}\uFE0F  \uC554\uD638\uD654 :: ${list.length}\uAC1C\uC758 \uD30C\uC77C\uC744 \uC554\uD638\uD654\uD588\uC5B4\uC694.
`);
  await writeFile_default(path, list, "html", "ktml");
  return list;
};
var encode_default = encode;
export {
  encode_default as default
};
//# sourceMappingURL=encode.js.map
