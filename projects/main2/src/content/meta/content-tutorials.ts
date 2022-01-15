export class ContentTutorials {
  type = 'tutorials';

  constructor(public links: {href: string; title: string}[]) {
  }
}
