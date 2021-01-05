<template>
  <v-card color="white" max-width="370" class="mx-auto mt-8">
    <method-selector method="Sign up">
      <register-form></register-form>
    </method-selector>
  </v-card>
</template>

<script>
import MethodSelector from "../components/UI/MethodSelector";
import RegisterForm from "../components/register/RegisterForm";

export default {
  components: {
    MethodSelector,
    RegisterForm
  },
  data: () => ({})
};
</script>
