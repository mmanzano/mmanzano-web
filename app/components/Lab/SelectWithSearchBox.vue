<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import defaultItems from './dataForSelect.json' // <= import it
const selecting = ref<boolean>(false);
const query = ref<string>('');
type Item = { label: string, value: string};
type Props = {
  name?: string;
  items?: Item[];
  searchable?: boolean;
  showValue?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  name: 'select-with-search-example',
  items: () => defaultItems as Item[],
  searchable: true,
  showValue: true,
})
const selectedItem = ref<Item|null>(null);
const model = defineModel<string>();
const selectItem = (item: Item) => {
  selectedItem.value = item;
  selecting.value = false;
  query.value = '';
}
const removeSelection = () => {
  selectedItem.value = null;
  selecting.value = false;
}
const filteredItems = computed(() => {
  return props.items.filter((item) => query.value ? item.label.toLowerCase().includes(query.value.toLowerCase()) : true);
})
const target = useTemplateRef<HTMLElement>('target')
onClickOutside(target, event => {
  selecting.value = false;
  query.value = '';
});
watch(selectedItem, (newValue) => {
  model.value = newValue?.value || '';
})
</script>

<template>
  <div class="component">
    <div class="component-title">Select With Search Box</div>
    <div v-if="showValue">
      <label :for="name">Value:</label>
      <input
          :id="name"
          :name="name"
          disabled
          :hidden="!showValue"
          class="form-value"
          type="text"
          v-model="model"
      />
    </div>
    <div
        class="select-container"
        ref="target"
    >
      <div
          @click="selecting=!selecting"
          :class="{'select-trigger': true, 'select-placeholder': !selectedItem}"
          class="select-value"
      >
        <span class="select-value--label">{{ selectedItem?.label || "Select a value" }}</span>
        <span class="select-value--reset" v-if="selectedItem" @click.stop="removeSelection">X</span>
      </div>
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
                'select-list--item-selected': item.value === selectedItem?.value,
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
.form-value {
  border: 0;
  border-radius: 0.2rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
  outline: 1px solid;
}
.select-container {
  position: relative;
}
.select-trigger {
  background-color: var(--background-trigger);
  border-radius: 0.5rem;
  outline: 1px solid var(--outline-trigger);
  padding: 0.5rem 1rem;
  width: var(--width);
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
  height: var(--height);
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