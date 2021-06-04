<template>
  <div>
    <div style="color: #4fb233;font-size: 20px;">{{count}}</div>
    <button @click="onClick">click</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useHotkey, { HotKey } from '..'

export default defineComponent({
  name: 'Test',
  setup () {
    const count = ref(0)
    const onClick = () => {
      count.value += 1
    }
    const hotKeys = ref<HotKey[]>([{
      keys: ['space'],
      preventDefault: true,
      handler: () => {
        count.value += 1
      }
    },
    {
      keys: ['ctrl', 'space'],
      preventDefault: true,
      handler: () => {
        count.value -= 1
      }
    },
    {
      keys: ['shift', 'space'],
      preventDefault: true,
      handler: () => {
        count.value -= 5
      }
    }
    ])
    useHotkey(hotKeys.value)
    return {
      count,
      onClick
    }
  }
})
</script>

<style scoped>

</style>