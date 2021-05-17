<template>
  <v-card flat>
    <v-card-title primary-title>
      <h4>Login</h4>
    </v-card-title>
    <v-form @submit.prevent="handleSubmit">
      <v-text-field
        v-model="form.email"
        prepend-icon="person"
        name="Email"
        label="Email"
      ></v-text-field>
      <v-text-field
        v-model="form.password"
        prepend-icon="lock"
        name="Password"
        label="Password"
        type="current-password"
      ></v-text-field>
      <v-card-actions>
        <v-btn type="submit" primary large block>Login</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      form: {
        scope: "3D4C4097-573B-4BE2-9EE1-1F8BD8F09BB3",
        email: "client@zeel.com",
        password: "Client1!",
      },
    };
  },
  methods: {
    handleSubmit() {
      const params = new URLSearchParams();
      params.append("scope", this.form.scope);
      params.append("email", this.form.email);
      params.append("password", this.form.password);
      this.$store.dispatch("auth/login", params);
      this.$router.push("/");
    },
  },
};
</script>
