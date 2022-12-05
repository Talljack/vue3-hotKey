import { onUnmounted } from "vue"
import manager from './hotkeyManager'
import { HotKey, RemoveHandler } from "./interface"

export default (hotKeys: HotKey[]): RemoveHandler[] => {
  hotKeys.forEach((hotkey) => manager.registerHotKey(hotkey))
  onUnmounted(() => {
    hotKeys.forEach((hk) => manager.removeHotKey(hk))
  })
  return hotKeys.map((hk: HotKey) => () => {
    manager.removeHotKey(hk)
  })
}
