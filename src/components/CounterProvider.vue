<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { provide } from "vue";
import { CounterKey, counterStore } from "@/stores/Counter";

export default {
  setup() {
    provide(CounterKey, counterStore());
    return {};
  },
};
</script>
