export interface HotKeys {
  keys: string[]
  preventDefault?: boolean
  repeat?: boolean
  handler: (keys: string[]) => any
}

export const KeyCodeMap = {
  ctrl: 'Control',
  space :' ',
  enter :'Enter',
  tab :'Tab',
  delete :'Delete',
  esc :'Escape',
  alt :'Alt',
  shift :'Shift',
  back :'Backspace',
  meta :'Meta',
  up: "ArrowUp",
  left: 'ArrowLeft',
  right: 'ArrowRight',
  bottom: "ArrowDown"
}