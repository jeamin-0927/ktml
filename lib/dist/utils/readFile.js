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
export {
  readFile_default as default
};
//# sourceMappingURL=readFile.js.map
