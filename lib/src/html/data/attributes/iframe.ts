import type { Attribute } from "./types";

const data: Attribute = {
  en: "iframe",
  kr: "인라인프레임",
  attributes: [
    {
      en: "allow",
      kr: "허용",
      children: []
    },
    {
      en: "allowfullscreen",
      kr: "전체화면허용",
      children: []
    },
    {
      en: "allowpaymentrequest",
      kr: "결제요청허용",
      children: []
    },
    {
      en: "credentialless",
      kr: "자격증명없음",
      children: []
    },
    {
      en: "csp",
      kr: "컨텐츠보안정책",
      children: []
    },
    {
      en: "height",
      kr: "높이",
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
      en: "name",
      kr: "이름",
      children: []
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
          kr: "위험한주소",
        }
      ]
    },
    {
      en: "sandbox",
      kr: "모래상자",
      children: [
        {
          en: "allow-downloads",
          kr: "다운로드허용",
        },
        {
          en: "allow-downloads-without-user-activation",
          kr: "사용자활성화없이다운로드허용",
        },
        {
          en: "allow-forms",
          kr: "폼허용",
        },
        {
          en: "allow-modals",
          kr: "모달허용",
        },
        {
          en: "allow-orientation-lock",
          kr: "방향잠금허용",
        },
        {
          en: "allow-pointer-lock",
          kr: "포인터잠금허용",
        },
        {
          en: "allow-popups",
          kr: "팝업허용",
        },
        {
          en: "allow-popups-to-escape-sandbox",
          kr: "모래상자탈출팝업허용",
        },
        {
          en: "allow-presentation",
          kr: "프레젠테이션허용",
        },
        {
          en: "allow-same-origin",
          kr: "동일출처허용",
        },
        {
          en: "allow-scripts",
          kr: "스크립트허용",
        },
        {
          en: "allow-storage-access-by-user-activation",
          kr: "사용자활성화에의한저장소접근허용",
        },
        {
          en: "allow-top-navigation",
          kr: "상단탐색허용",
        },
        {
          en: "allow-top-navigation-by-user-activation",
          kr: "사용자활성화에의한상단탐색허용",
        },
        {
          en: "allow-top-navigation-to-custom-protocols",
          kr: "사용자정의프로토콜에의한상단탐색허용",
        }
      ]
    },
    {
      en: "src",
      kr: "주소",
      children: []
    },
    {
      en: "srcdoc",
      kr: "문서주소",
      children: []
    },
    {
      en: "width",
      kr: "너비",
      children: []
    }
  ]
};

export default data;