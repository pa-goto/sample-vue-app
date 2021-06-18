import { inject, reactive } from "vue";
import { InjectionKey } from "vue";

export const CounterKey: InjectionKey<CounterStore> = Symbol("CounterStore");

export function useCounterStore() {
  const store = inject(CounterKey);

  if (!store) {
    throw new Error(`${CounterKey} is not provided`);
  }
  return store;
}

export function counterStore() {
  const state = reactive({
    count: 0,
    loading: false,
  });

  return {
    get count() {
      return state.count;
    },

    increment() {
      state.count += 1;
    },

    decrement() {
      state.count -= 1;
    },

    async asyncIncrement() {
      state.loading = true;
      setTimeout(() => {
        state.loading = false;
        state.count += 1;
      }, 1000);
    },
  };
}

export type CounterStore = ReturnType<typeof counterStore>;
