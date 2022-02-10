<template>
  <v-container>
    <v-spacer></v-spacer>
    <h1 class="display-2 font-weight-bold mb-3">Exercise 17</h1>

    <p class="subheading font-weight-regular">
      Check if user is old enough to drive
    </p>

    <v-toolbar dark class="d-flex justify-space-around form-container">
      <v-toolbar-title>How old are you?</v-toolbar-title>
      <v-form ref="form" class="d-inline-flex">
        <v-text-field
          label="Age"
          counter
          maxlength="3"
          required
          id="age-input"
        ></v-text-field>

        <v-btn class="grey darken-1" v-on:click="isAdult()"> submit </v-btn>
      </v-form>
    </v-toolbar>

    <div id="result-container">
      <h2 id="result"></h2>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Exercises",

  methods: {
    isAdult() {
      let container = document.getElementById("result");
      // let age = parseInt(prompt('Enter your age'));
      let age = document.getElementById("age-input").value;
      let driver = age < 18 ? "You cannot drive" : "You can drive";

      if (!age) {
        container.innerHTML = "You should enter a num";
      } else {
        container.innerHTML = driver;
      }
    },
  },
};
</script>
