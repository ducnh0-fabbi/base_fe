<template>
  <div
    :class="[
      { open: showOption, empty: valueTitle === placeholder, disabled: disable },
      focused ? 'a-select-focused' : '',
      'a-select',
    ]"
    v-click-outside="hideOptions"
    ref="appSelectRef"
  >
    <!-- target for TAB || SHIFT + TAB  -->
    <label class="mask-tab" @click="toggleSelect">
      <input type="text" ref="cloneSelectRef" readonly />
    </label>

    <!-- label of value selected  -->
    <div class="a-select-value" @click="toggleSelect">
      <p class="one-line">
        {{ valueTitle }}
      </p>
    </div>
    <!-- END label of value selected  -->

    <!-- list options of select  -->
    <div v-if="showOption && !disable" class="a-select-list">
      <!-- search option by label  -->
      <div v-if="search" class="a-select-search">
        <input type="text" v-model="keyword" :placeholder="searchPlaceholder" />
      </div>
      <!-- END search option by label  -->

      <!-- empty options -->
      <div
        v-if="emptyOption"
        :class="[0 === modelValue ? 'selected' : '', 'a-select-option']"
        @click="chooseOption(null)"
      ></div>
      <!-- END empty options -->

      <!-- options -->
      <div
        v-for="(option, key) of optionsFiltered"
        :class="['a-select-option', option.id === modelValue ? 'selected' : '']"
        :key="'option-' + key"
        @click="chooseOption(option.id)"
      >
        {{ option.name }}
      </div>
      <!-- END options -->
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { defineProps, defineEmits, ref, computed, onMounted, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: null,
    required: true,
  },
  options: {
    type: Array,
    required: true,
    description: 'Array object options for select [ { value: ??, label: ?? } ]',
  },
  emptyOption: {
    type: Boolean,
    require: false,
    default: true,
    description: 'Allow display empty option',
  },
  placeholder: {
    type: String,
    default: '選択してください',
    description: 'Recommend for user',
  },
  search: {
    type: Boolean,
    default: false,
    required: false,
    description: 'Use search option by title',
  },
  searchPlaceholder: {
    type: String,
    default: 'キーワード',
    required: false,
    description: 'Placeholder for input search',
  },
  disable: {
    type: Boolean,
    default: false,
    required: false,
    description: 'Disable user change value of select',
  },
});

const keyword = ref('');
const showOption = ref(false);
const appSelectRef = ref('');
const cloneSelectRef = ref('');
const focused = ref(false);
const optionsFiltered = computed(() => {
  if (!props.search) {
    return props.options;
  }

  return props.options.filter((item) =>
    item.name.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

watch(
  () => showOption.value,
  (newValue) => {
    if (newValue) {
      focused.value = newValue;
    }
  }
);

const valueTitle = computed(() => {
  const optionSelected = props.options.find((item) => item.id === props.modelValue);
  return optionSelected?.name ?? props.placeholder;
});

const getIndexChangeOption = (type = 'prev') => {
  const indexSelected = props.options.findIndex((item) => item.id === props.modelValue);

  if (type === 'prev') {
    if (indexSelected === -1) {
      return indexSelected;
    } else {
      return indexSelected - 1;
    }
  } else {
    if (indexSelected === props.options.length - 1) {
      return indexSelected;
    } else {
      return indexSelected + 1;
    }
  }
};

onMounted(() => {
  window.addEventListener('keyup', function (e) {
    if (e.keyCode === 9) {
      showOption.value = false;
    }
    if (document.activeElement === cloneSelectRef.value) {
      focused.value = true;

      if (e.keyCode === 13) {
        showOption.value = !showOption.value;
      } else if (
        document.activeElement === cloneSelectRef.value &&
        showOption.value === true &&
        [38, 40].includes(e.keyCode)
      ) {
        showOption.value = true;
      } else {
        showOption.value = false;
      }
    } else {
      focused.value = false;
    }

    if (
      (document.activeElement === cloneSelectRef.value && e.keyCode === 40) ||
      (showOption.value && e.keyCode === 40)
    ) {
      emit('update:modelValue', props.options[getIndexChangeOption('next')]?.value);
    }

    if (
      (document.activeElement === cloneSelectRef.value && e.keyCode === 38) ||
      (showOption.value && e.keyCode === 38)
    ) {
      emit('update:modelValue', props.options[getIndexChangeOption('prev')]?.value ?? 0);
    }
  });
});

const emit = defineEmits(['update:modelValue', 'changeValue']);
const chooseOption = (value) => {
  emit('update:modelValue', value);
  emit('changeValue', value);
  toggleSelect();
};

const toggleSelect = () => {
  if (props.disable) return;
  showOption.value = !showOption.value;
  appSelectRef.value.focus();
};

const hideOptions = () => {
  showOption.value = false;
  focused.value = false;
};
</script>
