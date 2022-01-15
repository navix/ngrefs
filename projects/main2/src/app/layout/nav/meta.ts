export interface NavEntry {
  link: string;

  title: string;

  /**
   * For search purposes.
   */
  keywords?: string[];

  children?: NavEntry[];

  noBreadcrumbs?: boolean;

  exactActive?: boolean;
}
