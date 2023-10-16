import type { Attribute } from "./types";

const data: Attribute = {
  en: "img",
  kr: "이미지",
  attributes: [
    {
      en: "alt",
      kr: "대체",
      children: []
    },
    {
      en: "crossorigin",
      kr: "크로스오리진",
      children: [
        {
          en: "anonymous",
          kr: "익명",
        },
        {
          en: "use-credentials",
          kr: "자격증명사용",
        }
      ]
    },
    {
      en: "decoding",
      kr: "복호화",
      children: [
        {
          en: "async",
          kr: "비동기",
        },
        {
          en: "sync",
          kr: "동기",
        },
        {
          en: "auto",
          kr: "자동",
        }
      ]
    },
    {
      en: "elementtiming",
      kr: "요소타이밍",
      children: []
    },
    {
      en: "fetchpriority",
      kr: "페치우선순위",
      children: [
        {
          en: "auto",
          kr: "자동",
        },
        {
          en: "high",
          kr: "높음",
        },
        {
          en: "low",
          kr: "낮음",
        }
      ]
    },
    {
      en: "height",
      kr: "높이",
      children: []
    },
    {
      en: "ismap",
      kr: "이미지맵",
      children: []
    },
    {
      en: "loading",
      kr: "로딩",
      children: [
        {
          en: "eager",
          kr: "열심히",
        },
        {
          en: "lazy",
          kr: "게으름",
        }
      ]
    },
    {
      en: "referrerpolicy",
      kr: "참조정책",
      children: [
        {
          en: "no-referrer",
          kr: "참조없음",
        },
        {
          en: "no-referrer-when-downgrade",
          kr: "다운그레이드시참조없음",
        },
        {
          en: "origin",
          kr: "출처",
        },
        {
          en: "origin-when-cross-origin",
          kr: "다른출처시출처",
        },
        {
          en: "same-origin",
          kr: "동일출처",
        },
        {
          en: "strict-origin",
          kr: "엄격출처",
        },
        {
          en: "strict-origin-when-cross-origin",
          kr: "다른출처시엄격출처",
        },
        {
          en: "unsafe-url",
          kr: "위험한url",
        }
      ]
    },
    {
      en: "sizes",
      kr: "사이즈",
      children: []
    },
    {
      en: "src",
      kr: "소스",
      children: []
    },
    {
      en: "srcset",
      kr: "소스셋",
      children: []
    },
    {
      en: "width",
      kr: "너비",
      children: []
    },
    {
      en: "usemap",
      kr: "맵사용",
      children: []
    }
  ]
};

export default data;