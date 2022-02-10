<template>
  <v-container>
    <v-spacer></v-spacer>
    <h1 class="display-2 font-weight-bold mb-3">Exercise Seventeen</h1>

    <p class="subheading font-weight-regular">
      Check if user is old enough to drive
    </p>

    <v-toolbar dark class="d-flex justify-space-around form-container">
      <v-toolbar-title>How old are you?</v-toolbar-title>
      <v-form ref="form" class="d-inline-flex">
        <v-text-field label="Age" counter maxlength="3" required></v-text-field>

        <v-btn class="grey darken-1" type="submit" v-on:click="adult">
          submit
        </v-btn>
      </v-form>
    </v-toolbar>

    <div id="result-container"></div>
  </v-container>
</template>

<script>
export default {
  name: "Exercises",

  data: () => ({}),

  methods: {
    adult: function () {
      let container = document.getElementById("result-container");
      // let age = parseInt(prompt('Enter your age'));
      let age = document.getElementById("age-input").value;
      let driver = age < 18 ? "You cannot drive" : "You can drive";

      container.innerHTML = driver;
      alert(driver);
    },
  },
};
</script>
