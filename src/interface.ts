export interface HotKey {
  keys: string[]
  preventDefault?: boolean
  repeat?: boolean
  handler: (keys: string[], e: KeyboardEvent) => any
}

export const KeyCodeMap = {
  ctrl: 'Control',
  space :' ',
  enter :'Enter',
  tab :'Tab',
  delete :'Delete',
  esc :'Escape',
  alt :'Alt',
  option: 'Alt',
  shift :'Shift',
  back :'Backspace',
  meta :'Meta',
  command: "Meta",
  up: "ArrowUp",
  left: 'ArrowLeft',
  right: 'ArrowRight',
  bottom: "ArrowDown"
}

export type RemoveHandler = () => void
