<template>
  <span class="count">
    {{ count }}
  </span>
</template>

<script lang="ts">
import { computed } from "vue";
import { useGlobalStore } from "@/stores/Global";

export default {
  setup() {
    const { counter } = useGlobalStore();

    // const counter = inject(CounterKey);
    // if (!counter) {
    //   throw new Error(`${CounterKey} is not provided`);
    // }
    const count = computed(() => counter.count);

    return {
      count,
    };
  },
};
</script>
