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

// src/ktml/data/attributes/caption.ts
var caption_exports = {};
__export(caption_exports, {
  default: () => caption_default
});
module.exports = __toCommonJS(caption_exports);
var data = {
  en: "caption",
  kr: "\uC790\uB9C9",
  attributes: [
    {
      en: "align",
      kr: "\uC815\uB82C",
      children: [
        {
          en: "bottom",
          kr: "\uC544\uB798"
        },
        {
          en: "left",
          kr: "\uC67C\uCABD"
        },
        {
          en: "right",
          kr: "\uC624\uB978\uCABD"
        },
        {
          en: "top",
          kr: "\uC704"
        }
      ]
    }
  ]
};
var caption_default = data;
//# sourceMappingURL=caption.cjs.map
