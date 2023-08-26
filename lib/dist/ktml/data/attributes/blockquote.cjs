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

// src/ktml/data/attributes/blockquote.ts
var blockquote_exports = {};
__export(blockquote_exports, {
  default: () => blockquote_default
});
module.exports = __toCommonJS(blockquote_exports);
var data = {
  en: "blockquote",
  kr: "\uC778\uC6A9\uAD6C",
  attributes: [
    {
      en: "cite",
      kr: "\uC778\uC6A9\uBB38",
      children: []
    }
  ]
};
var blockquote_default = data;
//# sourceMappingURL=blockquote.cjs.map
