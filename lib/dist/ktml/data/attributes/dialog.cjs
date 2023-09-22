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

// src/ktml/data/attributes/dialog.ts
var dialog_exports = {};
__export(dialog_exports, {
  default: () => dialog_default
});
module.exports = __toCommonJS(dialog_exports);
var data = {
  en: "dialog",
  kr: "\uB300\uD654\uC0C1\uC790",
  attributes: [
    {
      en: "open",
      kr: "\uC5F4\uAE30",
      children: []
    }
  ]
};
var dialog_default = data;
//# sourceMappingURL=dialog.cjs.map
