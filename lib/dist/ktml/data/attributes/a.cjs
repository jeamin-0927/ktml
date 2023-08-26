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

// src/ktml/data/attributes/a.ts
var a_exports = {};
__export(a_exports, {
  default: () => a_default
});
module.exports = __toCommonJS(a_exports);
var data = {
  en: "a",
  kr: "\uC5F0\uACB0",
  attributes: [
    {
      en: "download",
      kr: "\uB2E4\uC6B4\uB85C\uB4DC",
      children: []
    },
    {
      en: "href",
      kr: "\uC5F0\uACB0",
      children: []
    },
    {
      en: "hreflang",
      kr: "\uC5F0\uACB0\uC5B8\uC5B4",
      children: []
    },
    {
      en: "ping",
      kr: "\uD551",
      children: []
    },
    {
      en: "referrerpolicy",
      kr: "\uCC38\uC870\uC815\uCC45",
      children: []
    },
    {
      en: "rel",
      kr: "\uAD00\uACC4",
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
    },
    {
      en: "type",
      kr: "\uC720\uD615",
      children: []
    }
  ]
};
var a_default = data;
//# sourceMappingURL=a.cjs.map
