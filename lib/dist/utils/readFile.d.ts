import { File } from "./types";
declare const readFile: (path: string, extension: string) => Promise<File[]>;
export default readFile;
