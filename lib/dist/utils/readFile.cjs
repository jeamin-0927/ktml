"use strict";var l=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var m=(t,e)=>{for(var o in e)l(t,o,{get:e[o],enumerable:!0})},u=(t,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of g(e))!p.call(t,i)&&i!==o&&l(t,i,{get:()=>e[i],enumerable:!(r=f(e,i))||r.enumerable});return t};var $=t=>u(l({},"__esModule",{value:!0}),t);var y={};m(y,{default:()=>w});module.exports=$(y);var n=require("fs"),d=async(t,e)=>{let o=[];t=t.replace("/","");let r=async i=>{try{let c=await n.promises.readdir(i);for(let a of c){let s=`${i}/${a}`;if((await n.promises.stat(s)).isDirectory()){await r(s);continue}a.split(".").pop()===e&&(o.push({filePath:s.replace(t,""),content:(await n.promises.readFile(s,"utf-8")).replace(/\r?\n|\t|\r/g,"")}),console.log(`\u{1F4DA} \uC77D\uAE30 :: ./${s} (${o[o.length-1].content.length.toLocaleString()} \uBC14\uC774\uD2B8)`))}}catch(c){console.error(`\u{1F4DA} \uC77D\uAE30 :: \uC624\uB958: ${c.message}`)}};return await r(t),console.log(`\u{1F4DA} \uC77D\uAE30 :: ${o.length.toLocaleString()}\uAC1C\uC758 \uD30C\uC77C\uC744 \uC77D\uC5C8\uC5B4\uC694.`),console.log(),o},w=d;
//# sourceMappingURL=readFile.cjs.map
