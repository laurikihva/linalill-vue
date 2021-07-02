<template>
  <header :class="$style.header">
    <NavBar />
    <Logo src="/src/assets/images/logo.png" alt="Saaremaa käsitöö" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Logo from "@/components/Logo.vue";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  name: "TheHeader",
  components: {
    Logo,
    NavBar,
  },
});
</script>

<style lang="scss" module>
.header {
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 15em 0;
}
</style>
