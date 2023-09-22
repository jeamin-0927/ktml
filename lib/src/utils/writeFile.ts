import type { File } from "./types";

import { promises as fs } from "fs";

const writeFile = async ( 
  path: string,
  list: File[],
  oldExtension: string,
  newExtension: string
) => {
  try{
    const copy = [...list];
    path = path.replace("/", "");
    try{
      await fs.rm("./build", { recursive: true });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch(e: any) {
      console.error(`📦 만들기 :: 오류: ${e.message}`);
    }  
    for(const file of copy) {
      const filePath = `./build${file.filePath.replace(new RegExp(oldExtension, "g"), newExtension)}`;
      const content = file.content;
      await fs.mkdir(filePath.replace(/\/[^/]+$/, ""), { recursive: true });
      await fs.writeFile(filePath, content);
      console.log(`📦 만들기 :: ${filePath} (${content.length.toLocaleString()} 바이트)`);
    }
    console.log(`📦 만들기 :: ${copy.length}개의 파일을 만들었어요.\n`);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch(e: any) {
    console.error(`📦 만들기 :: 오류: ${e.message}`);
  }
};

export default writeFile;
