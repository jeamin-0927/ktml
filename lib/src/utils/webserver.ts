import * as http from 'http'
import { promises as fs } from "fs";

const server = http.createServer();

const request =  async ( 
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  const { url } = req;
  let path = `./build${url?.replace(/.ktml/g, ".html")}`;
  const extension = url?.split(".").pop();
  const isIndex = url?.endsWith("/");

  if(isIndex) {
    path = `./build${url}index.html`;
  }

  try{
    await fs.readFile(path);
  }
  catch(e) {
    console.log(`🔴 서버 :: [404] ${url}`);
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write("404 Not Found");
    return res.end();
  }

  const file = (await fs.readFile(path)).toString();
  
  console.log(`🟢 서버 :: [200] ${url}`);

  if(extension === "html") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
  }

  res.write(file);
  return res.end();
}

const start = () => {
  console.log("🛜 서버 :: 웹 서버가 포트 3000번에서 시작됐어요.");
  console.log("🛜 서버 :: http://localhost:3000/");
  console.log();
}

const webserver = async () => {
  server.on('request', request);
  server.listen(3000, start);
}

export default webserver;
