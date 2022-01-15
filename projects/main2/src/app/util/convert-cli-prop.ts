export function convertCliProp(prop: string) {
  return prop.split(/(?=[A-Z])/).map(s => s.toLowerCase()).join('-');
}
