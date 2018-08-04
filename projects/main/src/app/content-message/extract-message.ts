import { ContentMessage, ContentMessageRef } from '../content/meta';

export function extractMessage(messages: ContentMessage[], ref: ContentMessageRef, lang: string): string {
  const message = messages.find(m => m.id === ref.id);
  if (message) {
    const locale = message.locales.find(l => l.lang === lang);
    if (locale && locale.text && !locale.useSource) {
      return locale.text;
    } else {
      const enLocal = message.locales.find(l => l.lang === 'en');
      if (enLocal && enLocal.text) {
        return enLocal.text;
      } else {
        return ref.id;
      }
    }
  } else {
    return ref.id;
  }
}
