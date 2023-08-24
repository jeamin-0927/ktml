import { File } from "../utils/types";

import elements from "./data/elements";
import attributes from "./data/attributes";
import global from "./data/gloabl";

import readFile from "../utils/readFile";
import writeFile from "../utils/writeFile";

const decode = async ( 
	path: string 
): Promise<File[]> => {
	const list = await readFile(path, "ktml");

	const newElements = [...elements].sort((a, b) => b[1].length - a[1].length);
	const newGlobal = [...global].sort((a, b) => b[1].length - a[1].length);
	const newAttributes = [...attributes].sort((a, b) => b[1].length - a[1].length);

	for(const file of list) {
		for(const [htmlGlobal, ktmlGlobal] of newGlobal) {
			file.content = file.content.replace(new RegExp(ktmlGlobal, "g"), htmlGlobal);
		}

		for(const [htmlElements, ktmlElements] of newElements) {
			file.content = file.content.replace(new RegExp(`<${ktmlElements}`, "g"), `<${htmlElements}`);
			file.content = file.content.replace(new RegExp(`</${ktmlElements}`, "g"), `</${htmlElements}`);
		};

		for(const [htmlAttributes, ktmlAttributes] of newAttributes) {
			file.content = file.content.replace(new RegExp(`<([^>]*)${ktmlAttributes}([^>]*)>`, 'g'), `<$1${htmlAttributes}$2>`);
		}

		console.log(`🛠️  복호화 :: .${file.filePath} (${file.content.length.toLocaleString()} 바이트)`);
	}
	console.log(`🛠️  복호화 :: ${list.length}개의 파일을 복호화했어요.`);
	console.log();

	await writeFile(path, list, "ktml", "html");

	return list;
}

export default decode;
