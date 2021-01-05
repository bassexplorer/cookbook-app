<template>
  <v-form v-model="valid" @submit.prevent="onSubmit">
    <v-container>
      <v-row>
        <v-col cols="12" class="px-0">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="px-0">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            type="password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10" class="px-0">
          <v-btn type="submit">Login</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    passwordRules: [
      v => !!v || "Password is required",
      v => v.length >= 8 || "Password must be at least 8 characters",
      v => /\d/.test(v) || "Password must contain a number",
      v => /[A-Z]/.test(v) || "Password must contain an uppercase letter"
    ],
    checkbox: false,
    checkboxRules: [v => !!v || "You must agree to continue!"]
  }),
  methods: {
    ...mapActions("auth", ["loginWithEmail"]),
    onSubmit() {
      if (!this.valid) {
        return;
      } else {
        const userData = {
          email: this.email,
          password: this.password
        };

        this.loginWithEmail(userData);
      }
    }
  }
};
</script>
