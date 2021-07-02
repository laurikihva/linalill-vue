<template>
  <nav :class="$style.nav">
    <div :class="$style.title">
      <h1 :class="$style.heading">
        Linased riided
        <span :class="$style.subTitle"> | Saaremaa Käsitöö</span>
      </h1>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
});
</script>

<style lang="scss" module>
.nav {
  display: none;
  position: absolute;
  width: 100%;
  top: 0;
  padding: 2em 2.5em;
  color: #fff;
  font-size: 14px;
  text-align: left;

  @media (min-width: $break-md) {
    display: block;
  }
}
.title {
  text-transform: uppercase;
}
.heading {
  font-weight: 900;
}
.subTitle {
  font-weight: 300;
}
</style>
