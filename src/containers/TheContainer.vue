<template>
  <section :class="computedClasses">
    <div :class="$style.inner">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheContainer",
  props: {
    noBackground: Boolean,
  },
  computed: {
    computedClasses(): string[] {
      const { $style, noBackground } = this;
      return [$style.container, !noBackground ? $style.background : ""];
    },
  },
});
</script>

<style lang="scss" module>
.container {
  display: flex;
  justify-content: center;
}
.background {
  background-color: #f3f6fb;
}
.inner {
  margin: 6em 20px;
  width: 100%;
  max-width: 1200px;
}
</style>
