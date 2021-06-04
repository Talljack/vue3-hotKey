import { onUnmounted } from "vue"
import manager from './hotkeyManager'
import { HotKeys } from "./interface"

export default (hotKeys: HotKeys[]): () => void => {
  hotKeys.forEach((hotkey) => manager.registerHotKey(hotkey))
  onUnmounted(() => {
    hotKeys.forEach((hk) => manager.removeHotKey(hk))
  })
  return () => {
      hotKeys.map((hk: HotKeys) => () => {
      manager.removeHotKey(hk)
    })
  }
}