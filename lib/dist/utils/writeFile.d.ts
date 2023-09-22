import type { File } from "./types";
declare const writeFile: (path: string, list: File[], oldExtension: string, newExtension: string) => Promise<void>;
export default writeFile;
