export interface ContentFile {
  __v: string;
  versions: ContentVersion[];
  uiMessages: ContentUiMessage[];
}

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
  langs?: {[key: string]: boolean};
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
  // Visual props
  asGroup?: boolean;
  separatedFromTop?: boolean;
  // Display page entries links instead one item
  // Uses `head` prop of entry for label and and `headId` for urlFragment
  usePageEntries?: boolean;
  usePageUrl?: string;
}

export interface ContentPage {
  id: string;
  url?: string;
  title?: ContentMessageRef;
  generationType?: ContentGenerationType;
  generationFile?: string;
  generationName?: string;
  menuItems?: ContentMenuItem[];
  entries: (ContentEntry | ContentTextEntry | ContentCommandParamEntry | ContentHintEntry | ContentTutorialsEntry)[];
}

export type ContentGenerationType = 'none' | 'interface-options';

export type ContentEntryType = 'text' | 'command-param' | 'hint' | 'tutorials' | 'interface-option' | 'toc' | 'demo';

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
  hintEntry?: ContentHintEntry;
  tutorialsEntry?: ContentTutorialsEntry;
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
  description?: ContentMessageRef;
  showAdditional?: boolean;
  additional?: ContentMessageRef;
  hintEntry?: ContentHintEntry;
  tutorialsEntry?: ContentTutorialsEntry;
}

export interface ContentTocEntry extends ContentEntry {
  type: 'toc';
}

export interface ContentDemoEntry extends ContentEntry {
  type: 'demo';
  source: ContentMessageRef;
  demo: string;
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
