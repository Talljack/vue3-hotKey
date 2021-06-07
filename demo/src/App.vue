<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div @click='handleCount'>{{count}}</div>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import useHotkey, { HotKey } from '../../src/index'

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
    const stop = useHotkey(hotkeys.value)
    const handleCount = () => {
      countRef.value ++
    }
    setTimeout(() => {
      stop()
    }, 2000);
    return {
      count: countRef,
      handleCount
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
