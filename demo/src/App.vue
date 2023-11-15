<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <div @click='handleCount'>{{count}}</div>
  <button @click="handleCancel" style="outline: none;">取消快捷键</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useHotkey, { HotKey, RemoveHandler } from "vue3-hotkey"

export default defineComponent({
  name: 'App',
  setup(props, ctx) {
    const countRef = ref(0)
    const a = ref(1)
    const hotkeys = ref<HotKey[]>([
      {
        keys: ['space'],
        preventDefault: true,
        handler() {
          countRef.value += 5
        }
      },
      {
        keys: ['command', 'b', 'n'],
        preventDefault: true,
        handler() {
          countRef.value -= 10
        }
      },
      {
        keys: ['shift', 'space'],
        preventDefault: true,
        handler() {
          countRef.value -= 100
        }
      }
    ])

    const stopArr = useHotkey(hotkeys.value)
    const handleCount = () => {
      countRef.value ++
    }
    const handleCancel = () => {
      stopArr.forEach((item: RemoveHandler) => item())
    }
    return {
      count: countRef,
      handleCount,
      handleCancel
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
