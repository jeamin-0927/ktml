export type Attribute = {
  en: string;
  kr: string;
  attributes: {
    en: string;
    kr: string;
    children: {
      en: string;
      kr: string;
    }[];
  }[];
};
