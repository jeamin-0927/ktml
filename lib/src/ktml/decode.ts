import { File } from "../utils/types";
import readFile from "../utils/readFile";
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
    const regex = new RegExp(`<([^>]*)${attribute.kr}([^>]*)>`, 'g');
    content = content.replace(regex, `<$1${attribute.en}$2>`);
  }

  for(const element of elementsList) {
    const regex1 = new RegExp(`<${element.kr}`, "g");
    const regex2 = new RegExp(`</${element.kr}`, "g");
    content = content.replace(regex1, `<${element.en}`);
    content = content.replace(regex2, `</${element.en}`);

    for(const attribute of element.attributes) {
      const regex = new RegExp(`<([^>]*)${attribute.kr}([^>]*)>`, 'g');
      content = content.replace(regex, `<$1${attribute.en}$2>`);

      for(const child of attribute.children) {
        const regex = new RegExp(`(?<=<[^>]*=")${child.kr}(?="[^>]*>)`, 'g');
        content = content.replace(regex, child.en);
      }
    }
  }

  return content;
}

const decode = async ( 
  path: string 
): Promise<File[]> => {
  const list = await readFile(path, "ktml");

  for(const file of list) {
    file.content = decodeFile(file.content);
    console.log(`🛠️  복호화 :: .${file.filePath} (${file.content.length.toLocaleString()} 바이트)`);
  }
  console.log(`🛠️  복호화 :: ${list.length}개의 파일을 복호화했어요.`);
  console.log();

  await writeFile(path, list, "ktml", "html");

  return list;
}

export default decode;
