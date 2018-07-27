declare module '*.json' {
  const value: any;
  export default value;
}

declare module 'raw-loader!*' {
  const contents: string;
  export = contents;
}
