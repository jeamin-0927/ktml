import { File } from "../utils/types";
export declare const decodeFile: (content: string) => string;
declare const decode: (path: string) => Promise<File[]>;
export default decode;
