import { Attribute } from ".";

const data: Attribute = {
  en: "button",
  kr: "버튼",
  attributes: [
    {
      en: "autofocus",
      kr: "자동포커스",
      children: []
    },
    {
      en: "autocomplete",
      kr: "자동완성",
      children: [
        {
          en: "off",
          kr: "끄기"
        },
        {
          en: "on",
          kr: "켜기"
        }
      ]
    },
    {
      en: "disabled",
      kr: "비활성화",
      children: [
        {
          en: "true",
          kr: "켜기"
        },
        {
          en: "false",
          kr: "끄기"
        }
      ]
    },
    {
      en: "form",
      kr: "방식",
      children: []
    },
    {
      en: "formaction",
      kr: "방식동작",
      children: []
    },
    {
      en: "formenctype",
      kr: "방식인코딩",
      children: [
        {
          en: "application/x-www-form-urlencoded",
          kr: "폼데이터"
        },
        {
          en: "multipart/form-data",
          kr: "멀티파트"
        },
        {
          en: "text/plain",
          kr: "텍스트"
        },
      ]
    },
    {
      en: "formmethod",
      kr: "방식수단",
      children: []
    },
    {
      en: "formnovalidate",
      kr: "방식유효성검사무시",
      children: []
    },
    {
      en: "formtarget",
      kr: "방식대상",
      children: [
        {
          en: "_blank",
          kr: "새창"
        },
        {
          en: "_parent",
          kr: "부모"
        },
        {
          en: "_self",
          kr: "자신"
        },
        {
          en: "_top",
          kr: "최상위"
        }
      ]
    },
    {
      en: "name",
      kr: "이름",
      children: []
    },
    {
      en: "popovertarget",
      kr: "팝오버대상",
      children: []
    },
    {
      en: "popovertargetaction",
      kr: "팝오버대상동작",
      children: [
        {
          en: "hide",
          kr: "숨김"
        },
        {
          en: "show",
          kr: "보임"
        },
        {
          en: "toggle",
          kr: "토글"
        }
      ]
    },
    {
      en: "type",
      kr: "종류",
      children: [
        {
          en: "button",
          kr: "버튼"
        },
        {
          en: "reset",
          kr: "초기화"
        },
        {
          en: "submit",
          kr: "제출"
        }
      ]
    },
    {
      en: "value",
      kr: "값",
      children: []
    }
  ]
};

export default data;