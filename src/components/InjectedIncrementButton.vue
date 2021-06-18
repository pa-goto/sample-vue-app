<template>
  <button @click="increment">+</button>
</template>

<script lang="ts">
import { useGlobalStore } from "@/stores/Global";
import { useCounterStore } from "@/stores/Counter";

export default {
  setup() {
    const {count, increment } = useCounterStore();

    // サンプルで作ってしまったが、Componentsでストアを触るべきではない。
    const { counter } = useGlobalStore();

    return {
      increment: counter.increment,
    };
  },
};
</script>
