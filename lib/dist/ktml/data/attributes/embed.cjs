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

// src/ktml/data/attributes/embed.ts
var embed_exports = {};
__export(embed_exports, {
  default: () => embed_default
});
module.exports = __toCommonJS(embed_exports);
var data = {
  en: "embed",
  kr: "\uD50C\uB7EC\uADF8\uC778",
  attributes: [
    {
      en: "height",
      kr: "\uB192\uC774",
      children: []
    },
    {
      en: "src",
      kr: "\uC18C\uC2A4",
      children: []
    },
    {
      en: "type",
      kr: "\uD0C0\uC785",
      children: []
    },
    {
      en: "width",
      kr: "\uB108\uBE44",
      children: []
    }
  ]
};
var embed_default = data;
//# sourceMappingURL=embed.cjs.map
