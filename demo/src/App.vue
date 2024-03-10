<template>
  <NFlex align="center" justify="space-around">
    <div class="count" style="padding-right: 80px; border-right: 1px solid #ccc;">
      <div @click="handleCount" style="font-weight: bold; font-size: 28px;">{{ count }}</div>
      <template v-for="item in hotkeys" :key="item.keys">
        <div style="display: flex; align-items: center; margin-left: 20px;">
          <div style="font-size: 24px">快捷键：{{ item.keys.map(item => {
            if (item === 'command') return 'Command/Ctrl';
            return item[0].toUpperCase() + item.slice(1);
          }).join(" + ") }}</div>
          <div style="margin-left: 20px; font-size: 24px">
            操作：<span :style="{ color: item.value > 0 ? '#4fb233' : 'red' }">{{ item.value }}</span>
          </div>
          <NButton style="margin-left: 20px" size="small" type="warning" @click="() => handleCancel(item)">取消快捷键
          </NButton>
        </div>
      </template>
      <NButton style="margin-top: 24px" @click="removeAll" type="error">取消所有快捷键</NButton>
    </div>
    <div class="modal" style="width: 400px;">
      <NButton @click="showModal = true" type="success">Open Modal</NButton>
      <div style="display: flex; align-items: center; margin-left: 20px; flex-wrap: wrap;">
        <div style="font-size: 24px">快捷键：Command/Ctrl + O</div>
        <br />
        <div style=" font-size: 24px">
          操作：Open Modal
        </div>
        <NButton style="margin-left: 20px" size="small" type="warning" @click="handleRemoveModalHotkey">取消快捷键</NButton>
      </div>
    </div>
  </NFlex>
  <NModal v-model:show="showModal" :mask-closable="false" preset="dialog" title="Dialog Modal" content="Are you sure?"
    positive-text="Confirm" negative-text="Cancel" :closable="true" @positive-click="onPositiveClick"
    @negative-click="onNegativeClick" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { NButton, NFlex, NModal } from "naive-ui";
import useHotkey, { HotKey, RemoveHandler } from "../../src/useHotKey";
const count = ref(0);
const hotkeys = ref<HotKey[]>([
  {
    keys: ["space"],
    preventDefault: true,
    handler() {
      count.value += 5;
    },
    value: 5,
  },
  {
    keys: ["command", "b", "m"],
    preventDefault: true,
    handler() {
      count.value -= 10;
    },
    value: -10,
  },
  {
    keys: ["shift", "space"],
    preventDefault: true,
    handler() {
      count.value -= 100;
    },
    value: -100,
  },
]);

const stopArr = useHotkey(hotkeys.value);
const handleCount = () => {
  count.value++;
};
const handleCancel = (hk: HotKey) => {
  stopArr.forEach((item: RemoveHandler) => {
    console.log("item", item);
    item(hk);
  });
};
const removeAll = () => {
  stopArr.forEach((item: RemoveHandler) => item());
};

// modal hotkeys
const showModal = ref(false)
const stopModalHotkey = useHotkey([
  {
    keys: ["command", 'o'],
    preventDefault: true,
    handler() {
      showModal.value = true
    },
  },
])
const onPositiveClick = () => {
  console.log('Submit');
  showModal.value = false;
}
const onNegativeClick = () => {
  console.log('Cancel');
  showModal.value = false;
}
const handleRemoveModalHotkey = () => {
  stopModalHotkey.forEach((item: RemoveHandler) => item())
}
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
