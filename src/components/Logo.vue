<template>
  <img :class="$style.logo" :src="src" v-bind="$attrs" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Logo",
  props: {
    src: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" module>
.logo {
  margin: 3em;
  max-width: 250px;

  @media (min-width: $break-sm) {
    max-width: none;
  }
}
</style>
