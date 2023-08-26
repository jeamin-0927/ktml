var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/index.ts
import * as fs4 from "fs";

// src/utils/readFile.ts
import { promises as fs } from "fs";
var readFile = async (path, extension) => {
  const list = [];
  path = path.replace("/", "");
  const check = async (innerPath) => {
    try {
      const files = await fs.readdir(innerPath);
      for (const file of files) {
        const filePath = `${innerPath}/${file}`;
        const stat = await fs.stat(filePath);
        if (stat.isDirectory()) {
          await check(filePath);
          continue;
        }
        if (file.split(".").pop() !== extension)
          continue;
        list.push({
          filePath: filePath.replace(path, ""),
          content: (await fs.readFile(filePath, "utf-8")).replace(/\r?\n|\t|\r/g, "")
        });
        console.log(`\u{1F4DA} \uC77D\uAE30 :: ./${filePath} (${list[list.length - 1].content.length.toLocaleString()} \uBC14\uC774\uD2B8)`);
      }
    } catch (err) {
      console.error(`\u{1F4DA} \uC77D\uAE30 :: \uC624\uB958: ${err.message}`);
    }
  };
  await check(path);
  console.log(`\u{1F4DA} \uC77D\uAE30 :: ${list.length.toLocaleString()}\uAC1C\uC758 \uD30C\uC77C\uC744 \uC77D\uC5C8\uC5B4\uC694.`);
  console.log();
  return list;
};
var readFile_default = readFile;

// src/utils/writeFile.ts
import { promises as fs2 } from "fs";
var writeFile = async (path, list, oldExtension, newExtension) => {
  try {
    const copy = [...list];
    path = path.replace("/", "");
    try {
      await fs2.rm(`./build`, { recursive: true });
    } catch (e) {
    }
    for (const file of copy) {
      const filePath = `./build${file.filePath.replace(new RegExp(oldExtension, "g"), newExtension)}`;
      const content = file.content;
      await fs2.mkdir(filePath.replace(/\/[^/]+$/, ""), { recursive: true });
      await fs2.writeFile(filePath, content);
      console.log(`\u{1F4E6} \uB9CC\uB4E4\uAE30 :: ${filePath} (${content.length.toLocaleString()} \uBC14\uC774\uD2B8)`);
    }
    console.log(`\u{1F4E6} \uB9CC\uB4E4\uAE30 :: ${copy.length}\uAC1C\uC758 \uD30C\uC77C\uC744 \uB9CC\uB4E4\uC5C8\uC5B4\uC694.`);
    console.log();
  } catch (e) {
    console.error(`\u{1F4E6} \uB9CC\uB4E4\uAE30 :: \uC624\uB958: ${e.message}`);
  }
};
var writeFile_default = writeFile;

// src/ktml/data/attributes/index.ts
var attributes_exports = {};
__export(attributes_exports, {
  a: () => a_default,
  abbr: () => abbr_default,
  address: () => address_default,
  area: () => area_default,
  article: () => article_default,
  aside: () => aside_default,
  audio: () => audio_default,
  b: () => b_default,
  base: () => base_default,
  bdi: () => bdi_default,
  bdo: () => bdo_default,
  blockquote: () => blockquote_default,
  body: () => body_default
});

// src/ktml/data/attributes/a.ts
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

// src/ktml/data/attributes/abbr.ts
var data2 = {
  en: "abbr",
  kr: "\uC57D\uC5B4",
  attributes: []
};
var abbr_default = data2;

// src/ktml/data/attributes/address.ts
var data3 = {
  en: "address",
  kr: "\uC8FC\uC18C",
  attributes: []
};
var address_default = data3;

// src/ktml/data/attributes/area.ts
var data4 = {
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
var area_default = data4;

// src/ktml/data/attributes/article.ts
var data5 = {
  en: "article",
  kr: "\uAE30\uC0AC",
  attributes: []
};
var article_default = data5;

// src/ktml/data/attributes/aside.ts
var data6 = {
  en: "article",
  kr: "\uC5EC\uB2F4",
  attributes: []
};
var aside_default = data6;

// src/ktml/data/attributes/audio.ts
var data7 = {
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
var audio_default = data7;

// src/ktml/data/attributes/b.ts
var data8 = {
  en: "b",
  kr: "\uAD75\uAC8C",
  attributes: []
};
var b_default = data8;

// src/ktml/data/attributes/base.ts
var data9 = {
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
var base_default = data9;

// src/ktml/data/attributes/bdi.ts
var data10 = {
  en: "bdi",
  kr: "\uC591\uBC29\uD5A5\uD14D\uC2A4\uD2B8",
  attributes: []
};
var bdi_default = data10;

// src/ktml/data/attributes/bdo.ts
var data11 = {
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
var bdo_default = data11;

// src/ktml/data/attributes/blockquote.ts
var data12 = {
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
var blockquote_default = data12;

// src/ktml/data/attributes/body.ts
var data13 = {
  en: "body",
  kr: "\uBAB8\uD1B5",
  attributes: [
    {
      en: "alink",
      kr: "\uD65C\uC131\uD654\uB41C\uB9C1\uD06C\uC0C9\uC0C1",
      children: []
    },
    {
      en: "background",
      kr: "\uBC30\uACBD",
      children: []
    },
    {
      en: "bgcolor",
      kr: "\uBC30\uACBD\uC0C9",
      children: []
    },
    {
      en: "bottommargin",
      kr: "\uD558\uB2E8\uC5EC\uBC31",
      children: []
    },
    {
      en: "leftmargin",
      kr: "\uC88C\uCE21\uC5EC\uBC31",
      children: []
    },
    {
      en: "link",
      kr: "\uB9C1\uD06C\uC0C9\uC0C1",
      children: []
    },
    {
      en: "onafterprint",
      kr: "\uC778\uC1C4\uD6C4\uC5D0",
      children: []
    },
    {
      en: "onbeforeprint",
      kr: "\uC778\uC1C4\uC804\uC5D0",
      children: []
    },
    {
      en: "onbeforeunload",
      kr: "\uBB38\uC11C\uB97C\uB5A0\uB0A0\uB54C",
      children: []
    },
    {
      en: "onhashchange",
      kr: "\uBB38\uC11C\uC758\uC704\uCE58\uAC00\uBCC0\uACBD\uB420\uB54C",
      children: []
    },
    {
      en: "onlanguagechange",
      kr: "\uBB38\uC11C\uC758\uC5B8\uC5B4\uAC00\uBCC0\uACBD\uB420\uB54C",
      children: []
    },
    {
      en: "onmessage",
      kr: "\uBB38\uC11C\uAC00\uBA54\uC138\uC9C0\uB97C\uBC1B\uC558\uC744\uB54C",
      children: []
    },
    {
      en: "onoffline",
      kr: "\uBB38\uC11C\uAC00\uC624\uD504\uB77C\uC778\uC0C1\uD0DC\uAC00\uB420\uB54C",
      children: []
    },
    {
      en: "ononline",
      kr: "\uBB38\uC11C\uAC00\uC628\uB77C\uC778\uC0C1\uD0DC\uAC00\uB420\uB54C",
      children: []
    },
    {
      en: "onpopstate",
      kr: "\uBB38\uC11C\uC758\uC138\uC158\uD788\uC2A4\uD1A0\uB9AC\uAC00\uBCC0\uACBD\uB420\uB54C",
      children: []
    },
    {
      en: "onredo",
      kr: "\uBB38\uC11C\uC758\uBCC0\uACBD\uC774\uB418\uB3CC\uB824\uC9C8\uB54C",
      children: []
    },
    {
      en: "onstorage",
      kr: "\uBB38\uC11C\uC758\uC800\uC7A5\uC18C\uAC00\uBCC0\uACBD\uB420\uB54C",
      children: []
    },
    {
      en: "onundo",
      kr: "\uBB38\uC11C\uC758\uBCC0\uACBD\uC774\uB418\uB3CC\uB824\uC9C8\uB54C",
      children: []
    },
    {
      en: "onunload",
      kr: "\uBB38\uC11C\uB97C\uB5A0\uB0A0\uB54C",
      children: []
    },
    {
      en: "rightmargin",
      kr: "\uC6B0\uCE21\uC5EC\uBC31",
      children: []
    },
    {
      en: "text",
      kr: "\uD14D\uC2A4\uD2B8\uC0C9\uC0C1",
      children: []
    },
    {
      en: "topmargin",
      kr: "\uC0C1\uB2E8\uC5EC\uBC31",
      children: []
    },
    {
      en: "vlink",
      kr: "\uBC29\uBB38\uD55C\uB9C1\uD06C\uC0C9\uC0C1",
      children: []
    }
  ]
};
var body_default = data13;

// src/ktml/data/attributes/global.ts
var global = [
  {
    en: "onabort",
    kr: "\uC911\uB2E8\uC2DC",
    children: []
  },
  {
    en: "onautocomplete",
    kr: "\uC790\uB3D9\uC644\uC131\uC2DC",
    children: []
  },
  {
    en: "onautocompleteerror",
    kr: "\uC790\uB3D9\uC644\uC131\uC624\uB958\uC2DC",
    children: []
  },
  {
    en: "onblur",
    kr: "\uD3EC\uCEE4\uC2A4\uC783\uC744\uC2DC",
    children: []
  },
  {
    en: "oncancel",
    kr: "\uCDE8\uC18C\uC2DC",
    children: []
  },
  {
    en: "oncanplay",
    kr: "\uC7AC\uC0DD\uAC00\uB2A5\uC2DC",
    children: []
  },
  {
    en: "oncanplaythrough",
    kr: "\uB05D\uAE4C\uC9C0\uC7AC\uC0DD\uAC00\uB2A5\uC2DC",
    children: []
  },
  {
    en: "onchange",
    kr: "\uBCC0\uACBD\uC2DC",
    children: []
  },
  {
    en: "onclick",
    kr: "\uD074\uB9AD\uC2DC",
    children: []
  },
  {
    en: "onclose",
    kr: "\uB2EB\uD790\uC2DC",
    children: []
  },
  {
    en: "oncontextmenu",
    kr: "\uCEE8\uD14D\uC2A4\uD2B8\uBA54\uB274\uC2DC",
    children: []
  },
  {
    en: "oncuechange",
    kr: "\uD050\uBCC0\uACBD\uC2DC",
    children: []
  },
  {
    en: "ondblclick",
    kr: "\uB354\uBE14\uD074\uB9AD\uC2DC",
    children: []
  },
  {
    en: "ondrag",
    kr: "\uB4DC\uB798\uADF8\uC2DC",
    children: []
  },
  {
    en: "ondragend",
    kr: "\uB4DC\uB798\uADF8\uC885\uB8CC\uC2DC",
    children: []
  },
  {
    en: "ondragenter",
    kr: "\uB4DC\uB798\uADF8\uC9C4\uC785\uC2DC",
    children: []
  },
  {
    en: "ondragexit",
    kr: "\uB4DC\uB798\uADF8\uB098\uAC08\uC2DC",
    children: []
  },
  {
    en: "ondragleave",
    kr: "\uB4DC\uB798\uADF8\uB5A0\uB0A0\uC2DC",
    children: []
  },
  {
    en: "ondragover",
    kr: "\uB4DC\uB798\uADF8\uC704\uC5D0\uC2DC",
    children: []
  },
  {
    en: "ondragstart",
    kr: "\uB4DC\uB798\uADF8\uC2DC\uC791\uC2DC",
    children: []
  },
  {
    en: "ondrop",
    kr: "\uB4DC\uB78D\uC2DC",
    children: []
  },
  {
    en: "ondurationchange",
    kr: "\uAE30\uAC04\uBCC0\uACBD\uC2DC",
    children: []
  },
  {
    en: "onemptied",
    kr: "\uBE44\uC6CC\uC9C8\uC2DC",
    children: []
  },
  {
    en: "onended",
    kr: "\uC885\uB8CC\uC2DC",
    children: []
  },
  {
    en: "onerror",
    kr: "\uC624\uB958\uC2DC",
    children: []
  },
  {
    en: "onfocus",
    kr: "\uD3EC\uCEE4\uC2A4\uC2DC",
    children: []
  },
  {
    en: "oninput",
    kr: "\uC785\uB825\uC2DC",
    children: []
  },
  {
    en: "oninvalid",
    kr: "\uBB34\uD6A8\uC2DC",
    children: []
  },
  {
    en: "onkeydown",
    kr: "\uD0A4\uB2E4\uC6B4\uC2DC",
    children: []
  },
  {
    en: "onkeypress",
    kr: "\uD0A4\uC785\uB825\uC2DC",
    children: []
  },
  {
    en: "onkeyup",
    kr: "\uD0A4\uC5C5\uC2DC",
    children: []
  },
  {
    en: "onload",
    kr: "\uBD88\uB7EC\uC654\uC744\uC2DC",
    children: []
  },
  {
    en: "onloadeddata",
    kr: "\uAC12\uBD88\uB7EC\uC624\uAE30\uC644\uB8CC\uC2DC",
    children: []
  },
  {
    en: "onloadedmetadata",
    kr: "\uC815\uBCF4\uBD88\uB7EC\uC624\uAE30\uC644\uB8CC\uC2DC",
    children: []
  },
  {
    en: "onloadstart",
    kr: "\uBD88\uB7EC\uC624\uAE30\uC2DC\uC791\uC2DC",
    children: []
  },
  {
    en: "onmousedown",
    kr: "\uB9C8\uC6B0\uC2A4\uB2E4\uC6B4\uC2DC",
    children: []
  },
  {
    en: "onmouseenter",
    kr: "\uB9C8\uC6B0\uC2A4\uC9C4\uC785\uC2DC",
    children: []
  },
  {
    en: "onmouseleave",
    kr: "\uB9C8\uC6B0\uC2A4\uB5A0\uB0A0\uC2DC",
    children: []
  },
  {
    en: "onmousemove",
    kr: "\uB9C8\uC6B0\uC2A4\uC774\uB3D9\uC2DC",
    children: []
  },
  {
    en: "onmouseout",
    kr: "\uB9C8\uC6B0\uC2A4\uC544\uC6C3\uC2DC",
    children: []
  },
  {
    en: "onmouseover",
    kr: "\uB9C8\uC6B0\uC2A4\uC624\uBC84\uC2DC",
    children: []
  },
  {
    en: "onmouseup",
    kr: "\uB9C8\uC6B0\uC2A4\uC5C5\uC2DC",
    children: []
  },
  {
    en: "onmousewheel",
    kr: "\uB9C8\uC6B0\uC2A4\uD720\uC2DC",
    children: []
  },
  {
    en: "onpause",
    kr: "\uC77C\uC2DC\uC815\uC9C0\uC2DC",
    children: []
  },
  {
    en: "onplay",
    kr: "\uC7AC\uC0DD\uC2DC",
    children: []
  },
  {
    en: "onplaying",
    kr: "\uC7AC\uC0DD\uC911\uC2DC",
    children: []
  },
  {
    en: "onprogress",
    kr: "\uC9C4\uD589\uC2DC",
    children: []
  },
  {
    en: "onratechange",
    kr: "\uC18D\uB3C4\uBCC0\uACBD\uC2DC",
    children: []
  },
  {
    en: "onreset",
    kr: "\uCD08\uAE30\uD654\uC2DC",
    children: []
  },
  {
    en: "onresize",
    kr: "\uD06C\uAE30\uBCC0\uACBD\uC2DC",
    children: []
  },
  {
    en: "onscroll",
    kr: "\uC2A4\uD06C\uB864\uC2DC",
    children: []
  },
  {
    en: "onseeked",
    kr: "\uD0D0\uC0C9\uC644\uB8CC\uC2DC",
    children: []
  },
  {
    en: "onseeking",
    kr: "\uD0D0\uC0C9\uC911\uC2DC",
    children: []
  },
  {
    en: "onselect",
    kr: "\uC120\uD0DD\uC2DC",
    children: []
  },
  {
    en: "onshow",
    kr: "\uD45C\uC2DC\uC2DC",
    children: []
  },
  {
    en: "onsort",
    kr: "\uC815\uB82C\uC2DC",
    children: []
  },
  {
    en: "onstalled",
    kr: "\uC911\uB2E8\uC2DC",
    children: []
  },
  {
    en: "onsubmit",
    kr: "\uC81C\uCD9C\uC2DC",
    children: []
  },
  {
    en: "onsuspend",
    kr: "\uC77C\uC2DC\uC911\uB2E8\uC2DC",
    children: []
  },
  {
    en: "ontimeupdate",
    kr: "\uC2DC\uAC04\uC5C5\uB370\uC774\uD2B8\uC2DC",
    children: []
  },
  {
    en: "ontoggle",
    kr: "\uD1A0\uAE00\uC2DC",
    children: []
  },
  {
    en: "onvolumechange",
    kr: "\uBCFC\uB968\uBCC0\uACBD\uC2DC",
    children: []
  },
  {
    en: "onwaiting",
    kr: "\uB300\uAE30\uC2DC",
    children: []
  },
  {
    en: "accesskey",
    kr: "\uC811\uADFC\uD0A4",
    children: []
  },
  {
    en: "autocapitalize",
    kr: "\uC790\uB3D9\uB300\uBB38\uC790",
    children: [
      {
        en: "off",
        kr: "\uB044\uAE30"
      },
      {
        en: "none",
        kr: "\uC5C6\uC74C"
      },
      {
        en: "on",
        kr: "\uCF1C\uAE30"
      },
      {
        en: "sentences",
        kr: "\uBB38\uC7A5"
      },
      {
        en: "words",
        kr: "\uB2E8\uC5B4"
      },
      {
        en: "characters",
        kr: "\uBB38\uC790"
      }
    ]
  },
  {
    en: "autofocus",
    kr: "\uC790\uB3D9\uD3EC\uCEE4\uC2A4",
    children: []
  },
  {
    en: "class",
    kr: "\uACC4\uCE35",
    children: []
  },
  {
    en: "contenteditable",
    kr: "\uB0B4\uC6A9\uD3B8\uC9D1\uC5EC\uBD80",
    children: [
      {
        en: "true",
        kr: "\uCF1C\uAE30"
      },
      {
        en: "false",
        kr: "\uB044\uAE30"
      },
      {
        en: "plaintext-only",
        kr: "\uD3C9\uBB38\uB9CC"
      }
    ]
  },
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
      },
      {
        en: "auto",
        kr: "\uC790\uB3D9"
      }
    ]
  },
  {
    en: "draggable",
    kr: "\uB4DC\uB798\uADF8\uC5EC\uBD80",
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
    en: "enterkeyhint",
    kr: "\uC5D4\uD130\uD0A4\uD78C\uD2B8",
    children: []
  },
  {
    en: "exportparts",
    kr: "\uBD80\uBD84\uB0B4\uBCF4\uB0B4\uAE30",
    children: [
      {
        en: "hidden",
        kr: "\uC228\uAE40"
      }
    ]
  },
  {
    en: "hidden",
    kr: "\uC228\uAE40",
    children: []
  },
  {
    en: "id",
    kr: "\uC544\uC774\uB514",
    children: []
  },
  {
    en: "inert",
    kr: "\uBE44\uD65C\uC131",
    children: []
  },
  {
    en: "inputmode",
    kr: "\uC785\uB825\uBAA8\uB4DC",
    children: [
      {
        en: "none",
        kr: "\uC5C6\uC74C"
      },
      {
        en: "text",
        kr: "\uD14D\uC2A4\uD2B8"
      },
      {
        en: "decimal",
        kr: "\uC2ED\uC9C4\uC218"
      },
      {
        en: "numeric",
        kr: "\uC22B\uC790"
      },
      {
        en: "tel",
        kr: "\uC804\uD654\uBC88\uD638"
      },
      {
        en: "search",
        kr: "\uAC80\uC0C9"
      },
      {
        en: "email",
        kr: "\uC774\uBA54\uC77C"
      },
      {
        en: "url",
        kr: "\uC8FC\uC18C"
      }
    ]
  },
  {
    en: "is",
    kr: "\uB3D9\uC791",
    children: []
  },
  {
    en: "itemid",
    kr: "\uD56D\uBAA9\uC544\uC774\uB514",
    children: []
  },
  {
    en: "itemprop",
    kr: "\uD56D\uBAA9\uC18D\uC131",
    children: []
  },
  {
    en: "itemref",
    kr: "\uD56D\uBAA9\uCC38\uC870",
    children: []
  },
  {
    en: "itemscope",
    kr: "\uD56D\uBAA9\uBC94\uC704",
    children: []
  },
  {
    en: "itemtype",
    kr: "\uD56D\uBAA9\uC720\uD615",
    children: []
  },
  {
    en: "initial-scale",
    kr: "\uCD08\uAE30\uCD95\uCC99",
    children: []
  },
  {
    en: "lang",
    kr: "\uC5B8\uC5B4",
    children: []
  },
  {
    en: "nonce",
    kr: "\uC784\uC2DC",
    children: []
  },
  {
    en: "part",
    kr: "\uBD80\uBD84",
    children: []
  },
  {
    en: "popover",
    kr: "\uB744\uC6B0\uAE30",
    children: []
  },
  {
    en: "slot",
    kr: "\uC7A5\uC18C",
    children: []
  },
  {
    en: "spellcheck",
    kr: "\uCCA0\uC790\uD655\uC778",
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
    en: "style",
    kr: "\uAFB8\uBBF8\uAE30",
    children: []
  },
  {
    en: "tabindex",
    kr: "\uBB36\uC74C\uC21C\uC11C",
    children: []
  },
  {
    en: "title",
    kr: "\uC81C\uBAA9",
    children: []
  },
  {
    en: "translate",
    kr: "\uBC88\uC5ED",
    children: [
      {
        en: "yes",
        kr: "\uC608"
      },
      {
        en: "no",
        kr: "\uC544\uB2C8\uC624"
      }
    ]
  },
  {
    en: "virtualkeyboardpolicy",
    kr: "\uAC00\uC0C1\uD0A4\uBCF4\uB4DC\uC815\uCC45",
    children: [
      {
        en: "auto",
        kr: "\uC790\uB3D9"
      },
      {
        en: "manual",
        kr: "\uC218\uB3D9"
      }
    ]
  }
];
var global_default = global;

// src/ktml/data/gloabl.ts
var global2 = Object.entries({
  "<!DOCTYPE html>": "<!\uBB38\uC11C \uC885\uB958: \uD55C\uAE00 \uB9C8\uD06C\uC5C5 \uC5B8\uC5B4>"
});
var gloabl_default = global2;

// src/ktml/decode.ts
var elementsList = Object.values(attributes_exports);
var newGlobal = [...gloabl_default].sort((a, b) => b[1].length - a[1].length);
var decodeFile = (content) => {
  for (const [html, ktml] of newGlobal) {
    const regex = new RegExp(ktml, "g");
    content = content.replace(regex, html);
  }
  for (const attribute of global_default) {
    const regex = new RegExp(`<([^>]*)${attribute.kr}([^>]*)>`, "g");
    content = content.replace(regex, `<$1${attribute.en}$2>`);
  }
  for (const element of elementsList) {
    const regex1 = new RegExp(`<${element.kr}`, "g");
    const regex2 = new RegExp(`</${element.kr}`, "g");
    content = content.replace(regex1, `<${element.en}`);
    content = content.replace(regex2, `</${element.en}`);
    for (const attribute of element.attributes) {
      const regex = new RegExp(`<([^>]*)${attribute.kr}([^>]*)>`, "g");
      content = content.replace(regex, `<$1${attribute.en}$2>`);
      for (const child of attribute.children) {
        const regex3 = new RegExp(`(?<=<[^>]*=")${child.kr}(?="[^>]*>)`, "g");
        content = content.replace(regex3, child.en);
      }
    }
  }
  return content;
};
var decode = async (path) => {
  const list = await readFile_default(path, "ktml");
  for (const file of list) {
    file.content = decodeFile(file.content);
    console.log(`\u{1F6E0}\uFE0F  \uBCF5\uD638\uD654 :: .${file.filePath} (${file.content.length.toLocaleString()} \uBC14\uC774\uD2B8)`);
  }
  console.log(`\u{1F6E0}\uFE0F  \uBCF5\uD638\uD654 :: ${list.length}\uAC1C\uC758 \uD30C\uC77C\uC744 \uBCF5\uD638\uD654\uD588\uC5B4\uC694.`);
  console.log();
  await writeFile_default(path, list, "ktml", "html");
  return list;
};
var decode_default = decode;

// src/ktml/data/elements.ts
var elements = Object.entries({
  "a": "\uC5F0\uACB0",
  "abbr": "\uC57D\uC5B4",
  "address": "\uC8FC\uC18C",
  "area": "\uC601\uC5ED",
  "article": "\uAE30\uC0AC",
  "aside": "\uC5EC\uB2F4",
  "audio": "\uC18C\uB9AC",
  "b": "\uAD75\uAC8C",
  "base": "\uAE30\uBCF8",
  "bdi": "\uD14D\uC2A4\uD2B8\uBC29\uD5A5",
  "bdo": "\uBC29\uD5A5\uC81C\uC5B4",
  "blockquote": "\uC778\uC6A9",
  "body": "\uBAB8\uD1B5",
  "br": "\uC904\uBC14\uAFC8",
  "button": "\uBC84\uD2BC",
  "canvas": "\uADF8\uB9BC\uD310",
  "caption": "\uC544\uB798\uC124\uBA85",
  "cite": "\uC778\uC6A9",
  "code": "\uCF54\uB4DC",
  "col": "\uC5F4",
  "colgroup": "\uC5F4\uADF8\uB8F9",
  "data": "\uAC12",
  "datalist": "\uAC12\uBAA9\uB85D",
  "dd": "\uC124\uBA85",
  "del": "\uC0AD\uC81C",
  "details": "\uC138\uBD80\uC815\uBCF4",
  "dfn": "\uC815\uC758",
  "dialog": "\uB300\uD654",
  "div": "\uAD6C\uC5ED",
  "dl": "\uC6A9\uC5B4\uBAA9\uB85D",
  "dt": "\uC6A9\uC5B4",
  "em": "\uAC15\uC870",
  "embed": "\uC0BD\uC785",
  "fieldset": "\uB4E4\uD310\uC138\uD2B8",
  "figcaption": "\uADF8\uB9BC\uC124\uBA85",
  "figure": "\uADF8\uB9BC",
  "footer": "\uBC14\uB2E5\uAE00",
  "form": "\uBC29\uC2DD",
  "h1": "\uC81C\uBAA91",
  "h2": "\uC81C\uBAA92",
  "h3": "\uC81C\uBAA93",
  "h4": "\uC81C\uBAA94",
  "h5": "\uC81C\uBAA95",
  "h6": "\uC81C\uBAA96",
  "head": "\uBA38\uB9AC",
  "header": "\uBA38\uB9BF\uB9D0",
  "hgroup": "\uC81C\uBAA9\uADF8\uB8F9",
  "hr": "\uAD6C\uBD84\uC120",
  "html": "\uBB38\uC11C",
  "i": "\uAE30\uC6B8\uC774\uAE30",
  "iframe": "\uD2C0",
  "img": "\uC0AC\uC9C4",
  "input": "\uC785\uB825",
  "ins": "\uC0BD\uC785",
  "kbd": "\uD0A4\uBCF4\uB4DC",
  "label": "\uB531\uC9C0",
  "legend": "\uBC94\uB840",
  "li": "\uBAA9\uB85D",
  "link": "\uC5F0\uACB0",
  "main": "\uC8FC\uC694",
  "map": "\uC57D\uB3C4",
  "mark": "\uD45C\uC2DC",
  "menu": "\uBA54\uB274",
  "meta": "\uC815\uBCF4",
  "meter": "\uACC4\uB7C9",
  "nav": "\uAE38\uCC3E\uAE30",
  "nobr": "\uC904\uBC14\uAFC8\uC5C6\uC74C",
  "noembed": "\uC0BD\uC785\uC5C6\uC74C",
  "noframes": "\uD2C0\uC5C6\uC74C",
  "noscript": "\uBA85\uB839\uC5B4\uC5C6\uC74C",
  "object": "\uAC1D\uCCB4",
  "ol": "\uC815\uB82C\uBAA9\uB85D",
  "optgroup": "\uC635\uC158\uADF8\uB8F9",
  "option": "\uC120\uD0DD\uD56D\uBAA9",
  "output": "\uCD9C\uB825",
  "p": "\uB2E8\uB77D",
  "param": "\uB9E4\uAC1C\uBCC0\uC218",
  "picture": "\uADF8\uB9BC",
  "plaintext": "\uD3C9\uBB38",
  "portal": "\uC815\uBB38",
  "pre": "\uC11C\uC2DD\uC720\uC9C0",
  "progress": "\uC9C4\uD589",
  "q": "\uC778\uC6A9",
  "rp": "\uAD04\uD638",
  "rt": "\uB8E8\uBE44\uD14D\uC2A4\uD2B8",
  "ruby": "\uB8E8\uBE44",
  "s": "\uCDE8\uC18C\uC120",
  "samp": "\uC608\uC2DC",
  "script": "\uBA85\uB839\uC5B4",
  "search": "\uAC80\uC0C9",
  "section": "\uAD6C\uBD84",
  "select": "\uC120\uD0DD",
  "slot": "\uAD6C\uBA4D",
  "small": "\uC791\uAC8C",
  "source": "\uC6D0\uCC9C",
  "span": "\uBC94\uC704",
  "strong": "\uAC15\uC870",
  "style": "\uAFB8\uBBF8\uAE30",
  "sub": "\uC544\uB798\uCCA8\uC790",
  "summary": "\uC694\uC57D",
  "sup": "\uC704\uCCA8\uC790",
  "table": "\uD45C",
  "tbody": "\uD46C\uBAB8\uD1B5",
  "td": "\uD45C\uAC12",
  "template": "\uACAC\uBCF8",
  "textarea": "\uD14D\uC2A4\uD2B8\uC601\uC5ED",
  "tfoot": "\uD45C\uBC14\uB2E5\uAE00",
  "th": "\uD45C\uC81C\uBAA9",
  "thead": "\uD45C\uBA38\uB9AC",
  "time": "\uC2DC\uAC04",
  "title": "\uC81C\uBAA9",
  "tr": "\uD45C\uD589",
  "track": "\uAE38",
  "u": "\uBC11\uC904",
  "ul": "\uBAA9\uB85D",
  "var": "\uBCC0\uC218",
  "video": "\uC601\uC0C1",
  "wbr": "\uC904\uBC14\uAFC8\uC81C\uC548",
  "xmp": "\uC608\uC2DC"
});
var elements_default = elements;

// src/ktml/data/globalAttributes.ts
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

// src/ktml/encode.ts
var encode = async (path) => {
  const list = await readFile_default(path, "html");
  const newElements = [...elements_default].sort((a, b) => b[0].length - a[0].length);
  const newGlobal2 = [...gloabl_default].sort((a, b) => b[0].length - a[0].length);
  const newAttributes = [...globalAttributes_default].sort((a, b) => b[0].length - a[0].length);
  for (const file of list) {
    for (const [htmlGlobal, ktmlGlobal] of newGlobal2) {
      file.content = file.content.replace(new RegExp(htmlGlobal, "g"), ktmlGlobal);
    }
    for (const [htmlElements, ktmlElements] of newElements) {
      file.content = file.content.replace(new RegExp(`<${htmlElements}`, "g"), `<${ktmlElements}`);
      file.content = file.content.replace(new RegExp(`</${htmlElements}`, "g"), `</${ktmlElements}`);
    }
    ;
    for (const [htmlAttributes, ktmlAttributes] of newAttributes) {
      file.content = file.content.replace(new RegExp(`<([^>]*)${htmlAttributes}([^>]*)>`, "g"), `<$1${ktmlAttributes}$2>`);
    }
    console.log(`\u{1F6E0}\uFE0F  \uC554\uD638\uD654 :: .${file.filePath} (${file.content.length.toLocaleString()} \uBC14\uC774\uD2B8)`);
  }
  console.log(`\u{1F6E0}\uFE0F  \uC554\uD638\uD654 :: ${list.length}\uAC1C\uC758 \uD30C\uC77C\uC744 \uC554\uD638\uD654\uD588\uC5B4\uC694.`);
  console.log();
  await writeFile_default(path, list, "html", "ktml");
  return list;
};
var encode_default = encode;

// src/utils/webserver.ts
import * as http from "http";
import { promises as fs3 } from "fs";
var server = http.createServer();
var request = async (req, res) => {
  const { url } = req;
  let path = `./build${url?.replace(/.ktml/g, ".html")}`;
  const extension = url?.split(".").pop();
  const isIndex = url?.endsWith("/");
  if (isIndex) {
    path = `./build${url}index.html`;
  }
  try {
    await fs3.readFile(path);
  } catch (e) {
    console.log(`\u{1F534} \uC11C\uBC84 :: [404] ${url}`);
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("404 Not Found");
    return res.end();
  }
  const file = (await fs3.readFile(path)).toString();
  console.log(`\u{1F7E2} \uC11C\uBC84 :: [200] ${url}`);
  if (extension === "html") {
    res.writeHead(200, { "Content-Type": "text/html" });
  }
  res.write(file);
  return res.end();
};
var start = () => {
  console.log("\u{1F6DC} \uC11C\uBC84 :: \uC6F9 \uC11C\uBC84\uAC00 \uD3EC\uD2B8 3000\uBC88\uC5D0\uC11C \uC2DC\uC791\uB410\uC5B4\uC694.");
  console.log("\u{1F6DC} \uC11C\uBC84 :: http://localhost:3000/");
  console.log();
};
var webserver = async () => {
  server.on("request", request);
  server.listen(3e3, start);
};
var webserver_default = webserver;

// src/index.ts
var decodes = async (dir) => Promise.all([
  decode_default(dir)
]);
var encodes = async (dir) => Promise.all([
  encode_default(dir)
]);
(async () => {
  console.clear();
  console.log(`\u{1F60F}  \uD55C\uAE00 \uB9C8\uD06C\uC5C5 \uC5B8\uC5B4 v.1.1.1 \u{1F60F}`);
  console.log();
  let dir, type;
  if (process.argv[3]) {
    dir = process.argv[3] || __dirname;
    type = process.argv[2] === "encode" ? encodes : process.argv[2] === "decode" ? decodes : () => {
    };
    await type(dir);
  } else {
    dir = process.argv[2] || __dirname;
    await decodes(dir);
    await webserver_default();
    const watcher = fs4.watch(dir, { recursive: true });
    watcher.on("change", async (event, filename) => {
      console.clear();
      console.log(`\u{1F60F}  \uD55C\uAE00 \uB9C8\uD06C\uC5C5 \uC5B8\uC5B4 v.1.1.1 \u{1F60F}`);
      console.log();
      await decodes(dir);
      console.log("\u{1F6DC} \uC11C\uBC84 :: \uC6F9 \uC11C\uBC84\uAC00 \uD3EC\uD2B8 3000\uBC88\uC5D0\uC11C \uC2DC\uC791\uB410\uC5B4\uC694.");
      console.log("\u{1F6DC} \uC11C\uBC84 :: http://localhost:3000/");
      console.log();
    });
  }
})();
//# sourceMappingURL=index.js.map
