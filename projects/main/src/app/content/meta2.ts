export interface Content2Data {
  title: string;
  sections: Content2Section[];
}

export interface Content2Section {
  title: string;
  url: string;
  color: string;
  menu: Content2MenuItem[];
  pages: Content2Page[];
}

export interface Content2MenuItem {
  label: string;
  file?: string;
  children?: Content2MenuItem[];
}

export interface Content2Page {
  file: string;
  title: string;
  url: string;
  entries: any[];
  type: 'simple';
  content: Content2PageSimpleContent;
}

export interface Content2PageSimpleContent {
  text: string;
}
