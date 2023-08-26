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

// src/ktml/data/attributes/bdo.ts
var bdo_exports = {};
__export(bdo_exports, {
  default: () => bdo_default
});
module.exports = __toCommonJS(bdo_exports);
var data = {
  en: "bdo",
  kr: "\uD14D\uC2A4\uD2B8\uBC29\uD5A5",
  attributes: [
    {
      en: "dir",
      kr: "\uBC29\uD5A5",
      children: [
        {
          en: "ltr",
          kr: "\uC67C\uCABD\uC5D0\uC11C\uC624\uB978\uCABD"
        },
        {
          en: "rtl",
          kr: "\uC624\uB978\uCABD\uC5D0\uC11C\uC67C\uCABD"
        }
      ]
    }
  ]
};
var bdo_default = data;
//# sourceMappingURL=bdo.cjs.map
