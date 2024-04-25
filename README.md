# vue3-hotKey

<p align='center'>
  <img src='/public/logo.png' width="240" />
</p>

<p align='center'>
  <b>Vue3 hooks of Keyboard input.</b>
</p>

## 📦 Install

```bash
pnpm i vue3-hotkey

or

yarn add vue3-hotkey
```

## 🦄 Usage
```typescript
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

## 🍺 Sponsor

如果大家喜欢我的项目的话，可以请我喝杯咖啡哦，谢谢！
<br />
<a href="https://www.yugangcao.com/sponsors">
  <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=Talljack&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" />
</a>
