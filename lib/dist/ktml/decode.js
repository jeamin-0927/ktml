var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

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
export {
  decodeFile,
  decode_default as default
};
//# sourceMappingURL=decode.js.map
