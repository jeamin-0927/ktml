"use strict";var s=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var p=(t,e)=>{for(var r in e)s(t,r,{get:e[r],enumerable:!0})},u=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of f(e))!m.call(t,o)&&o!==r&&s(t,o,{get:()=>e[o],enumerable:!(i=g(e,o))||i.enumerable});return t};var w=t=>u(s({},"__esModule",{value:!0}),t);var y={};p(y,{default:()=>h});module.exports=w(y);var c=require("fs"),$=async(t,e,r,i)=>{try{let o=[...e];t=t.replace("/","");try{await c.promises.rm("./build",{recursive:!0})}catch{}for(let l of o){let n=`./build${l.filePath.replace(new RegExp(r,"g"),i)}`,a=l.content;await c.promises.mkdir(n.replace(/\/[^/]+$/,""),{recursive:!0}),await c.promises.writeFile(n,a),console.log(`\u{1F4E6} \uB9CC\uB4E4\uAE30 :: ${n} (${a.length.toLocaleString()} \uBC14\uC774\uD2B8)`)}console.log(`\u{1F4E6} \uB9CC\uB4E4\uAE30 :: ${o.length}\uAC1C\uC758 \uD30C\uC77C\uC744 \uB9CC\uB4E4\uC5C8\uC5B4\uC694.`),console.log()}catch(o){console.error(`\u{1F4E6} \uB9CC\uB4E4\uAE30 :: \uC624\uB958: ${o.message}`)}},h=$;
//# sourceMappingURL=writeFile.cjs.map
