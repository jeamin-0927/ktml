import type { Attribute } from "./types";

const data: Attribute = {
  en: "form",
  kr: "양식",
  attributes: [
    {
      en: "accept-charset",
      kr: "문자셋",
      children: []
    },
    {
      en: "autocapitalize",
      kr: "자동대문자",
      children: [
        {
          en: "none",
          kr: "없음",
        },
        {
          en: "sentences",
          kr: "문장",
        },
        {
          en: "words",
          kr: "단어",
        },
        {
          en: "characters",
          kr: "문자",
        }
      ]
    },
    {
      en: "autocomplete",
      kr: "자동완성",
      children: [
        {
          en: "on",
          kr: "켜기",
        },
        {
          en: "off",
          kr: "끄기",
        }
      ]
    },
    {
      en: "name",
      kr: "이름",
      children: []
    },
    {
      en: "rel",
      kr: "관계",
      children: []
    },
    {
      en: "action",
      kr: "행동",
      children: []
    },
    {
      en: "enctype",
      kr: "인코딩타입",
      children: [
        {
          en: "application/x-www-form-urlencoded",
          kr: "기본값",
        },
        {
          en: "multipart/form-data",
          kr: "파일업로드",
        },
        {
          en: "text/plain",
          kr: "텍스트",
        }
      ]
    },
    {
      en: "method",
      kr: "방식",
      children: [
        {
          en: "get",
          kr: "가져오기",
        },
        {
          en: "post",
          kr: "전송하기",
        },
        {
          en: "dialog",
          kr: "대화",
        }
      ]
    },
    {
      en: "novalidate",
      kr: "검증안함",
      children: []
    },
    {
      en: "target",
      kr: "대상",
      children: [
        {
          en: "_blank",
          kr: "새창",
        },
        {
          en: "_parent",
          kr: "부모",
        },
        {
          en: "_self",
          kr: "자신",
        },
        {
          en: "_top",
          kr: "최상위",
        }
      ]
    }
  ]
};

export default data;