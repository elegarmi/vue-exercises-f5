<template>
  <v-list class="d-inline-flex pa-0" id="nav-menu">
    <v-list-item offset-x right>
      <v-list-item-icon>
        <v-icon>mdi-home</v-icon>
      </v-list-item-icon>

      <v-list-item-title>Home</v-list-item-title>
    </v-list-item>

    <v-list-group :value="false" prepend-icon="mdi-school">
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title>Exercises</v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item v-for="(link, i) in exercises" :key="i" :href="link.href">
        <v-list-item-title v-text="link.text"></v-list-item-title>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    exercises: [
      {
        text: "Exercise 17",
        href: "#",
      },
      {
        text: "Exercise 18",
        href: "#",
      },
      {
        text: "Exercise 19",
        href: "#",
      },
    ],
  }),
};
</script>
