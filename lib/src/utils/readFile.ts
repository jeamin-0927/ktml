import { promises as fs } from "fs";
import { File } from "./types";

const readFile = async ( 
	path: string,
	extension: string
): Promise<File[]> => {
	const list: File[] = [];
	path = path.replace("/", "");
	const check = async ( innerPath: string ) => {
		try{
			const files = await fs.readdir(innerPath);
			for (const file of files) {
				const filePath = `${innerPath}/${file}`;
				const stat = await fs.stat(filePath);
	
				if (stat.isDirectory()) {
					await check(filePath);
					continue;
				} 
	
				if (file.split('.').pop() !== extension) continue;
	
				list.push({
					filePath: filePath.replace(path, ""),
					content: (await fs.readFile(filePath, 'utf-8')).replace(/\r?\n|\t|\r/g, "")
				});

				console.log(`📚 읽기 :: ./${filePath} (${list[list.length - 1].content.length.toLocaleString()} 바이트)`);
			}
		}
		catch(err: any) {
			console.error(`📚 읽기 :: 오류: ${err.message}`);
		}
	}
	await check(path);
	console.log(`📚 읽기 :: ${list.length.toLocaleString()}개의 파일을 읽었어요.`);
	console.log();

	return list;
};

export default readFile;
