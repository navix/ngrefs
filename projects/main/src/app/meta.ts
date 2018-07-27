export interface ContentVersion {
  file: string;
  index: {
    ver: string;
    lang: string;
    content: ContentItem[];
  };
}

export interface ContentItem {
  menu: string;
  url?: string;
  file?: string;
  body?: string;
  toc?: boolean;
  tocBody?: string;
  children?: ContentItem[];
}
