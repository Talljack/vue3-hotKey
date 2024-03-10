# vue3-hotKey
Vue3 hooks of Keyboard events.

## 📦 Install

```bash
pnpm i vue3-hotkey

or

yarn add vue3-hotkey
```

## 🦄 Usage
```ts
import useHotkey, { HotKey, RemoveHandler } from 'vue3-hotkey'
import { ref } from 'vue'
setup() {
  const hotkeys = ref<HotKey[]>([
    {
      keys: ['space'],
      preventDefault: true,
      handler(keys) {
        countRef.value += 5
      }
    },
    {
      keys: ['shift', 'space'],
      preventDefault: true,
      handler(keys) {
        countRef.value -= 100
      }
    }
  ])
  const stopArr = useHotkey(hotkeys.value)

  // 取消监听快捷键
  const removeHotKeys = (hk: HotKey) => {
    stopArr.foreach((item: RemoveHandler) => item())
  }
}
```

## 🌸 Thanks
This project is heavily inspired by the following awesome projects.

- [vue-use-hotkey](https://github.com/XiNiHa/vue-use-hotkey)

## 📄 License

[MIT License](https://github.com/Talljack/vue3-hotKey/blob/main/LICENSE) © 2021-PRESENT [Talljack](https://github.com/Talljack)
