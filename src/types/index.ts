export type Lang = "en" | "fr";

export type ProjectCategory = "webdev" | "graphic" | "uxui";

export interface LocalisedString {
  en: string;
  fr: string;
}

export interface Project {
  id: string;
  category: ProjectCategory;
  imgPath: string;
  tags: string[];
  title: LocalisedString;
  desc: LocalisedString;
  year: string;
  link?: string;
}
