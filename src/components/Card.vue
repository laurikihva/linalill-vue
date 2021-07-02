<template>
  <div :class="computedClasses">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  props: {
    color: {
      type: String,
      default: "white",
      validator: (t: string) => ["white", "grey"].includes(t),
    },
  },
  computed: {
    computedClasses(): string[] {
      const { $style, color } = this;
      return [$style.card, $style[color]];
    },
  },
});
</script>

<style lang="scss" module>
.card {
  padding: 2em;
  font-size: 20px;
  width: 100%;
}
.white {
  background-color: #fff;
}
.grey {
  color: #fff;
  background-color: #434343;
}
</style>
