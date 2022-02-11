<template>
  <v-container>
    <v-spacer></v-spacer>
    <h1 class="display-2 font-weight-bold mb-3">Exercise 18</h1>

    <p class="subheading font-weight-regular">Report card</p>

    <v-toolbar dark class="d-flex justify-space-around form-container">
      <v-toolbar-title>Enter your qualification</v-toolbar-title>
      <v-form ref="form" class="d-inline-flex">
        <v-text-field
          v-model="num"
          label="Num"
          counter
          maxlength="2"
          required
          id="num-input"
        ></v-text-field>

        <v-btn class="grey darken-1" v-on:click="reportCard()"> submit </v-btn>
      </v-form>
    </v-toolbar>

    <div id="result-container">
      <h2 id="result">{{ result }}</h2>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Exercises",

  props: {
    num: {},
    result: {},
  },

  methods: {
    reportCard() {
      if (this.num <= 10) {
        if (this.num > 0 && this.num < 3) {
          this.result = "Too poor";
        }

        if (this.num >= 3 && this.num < 5) {
          this.result = "Below average";
        }

        if (this.num == 5) {
          this.result = "Fair";
        }

        if (this.num == 6) {
          this.result = "Good";
        }

        if (this.num >= 7 && this.num < 9) {
          this.result = "Merit";
        }

        if (this.num >= 9 && this.num < 10) {
          this.result = "Distinction";
        }
      }

      if (this.num > 10 || this.num < 0) {
        alert("This qualification is not valid");
      }
      this.num = "";
    },
  },
};
</script>
