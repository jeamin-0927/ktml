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

// src/ktml/data/attributes/base.ts
var base_exports = {};
__export(base_exports, {
  default: () => base_default
});
module.exports = __toCommonJS(base_exports);
var data = {
  en: "base",
  kr: "\uAE30\uBCF8",
  attributes: [
    {
      en: "href",
      kr: "\uC5F0\uACB0",
      children: []
    },
    {
      en: "target",
      kr: "\uB300\uC0C1",
      children: [
        {
          en: "_blank",
          kr: "\uC0C8\uCC3D"
        },
        {
          en: "_parent",
          kr: "\uBD80\uBAA8"
        },
        {
          en: "_self",
          kr: "\uC790\uC2E0"
        },
        {
          en: "_top",
          kr: "\uCD5C\uC0C1\uC704"
        }
      ]
    }
  ]
};
var base_default = data;
//# sourceMappingURL=base.cjs.map
