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

// src/ktml/data/attributes/area.ts
var area_exports = {};
__export(area_exports, {
  default: () => area_default
});
module.exports = __toCommonJS(area_exports);
var data = {
  en: "area",
  kr: "\uC601\uC5ED",
  attributes: [
    {
      en: "alt",
      kr: "\uB300\uCCB4\uD14D\uC2A4\uD2B8",
      children: []
    },
    {
      en: "coords",
      kr: "\uC88C\uD45C",
      children: []
    },
    {
      en: "download",
      kr: "\uB2E4\uC6B4\uB85C\uB4DC",
      children: []
    },
    {
      en: "href",
      kr: "\uB9C1\uD06C",
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
      children: [
        {
          en: "no-referrer",
          kr: "\uCC38\uC870\uC5C6\uC74C"
        },
        {
          en: "no-referrer-when-downgrade",
          kr: "\uCC38\uC870\uC5C6\uC74C-\uB2E4\uC6B4\uADF8\uB808\uC774\uB4DC\uC2DC"
        },
        {
          en: "origin",
          kr: "\uCD9C\uCC98"
        },
        {
          en: "origin-when-cross-origin",
          kr: "\uCD9C\uCC98-\uAC74\uB10C\uCD9C\uCC98\uC2DC"
        },
        {
          en: "same-origin",
          kr: "\uB3D9\uC77C\uCD9C\uCC98"
        },
        {
          en: "strict-origin",
          kr: "\uC5C4\uACA9\uCD9C\uCC98"
        },
        {
          en: "strict-origin-when-cross-origin",
          kr: "\uC5C4\uACA9\uCD9C\uCC98-\uAC74\uB10C\uCD9C\uCC98\uC2DC"
        },
        {
          en: "unsafe-url",
          kr: "\uC548\uC804\uD558\uC9C0\uC54A\uC740\uC8FC\uC18C"
        }
      ]
    },
    {
      en: "rel",
      kr: "\uAD00\uACC4",
      children: []
    },
    {
      en: "shape",
      kr: "\uBAA8\uC591",
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
var area_default = data;
//# sourceMappingURL=area.cjs.map
