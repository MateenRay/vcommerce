<template>
  <div>
    <top-bar />
    <h1>This is Home Page</h1>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
export default {
  name: "Home",

  components: {
    TopBar,
  },
  mounted() {
    this.$store.dispatch("auth/refreshToken", null);
  },
};
</script>
