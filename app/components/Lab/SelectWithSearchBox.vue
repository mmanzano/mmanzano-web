<script setup lang="ts">
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
const searchInput = useTemplateRef<HTMLInputElement>('searchInput');
const selectedItems = ref<Item[]>([]);
const selecting = ref<boolean>(false);
const target = useTemplateRef<HTMLElement>('target');
const selectList = useTemplateRef<HTMLUListElement>('selectList');
const selectTrigger = useTemplateRef<HTMLInputElement>('selectTrigger');

const resetStatus = () => {
  selecting.value = false;
  query.value = '';
}
const selectItem = (item: Item) => {
  selectTrigger.value?.focus();
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
const toggleOverlay = async () => {
  selecting.value = !selecting.value;
  await nextTick();
  if (selecting.value) {
    searchInput.value?.focus();
  } else {
    selectTrigger.value?.focus();
  }
}
const next = (index: number) => {
  const items = selectList.value?.querySelectorAll("li") || [];
  (items[index + 1] || searchInput.value)?.focus();
}
const prev = (index: number) => {
  const items = selectList.value?.querySelectorAll("li") || [];
  (items[index - 1] || searchInput.value)?.focus();
}
const moveToSelectTrigger = () => {
  selectTrigger.value?.focus();
  resetStatus();
}
const moveToFirstElement = () => {
  const listItems = Array.from(selectList.value?.children || []) as HTMLLIElement[];
  listItems[0]?.focus();
}
const closeOverlay = () => {
  resetStatus();
  selectTrigger.value?.focus();
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
        @keyup.esc.stop="closeOverlay"
    >
      <div>
        <button
            @click.prevent.stop="toggleOverlay"
            @keyup.down.prevent.stop="toggleOverlay"
            :class="{'select-trigger': true, 'select-placeholder': !selectedItems.length}"
            ref="selectTrigger"
        >
          <span class="select-value--label">{{ selectedValues }}</span>
          <span class="select-value--reset" v-if="selectedItems.length" @click.stop="removeSelection">X</span>
        </button>
      </div>
      <div>
        <div v-if="selecting" class="select-overlay">
          <div class="search-box" v-if="searchable">
            <input
                ref="searchInput"
                class="search-box--input"
                type="text"
                v-model="query"
                placeholder="Search..."
                @keyup.up.prevent.stop="moveToSelectTrigger"
                @keyup.down.prevent.stop="moveToFirstElement"
            />
          </div>
          <ul
              class="select-list"
              ref="selectList"
          >
            <li
                :class="{
                  'select-list--item': true,
                  'select-list--item-selected': selectedItems.includes(item),
                }"
                v-for="(item, index) in filteredItems"
                :key="item.value"
                tabindex="0"
                @click="selectItem(item)"
                @keyup.enter.stop="selectItem(item)"
                @keyup.down.prevent.stop="next(index)"
                @keyup.up.prevent.stop="prev(index)"
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
  width: max-content;
}
.select-trigger {
  align-items: center;
  background-color: var(--background-trigger);
  border: 0;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  outline: 1px solid var(--outline-trigger);
  padding: 0.5rem 1rem;
  text-align: left;
  text-wrap: nowrap;
  width: var(--width);
  z-index: 1;
}
.select-trigger:focus {
  outline: 4px solid var(--outline-trigger);
}
.select-placeholder {
  color: #7f7f7f;
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
  list-style: none;
  max-height: var(--height);
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