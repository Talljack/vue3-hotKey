import { onUnmounted } from "vue"
import manager from './hotkeyManager'
import { HotKey } from "./interface"

export default (hotKeys: HotKey[]): () => void => {
  hotKeys.forEach((hotkey) => manager.registerHotKey(hotkey))
  onUnmounted(() => {
    hotKeys.forEach((hk) => manager.removeHotKey(hk))
  })
  return () => {
      hotKeys.map((hk: HotKey) => () => {
      manager.removeHotKey(hk)
    })
  }
}