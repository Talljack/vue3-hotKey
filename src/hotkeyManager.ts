import { HotKeys, KeyCodeMap } from './interface'
class HotKeyManager {
  readonly registeredHotkeys: Record<string, HotKeys[]> = {}
  readonly pressedKeys = new Map<string, boolean>()

  constructor () {
    window.addEventListener('keydown', (e) => {
      this.pressedKeys.set(e.key, e.repeat)
      console.log('key', e.key)
      const keyComb = this.getKeyComb(Array.from(this.pressedKeys.keys()))
      this.registeredHotkeys[keyComb]?.forEach((hotKey) => {
        if (!e.repeat || hotKey?.repeat) {
          if (hotKey.preventDefault) e.preventDefault()
          hotKey.handler([...hotKey.keys])
        }
      })
    })
    window.addEventListener('keyup', (e) => {
      if (this.pressedKeys.has(e.key)) {
        this.pressedKeys.delete(e.key)
      }
    })
  }

  registerHotKey = (hotkey: HotKeys) => {
    const keyComb = this.getKeyComb([...hotkey.keys])
    if (!this.registeredHotkeys[keyComb]) {
      this.registeredHotkeys[keyComb] = []
    }
    this.registeredHotkeys[keyComb].push(hotkey)
  }

  getKeyComb = (keys: string[]) => {
    const convertKeys = keys.map(item => {
      // @ts-expect-error
      const stringKey = KeyCodeMap[item]
      if (stringKey) {
        return stringKey
      }
      return item
    })
    return convertKeys.sort().join(' ')
  }

  removeHotKey = (hotKey: HotKeys) => {
    const keyComb = this.getKeyComb([...hotKey.keys])
    const index = this.registeredHotkeys[keyComb]?.indexOf(hotKey) ?? -1
    if (index !== -1) {
      this.registeredHotkeys[keyComb].splice(index, 1)
      return true
    }
    return false
  }
}

export default new HotKeyManager()
