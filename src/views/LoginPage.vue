<template>
  <v-card color="white" max-width="370" class="mx-auto mt-8">
    <method-selector method="Login">
      <login-form></login-form>
    </method-selector>
  </v-card>
</template>

<script>
import MethodSelector from "../components/UI/MethodSelector";
import LoginForm from "../components/login/LoginForm";

export default {
  components: {
    MethodSelector,
    LoginForm
  },
  data: () => ({})
};
</script>
