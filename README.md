# vue3-hotKey
Vue3 hooks of Keyboard events

## 🦄 Usage
```javascript
import useHotkey, { HotKey } from 'vue3-hotKey'
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
  const stop = useHotkey(hotkeys.value)
}
```

## 📦 Install

```bash
npm i vue3-hotKey

or

yarn add vue3-hotKey
```

## 🌸 Thanks
This project is heavily inspired by the following awesome projects.

- [vue-use-hotkey](https://github.com/XiNiHa/vue-use-hotkey)

## 📄 License

[MIT License](https://github.com/Talljack/vue3-hotKey/blob/main/LICENSE) © 2021-PRESENT [caoyugang_1](https://github.com/Talljack)