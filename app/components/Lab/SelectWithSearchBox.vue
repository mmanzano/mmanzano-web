<script setup lang="ts">
// Todo: accessibility
// Todo: scope slots to be able to customize the item design
// Todo: use an endpoint to get the data
import { onClickOutside } from '@vueuse/core'
import defaultItems from './dataForSelect.json'

type Item = { label: string, value: string};
type Props = {
  name?: string;
  items?: Item[];
  multiple?: boolean;
  searchable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  name: 'select-with-search-example',
  items: () => defaultItems as Item[],
  multiple: false,
  searchable: true,
})
const model = defineModel<string|string[]>();
const query = ref<string>('');
const selectedItems = ref<Item[]>([]);
const selecting = ref<boolean>(false);
const target = useTemplateRef<HTMLElement>('target')

const resetStatus = () => {
  selecting.value = false;
  query.value = '';
}
const selectItem = (item: Item) => {
  if (props.multiple) {
    const position = selectedItems.value.findIndex((selectedItem) => selectedItem.value === item.value);
    if (position !== -1) {
      selectedItems.value.splice(position, 1);
      resetStatus();
      return;
    }

    selectedItems.value.push(item);
  } else {
    selectedItems.value = [item];
  }

  resetStatus();
}
const removeSelection = () => {
  selectedItems.value = [];
  resetStatus();
}
const filteredItems = computed(() => {
  return props.items.filter((item) => query.value ? item.label.toLowerCase().includes(query.value.toLowerCase()) : true);
})
const selectedValues = computed(() => {
  const selectInputPlaceholder = 'Select a value';

  if (!selectedItems.value?.length) {
    return selectInputPlaceholder;
  }

  return selectedItems.value.map((item) => item.label).join(', ');
})

onClickOutside(target, event => resetStatus());

watch(selectedItems, (newValue) => {
  if (props.multiple) {
    model.value = newValue?.map((item) => item.value) || [];
  } else {
    model.value = newValue?.[0]?.value || '';
  }
}, {
  deep: true
})
</script>

<template>
  <div class="component">
    <div class="component-title"><slot name="title" /></div>
    <div
        class="select-container"
        ref="target"
    >
      <div>
        <div
            @click="selecting=!selecting"
            :class="{'select-trigger': true, 'select-placeholder': !selectedItems.length}"
            class="select-value"
        >
          <span class="select-value--label">{{ selectedValues }}</span>
          <span class="select-value--reset" v-if="selectedItems.length" @click.stop="removeSelection">X</span>
        </div>
      </div>
      <div>
        <div v-if="selecting" class="select-overlay">
          <div class="search-box" v-if="searchable">
            <input
                class="search-box--input"
                type="text"
                v-model="query"
                placeholder="Search..."
            />
          </div>
          <ul class="select-list">
            <li
                :class="{
                  'select-list--item': true,
                  'select-list--item-selected': selectedItems.includes(item),
                }"
                v-for="item in filteredItems"
                :key="item.value"
                @click="selectItem(item)"
            >
              {{ item.label }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <slot />
  </div>
</template>

<style scoped>
.component {
  --background-list-item: aliceblue;
  --background-list-item-hover: lightblue;
  --background-search-box: aliceblue;
  --background-trigger: white;
  --height: 12rem;
  --outline-overlay: lightblue;
  --outline-search-input-box: lightblue;
  --outline-trigger: lightblue;
  --search-input-box--placeholder: royalblue;
  --reset-button-color: indianred;
  --width: 15rem;
}
.component-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.select-container {
  position: relative;
}
.select-trigger {
  background-color: var(--background-trigger);
  border-radius: 0.5rem;
  outline: 1px solid var(--outline-trigger);
  padding: 0.5rem 1rem;
  text-wrap: nowrap;
  width: var(--width);
  z-index: 1;
}
.select-placeholder {
  color: #7f7f7f;
}
.select-value {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.select-value--label {
  overflow: hidden;
  width: calc(var(--width) - 3rem);
}
.select-value--reset {
  border-radius: 50%;
  color: var(--reset-button-color);
  cursor: pointer;
  height: 1.5rem;
  line-height: 1.5rem;
  outline: 1px solid var(--reset-button-color);
  overflow: hidden;
  text-align: center;
  width: 1.5rem;
}
.select-overlay {
  border-radius: 0 0 0.2rem 0.2rem;
  margin-top: 0.5rem;
  position: absolute;
  outline: 1px solid var(--outline-overlay);
  width: var(--width);
  z-index: 1;
}
.search-box {
  background-color: var(--background-search-box);
  border-radius: 0.2rem 0.2rem 0 0;
  padding: 0.5rem;
}
.search-box--input {
  border: 0;
  border-radius: 0.2rem;
  padding: 0.5rem;
  outline: 1px solid var(--outline-search-input-box);
  width: 100%;
}
.search-box--input::placeholder {
  color: var(--search-input-box--placeholder);
}
.select-list {
  max-height: var(--height);
  list-style: none;
  overflow-x: hidden;
  padding: 0;
}
.select-list--item {
  background-color: var(--background-list-item);
  padding: 0.5rem;
}
.select-list--item-selected {
  background-color: var(--background-list-item-hover);
}
.select-list--item:hover {
  background-color: var(--background-list-item-hover);
  padding: 0.5rem;
  cursor: pointer;
}
</style>