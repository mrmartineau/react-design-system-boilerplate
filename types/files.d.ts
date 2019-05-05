declare module '*!text' {
  const value: any
  export default value
}

declare module '*package.json' {
  export const main: string
  export const module: string
}

declare module '*.json' {
  const value: any
  export default value
}

declare module '*.md' {
  const content: string
  export default content
}
