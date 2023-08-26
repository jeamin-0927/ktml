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

// src/ktml/data/attributes/audio.ts
var audio_exports = {};
__export(audio_exports, {
  default: () => audio_default
});
module.exports = __toCommonJS(audio_exports);
var data = {
  en: "audio",
  kr: "\uC18C\uB9AC",
  attributes: [
    {
      en: "autoplay",
      kr: "\uC790\uB3D9\uC7AC\uC0DD",
      children: [
        {
          en: "true",
          kr: "\uCF1C\uAE30"
        },
        {
          en: "false",
          kr: "\uB044\uAE30"
        }
      ]
    },
    {
      en: "controls",
      kr: "\uC81C\uC5B4",
      children: [
        {
          en: "true",
          kr: "\uCF1C\uAE30"
        },
        {
          en: "false",
          kr: "\uB044\uAE30"
        }
      ]
    },
    {
      en: "crossorigin",
      kr: "\uD06C\uB85C\uC2A4\uCD9C\uCC98",
      children: [
        {
          en: "anonymous",
          kr: "\uC775\uBA85"
        },
        {
          en: "use-credentials",
          kr: "\uC790\uACA9\uC99D\uBA85\uC0AC\uC6A9"
        }
      ]
    },
    {
      en: "disableremoteplayback",
      kr: "\uC6D0\uACA9\uC7AC\uC0DD\uB044\uAE30",
      children: [
        {
          en: "true",
          kr: "\uCF1C\uAE30"
        },
        {
          en: "false",
          kr: "\uB044\uAE30"
        }
      ]
    },
    {
      en: "loop",
      kr: "\uBC18\uBCF5",
      children: [
        {
          en: "true",
          kr: "\uCF1C\uAE30"
        },
        {
          en: "false",
          kr: "\uB044\uAE30"
        }
      ]
    },
    {
      en: "muted",
      kr: "\uC74C\uC18C\uAC70",
      children: [
        {
          en: "true",
          kr: "\uCF1C\uAE30"
        },
        {
          en: "false",
          kr: "\uB044\uAE30"
        }
      ]
    },
    {
      en: "preload",
      kr: "\uBBF8\uB9AC\uBD88\uB7EC\uC624\uAE30",
      children: [
        {
          en: "auto",
          kr: "\uC790\uB3D9"
        },
        {
          en: "metadata",
          kr: "\uBA54\uD0C0\uB370\uC774\uD130"
        },
        {
          en: "none",
          kr: "\uC5C6\uC74C"
        }
      ]
    },
    {
      en: "src",
      kr: "\uCD9C\uCC98",
      children: []
    }
  ]
};
var audio_default = data;
//# sourceMappingURL=audio.cjs.map
