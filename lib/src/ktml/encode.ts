import { File } from "../utils/types";
import readFile from "../utils/readFile";
import writeFile from "../utils/writeFile";

import elements from "./data/elements";
import attributes from "./data/attributes";
import global from "./data/gloabl";

const encode = async ( 
  path: string 
): Promise<File[]> => {
  const list = await readFile(path, "html");

  const newElements = [...elements].sort((a, b) => b[0].length - a[0].length);
  const newGlobal = [...global].sort((a, b) => b[0].length - a[0].length);
  const newAttributes = [...attributes].sort((a, b) => b[0].length - a[0].length);

  for(const file of list) {
    for(const [htmlGlobal, ktmlGlobal] of newGlobal) {
      file.content = file.content.replace(new RegExp(htmlGlobal, "g"), ktmlGlobal);
    }

    for(const [htmlElements, ktmlElements] of newElements) {
      file.content = file.content.replace(new RegExp(`<${htmlElements}`, "g"), `<${ktmlElements}`);
      file.content = file.content.replace(new RegExp(`</${htmlElements}`, "g"), `</${ktmlElements}`);
    };

    for(const [htmlAttributes, ktmlAttributes] of newAttributes) {
      file.content = file.content.replace(new RegExp(`<([^>]*)${htmlAttributes}([^>]*)>`, 'g'), `<$1${ktmlAttributes}$2>`);
    }

    console.log(`🛠️  암호화 :: .${file.filePath} (${file.content.length.toLocaleString()} 바이트)`);
  }
  console.log(`🛠️  암호화 :: ${list.length}개의 파일을 암호화했어요.`);
  console.log();

  await writeFile(path, list, "html", "ktml");

  return list;
}

export default encode;
