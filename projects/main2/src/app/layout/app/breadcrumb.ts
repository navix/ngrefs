export interface Breadcrumb {
  link: string;
  title: string;
}

export function compileBreadcrumbs({prefix = '', breadcrumbs}: {
  prefix?: string;
  breadcrumbs: Breadcrumb[];
}): Breadcrumb[] {
  return breadcrumbs.map(b => ({
    link: prefix + b.link,
    title: b.title,
  }));
}
