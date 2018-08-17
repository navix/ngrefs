export function sanitizeFragment(fragment: string) {
  return fragment.replace(/[^a-zA-Z0-9\-_]/g, '');
}
