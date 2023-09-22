import readFile from "../utils/readFile";
import { File } from "../utils/types";
import writeFile from "../utils/writeFile";

import * as elements from "./data/attributes";
import globalAttr from "./data/attributes/global";
import global from "./data/gloabl";

const elementsList = Object.values(elements);
const newGlobal = [...global].sort((a, b) => b[1].length - a[1].length);

export const decodeFile = (
  content: string
) => {
  for(const [html, ktml] of newGlobal) {
    const regex = new RegExp(ktml, "g");
    content = content.replace(regex, html);
  }
  for(const attribute of globalAttr) {
    const regex = new RegExp(`<([^>]*)${attribute.kr}([^>]*)>`, "g");
    content = content.replace(regex, `<$1${attribute.en}$2>`);
  }
  for(const element of elementsList) {
    const pattern = new RegExp(`<(/?)${element.kr}[^>]*>`, "g");
    const originMatches = content.match(pattern);
    const matches = content.match(pattern);
    if(!matches || !originMatches) continue;
    for(let i = 0; i < matches.length; i++) {
      const regex = new RegExp(`<(/?)${element.kr}`, "g");
      matches[i] = matches[i].replace(regex, `<$1${element.en}`);
      for(const attribute of element.attributes.sort((a, b) => b.kr.length - a.kr.length)) {
        const pattern = new RegExp(`${attribute.kr}="([^"]*)"`, "g");
        const originMatchesAttribute = matches[i].match(pattern);
        const matchesAttribute = matches[i].match(pattern);
        if(!originMatchesAttribute || !matchesAttribute) continue;
        for(let j = 0; j < originMatchesAttribute.length; j++) {
          const regex = new RegExp(`${attribute.kr}`, "g");
          matchesAttribute[j] = originMatchesAttribute[j].replace(regex, `${attribute.en}`);
          for(const child of attribute.children) {
            const regex = new RegExp(`"${child.kr}"`, "g");
            matchesAttribute[j] = matchesAttribute[j].replace(regex, `"${child.en}"`);
          }
          matches[i] = matches[i].replace(originMatchesAttribute[j], matchesAttribute[j]);
        }
      }
      content = content.replace(originMatches[i], matches[i]);
    }
  }
  return content;
};

const decode = async ( 
  path: string 
): Promise<File[]> => {
  const list = await readFile(path, "ktml");
  for(const file of list) {
    file.content = decodeFile(file.content);
    console.log(`🛠️  복호화 :: .${file.filePath} (${file.content.length.toLocaleString()} 바이트)`);
  }
  console.log(`🛠️  복호화 :: ${list.length}개의 파일을 복호화했어요.\n`);
  await writeFile(path, list, "ktml", "html");
  return list;
};

export default decode;
