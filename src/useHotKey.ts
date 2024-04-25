import { onUnmounted } from 'vue'
import manager from './hotkeyManager'
import type { HotKey, RemoveHandler } from './interface'

export default (hotKeys: HotKey[]): RemoveHandler[] => {
  hotKeys.forEach(hotkey => manager.registerHotKey(hotkey))
  onUnmounted(() => {
    hotKeys.forEach(hk => manager.removeHotKey(hk))
  })
  return hotKeys.map((hk: HotKey) => (customHk?: HotKey) => {
    const deleteHk = customHk ?? hk
    manager.removeHotKey(deleteHk)
  })
}
export type { HotKey, RemoveHandler }
