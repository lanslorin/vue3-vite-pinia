import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useCount = defineStore('count', () => {
  const count = ref(0);
  function addCount() {
    count.value++;
  }
  return {
    count,
    addCount,
  };
});
export const useList = defineStore('list', {
  state: () => {
    return {
      list: [
        {
          name: '张三',
          age: 18,
          gender: 1,
        },
        {
          name: '李四',
          age: 28,
          gender: 1,
        },
        {
          name: '王五',
          age: 38,
          gender: 0,
        },
      ],
      counts:5
    };
  },
  actions: {
    addCount() {
      this.counts++
    }
  },
  getters: {
    listFiltered(state) {
      return state.list.slice(0, 2);
    },
    doubleCount(state) {
      return state.counts * 2;
    },
    sixTimeCount() {
      return this.doubleCount * 3;
    }
  },
});
