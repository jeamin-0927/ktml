"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/ktml/data/attributes/canvas.ts
var canvas_exports = {};
__export(canvas_exports, {
  default: () => canvas_default
});
module.exports = __toCommonJS(canvas_exports);
var data = {
  en: "canvas",
  kr: "\uB3C4\uD654\uC9C0",
  attributes: [
    {
      en: "height",
      kr: "\uB192\uC774",
      children: []
    },
    {
      en: "width",
      kr: "\uB108\uBE44",
      children: []
    }
  ]
};
var canvas_default = data;
//# sourceMappingURL=canvas.cjs.map
