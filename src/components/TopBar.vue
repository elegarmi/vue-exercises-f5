<template>
  <v-app-bar app color="white--text font-weight-light" dark>
    <a href="/" class="header-info">
      <div class="d-flex align-center">
        <h1 id="logo-name">JS inside Vue</h1>
        <v-spacer></v-spacer>
      </div>
    </a>
    <nav-menu />
  </v-app-bar>
</template>

<script>
import NavMenu from "./NavMenu.vue";

export default {
  name: "TopBar",

  components: { NavMenu },
};
</script>
