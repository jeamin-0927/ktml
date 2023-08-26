import { File } from "../utils/types";
import readFile from "../utils/readFile";
import writeFile from "../utils/writeFile";

import elements from "./data/elements";
import attributes from "./data/attributes";
import global from "./data/gloabl";

const newElements = [...elements].sort((a, b) => b[1].length - a[1].length);
const newGlobal = [...global].sort((a, b) => b[1].length - a[1].length);
const newAttributes = [...attributes].sort((a, b) => b[1].length - a[1].length);

export const decodeFile = (
	content: string
) => {
	for(const [htmlGlobal, ktmlGlobal] of newGlobal) {
		const regex = new RegExp(ktmlGlobal, "g");
		content = content.replace(regex, htmlGlobal);
	}
	for(const [htmlElements, ktmlElements] of newElements) {
		const regex1 = new RegExp(`<${ktmlElements}`, "g");
		const regex2 = new RegExp(`</${ktmlElements}`, "g");
		content = content.replace(regex1, `<${htmlElements}`);
		content = content.replace(regex2, `</${htmlElements}`);
	}
	for(const [htmlAttributes, ktmlAttributes] of newAttributes) {
		const regex = new RegExp(`<([^>]*)${ktmlAttributes}([^>]*)>`, 'g');
		content = content.replace(regex, `<$1${htmlAttributes}$2>`);
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
