<template>
  <div>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="VCommerce Logo"
          class="shrink mr-2"
          contain
          src="https://image.flaticon.com/icons/png/512/179/179343.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <h1>
        <span class="mr-2">V Commerce</span>
      </h1>

      <v-spacer></v-spacer>

      <v-btn href="javascript:void(0)" text>
        <span class="mr-2">Logout</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
export default {
  name: "TopBar",
};
</script>
