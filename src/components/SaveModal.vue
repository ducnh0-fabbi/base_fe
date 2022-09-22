<template>
  <div id="savemodal">
    <button class="cancel" @click="cancel">Hủy bỏ</button>
    <button class="save" @click="log">Lưu</button>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
// eslint-disable-next-line no-undef
const props = defineProps({
  filter: {
    type: Object,
    require: true,
    description: "filter object data",
  },
});
const log = () => {
  console.log(props.filter);
};
const emit = defineEmits(["cancel"]);

const cancel = () => {
  emit("cancel");
};
</script>
