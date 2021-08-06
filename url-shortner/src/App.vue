<template>
  <v-app>
    <v-app-bar
      color="
    blue-grey lighten-5"
      class=""
    >
      <v-container>
        <v-row>
          <v-col
          cols="12"
          sm="6">
          <v-textarea
            prepend-inner-icon="mdi-comment"
            class="mx-2"
            label="Your URL here"
            rows="1"
          ></v-textarea>
          <v-btn block elevation="2" text x-large>Short</v-btn>
          </v-col>
        </v-row>
      </v-container>
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