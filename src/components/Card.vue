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
    transparent: Boolean,
  },
  computed: {
    computedClasses(): string[] {
      const { $style, color, transparent } = this;
      return [$style.card, $style[color], transparent ? $style.transparent : ""];
    },
  },
});
</script>

<style lang="scss" module>
.card {
  padding: 2em;
  font-size: 20px;
  width: 100%;

  &.white {
    background-color: #fff;

    &.transparent {
      color: #000;
      background-color: rgba(#fff, 0.8);
    }
  }
  &.grey {
    color: #fff;
    background-color: #434343;

    &.transparent {
      background-color: rgba(#434343, 0.8);
    }
  }
}
</style>
