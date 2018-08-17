export interface ContentVersion {
  id: string;
  title?: string;
  url?: string;
  disabled?: boolean;
  default?: boolean;
  langs: string[];
  sections: ContentSection[];
  messages: ContentMessage[];
}

export interface ContentSection {
  id: string;
  url?: string;
  color?: string;
  title?: ContentMessageRef;
  disabled?: boolean;
  menu: ContentMenu;
  pages: ContentPage[];
}

export interface ContentMenu {
  items: ContentMenuItem[];
}

export interface ContentMenuItem {
  id: string;
  label?: ContentMessageRef;
  url?: string;
  urlFragment?: string;
  sub?: ContentMenu;
  subActiveOpt?: boolean;
  asGroup?: boolean;
  // Display page entries links instead one item
  // Uses `head` prop of entry for label and and `headId` for urlFragment
  usePageEntries?: boolean;
  usePageUrl?: string;
}

export interface ContentPage {
  id: string;
  url?: string;
  title?: ContentMessageRef;
  menuItems?: ContentMenuItem[];
  entries: (ContentEntry | ContentTextEntry | ContentCommandParamEntry | ContentHintEntry | ContentTutorialsEntry)[];
}

export type ContentEntryType = 'text' | 'command-param' | 'hint' | 'tutorials' | 'interface-option' | 'toc';

export interface ContentEntry {
  id: string;
  type: ContentEntryType;
  head?: ContentMessageRef;
  headId?: string;
}

export interface ContentTextEntry extends ContentEntry {
  type: 'text';
  text: ContentMessageRef;
}

export interface ContentCommandParamEntry extends ContentEntry {
  type: 'command-param';
  name: string;
  paramType?: string;
  values?: string;
  default?: string;
  aliases?: string;
  description?: ContentMessageRef;
}

export interface ContentHintEntry extends ContentEntry {
  type: 'hint';
  text: ContentMessageRef;
}

export interface ContentTutorialsEntry extends ContentEntry {
  type: 'tutorials';
  links: {
    url?: string;
    label?: ContentMessageRef;
    lang?: string;
  }[];
}

export interface ContentInterfaceOptionEntry extends ContentEntry {
  type: 'interface-option';
  name: string;
  interface?: string;
  description?: string;
  showAdditional?: boolean;
  additional?: string;
}

export interface ContentTocEntry extends ContentEntry {
  type: 'toc';
}

export interface ContentMessage {
  id: string;
  context: string;
  locales: {
    lang: string;
    text: string;
    useSource?: boolean;
  }[];
}

export interface ContentMessageRef {
  id?: string;
  text?: string;
}

export interface ContentUiMessage {
  id: string;
  locales: {
    [key: string]: string;
  };
}
