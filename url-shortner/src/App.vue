<template>
  <v-app>
    <v-app-bar color="blue-grey lighten-5" class="d-flex flex-column">
      <v-text-field
            value="John Doe"
            label="Solo"
            solo
            disabled
          ></v-text-field>
      <v-btn block elevation="2" text x-large>Short</v-btn>
    </v-app-bar>
  </v-app>
</template>


<script>
export default {
  data() {
    return {};
  },
};
</script>