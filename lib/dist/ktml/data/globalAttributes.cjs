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

// src/ktml/data/globalAttributes.ts
var globalAttributes_exports = {};
__export(globalAttributes_exports, {
  default: () => globalAttributes_default
});
module.exports = __toCommonJS(globalAttributes_exports);
var globalAttributes = Object.entries({
  // Global Attributes (events)
  "onabort": "\uC911\uB2E8\uC2DC",
  "onautocomplete": "\uC790\uB3D9\uC644\uC131\uC2DC",
  "onautocompleteerror": "\uC790\uB3D9\uC644\uC131\uC624\uB958\uC2DC",
  "onblur": "\uD3EC\uCEE4\uC2A4\uC783\uC744\uC2DC",
  "oncancel": "\uCDE8\uC18C\uC2DC",
  "oncanplay": "\uC7AC\uC0DD\uAC00\uB2A5\uC2DC",
  "oncanplaythrough": "\uB05D\uAE4C\uC9C0\uC7AC\uC0DD\uAC00\uB2A5\uC2DC",
  "onchange": "\uBCC0\uACBD\uC2DC",
  "onclick": "\uD074\uB9AD\uC2DC",
  "onclose": "\uB2EB\uD790\uC2DC",
  "oncontextmenu": "\uCEE8\uD14D\uC2A4\uD2B8\uBA54\uB274\uC2DC",
  "oncuechange": "\uD050\uBCC0\uACBD\uC2DC",
  "ondblclick": "\uB354\uBE14\uD074\uB9AD\uC2DC",
  "ondrag": "\uB4DC\uB798\uADF8\uC2DC",
  "ondragend": "\uB4DC\uB798\uADF8\uC885\uB8CC\uC2DC",
  "ondragenter": "\uB4DC\uB798\uADF8\uC9C4\uC785\uC2DC",
  "ondragexit": "\uB4DC\uB798\uADF8\uB098\uAC08\uC2DC",
  "ondragleave": "\uB4DC\uB798\uADF8\uB5A0\uB0A0\uC2DC",
  "ondragover": "\uB4DC\uB798\uADF8\uC704\uC5D0\uC2DC",
  "ondragstart": "\uB4DC\uB798\uADF8\uC2DC\uC791\uC2DC",
  "ondrop": "\uB4DC\uB78D\uC2DC",
  "ondurationchange": "\uAE30\uAC04\uBCC0\uACBD\uC2DC",
  "onemptied": "\uBE44\uC6CC\uC9C8\uC2DC",
  "onended": "\uC885\uB8CC\uC2DC",
  "onerror": "\uC624\uB958\uC2DC",
  "onfocus": "\uD3EC\uCEE4\uC2A4\uC2DC",
  "oninput": "\uC785\uB825\uC2DC",
  "oninvalid": "\uBB34\uD6A8\uC2DC",
  "onkeydown": "\uD0A4\uB2E4\uC6B4\uC2DC",
  "onkeypress": "\uD0A4\uC785\uB825\uC2DC",
  "onkeyup": "\uD0A4\uC5C5\uC2DC",
  "onload": "\uBD88\uB7EC\uC654\uC744\uC2DC",
  "onloadeddata": "\uAC12\uBD88\uB7EC\uC624\uAE30\uC644\uB8CC\uC2DC",
  "onloadedmetadata": "\uC815\uBCF4\uBD88\uB7EC\uC624\uAE30\uC644\uB8CC\uC2DC",
  "onloadstart": "\uBD88\uB7EC\uC624\uAE30\uC2DC\uC791\uC2DC",
  "onmousedown": "\uB9C8\uC6B0\uC2A4\uB2E4\uC6B4\uC2DC",
  "onmouseenter": "\uB9C8\uC6B0\uC2A4\uC9C4\uC785\uC2DC",
  "onmouseleave": "\uB9C8\uC6B0\uC2A4\uB5A0\uB0A0\uC2DC",
  "onmousemove": "\uB9C8\uC6B0\uC2A4\uC774\uB3D9\uC2DC",
  "onmouseout": "\uB9C8\uC6B0\uC2A4\uC544\uC6C3\uC2DC",
  "onmouseover": "\uB9C8\uC6B0\uC2A4\uC624\uBC84\uC2DC",
  "onmouseup": "\uB9C8\uC6B0\uC2A4\uC5C5\uC2DC",
  "onmousewheel": "\uB9C8\uC6B0\uC2A4\uD720\uC2DC",
  "onpause": "\uC77C\uC2DC\uC815\uC9C0\uC2DC",
  "onplay": "\uC7AC\uC0DD\uC2DC",
  "onplaying": "\uC7AC\uC0DD\uC911\uC2DC",
  "onprogress": "\uC9C4\uD589\uC2DC",
  "onratechange": "\uC18D\uB3C4\uBCC0\uACBD\uC2DC",
  "onreset": "\uCD08\uAE30\uD654\uC2DC",
  "onresize": "\uD06C\uAE30\uBCC0\uACBD\uC2DC",
  "onscroll": "\uC2A4\uD06C\uB864\uC2DC",
  "onseeked": "\uD0D0\uC0C9\uC644\uB8CC\uC2DC",
  "onseeking": "\uD0D0\uC0C9\uC911\uC2DC",
  "onselect": "\uC120\uD0DD\uC2DC",
  "onshow": "\uD45C\uC2DC\uC2DC",
  "onsort": "\uC815\uB82C\uC2DC",
  "onstalled": "\uC911\uB2E8\uC2DC",
  "onsubmit": "\uC81C\uCD9C\uC2DC",
  "onsuspend": "\uC77C\uC2DC\uC911\uB2E8\uC2DC",
  "ontimeupdate": "\uC2DC\uAC04\uC5C5\uB370\uC774\uD2B8\uC2DC",
  "ontoggle": "\uD1A0\uAE00\uC2DC",
  "onvolumechange": "\uBCFC\uB968\uBCC0\uACBD\uC2DC",
  "onwaiting": "\uB300\uAE30\uC2DC",
  // Global Attributes (properties)
  "accesskey": "\uC811\uADFC\uD0A4",
  "autocapitalize": "\uC790\uB3D9\uB300\uBB38\uC790",
  "autofocus": "\uC790\uB3D9\uD3EC\uCEE4\uC2A4",
  "class": "\uACC4\uCE35",
  "content": "\uB0B4\uC6A9",
  "contenteditable": "\uB0B4\uC6A9\uD3B8\uC9D1\uC5EC\uBD80",
  "charset": "\uBB38\uC790\uBB36\uC74C",
  "dir": "\uBC29\uD5A5",
  "draggable": "\uB4DC\uB798\uADF8\uC5EC\uBD80",
  "enterkeyhint": "\uC5D4\uD130\uD0A4\uD78C\uD2B8",
  "exportparts": "\uBD80\uBD84\uB0B4\uBCF4\uB0B4\uAE30",
  "hidden": "\uC228\uAE40",
  "id": "\uC544\uC774\uB514",
  "inert": "\uBE44\uD65C\uC131",
  "inputmode": "\uC785\uB825\uBAA8\uB4DC",
  "is": "\uB3D9\uC791",
  "itemid": "\uD56D\uBAA9\uC544\uC774\uB514",
  "itemprop": "\uD56D\uBAA9\uC18D\uC131",
  "itemref": "\uD56D\uBAA9\uCC38\uC870",
  "itemscope": "\uD56D\uBAA9\uBC94\uC704",
  "itemtype": "\uD56D\uBAA9\uC720\uD615",
  "initial-scale": "\uCD08\uAE30\uCD95\uCC99",
  "lang": "\uC5B8\uC5B4",
  "nonce": "\uC784\uC2DC",
  "part": "\uBD80\uBD84",
  "popover": "\uB744\uC6B0\uAE30",
  "slot": "\uC7A5\uC18C",
  "spellcheck": "\uCCA0\uC790\uD655\uC778",
  "style": "\uAFB8\uBBF8\uAE30",
  "tabindex": "\uBB36\uC74C\uC21C\uC11C",
  "title": "\uC81C\uBAA9",
  "translate": "\uBC88\uC5ED",
  "virtualkeyboardpolicy": "\uAC00\uC0C1\uD0A4\uBCF4\uB4DC\uC815\uCC45"
});
var globalAttributes_default = globalAttributes;
//# sourceMappingURL=globalAttributes.cjs.map