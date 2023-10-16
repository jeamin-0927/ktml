import { Attribute } from ".";

const data: Attribute = {
  en: "audio",
  kr: "소리",
  attributes: [
    {
      en: "autoplay",
      kr: "자동재생",
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
      en: "controls",
      kr: "제어",
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
      en: "crossorigin",
      kr: "크로스출처",
      children: [
        {
          en: "anonymous",
          kr: "익명"
        },
        {
          en: "use-credentials",
          kr: "자격증명사용"
        }
      ]
    },
    {
      en: "disableremoteplayback",
      kr: "원격재생끄기",
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
      en: "loop",
      kr: "반복",
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
      en: "muted",
      kr: "음소거",
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
      en: "preload",
      kr: "미리불러오기",
      children: [
        {
          en: "auto",
          kr: "자동"
        },
        {
          en: "metadata",
          kr: "메타데이터"
        },
        {
          en: "none",
          kr: "없음"
        }
      ]
    },
    {
      en: "src",
      kr: "출처",
      children: []
    }
  ]
};

export default data;