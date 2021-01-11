<template>
  <v-container>
    <h3 class="display-1 primary--text">Instructions</h3>

    <v-switch v-model="complete" color="error" label="Turn off overview mode">
      <template v-slot:label>
        <div>Turn {{ complete ? "off" : "on" }} overview mode</div>
      </template>
    </v-switch>

    <v-stepper v-model="e6" vertical class="elevation-0">
      <!--  -->
      <div v-for="(step, index) in steps" :key="step">
        <v-stepper-step
          color="error"
          :step="index + 1"
          editable
          :complete="complete"
          class="d-inline-flex"
          edit-icon="mdi-circle-medium"
          complete-icon="mdi-check"
        >
          <span>{{ step }}</span>
        </v-stepper-step>
      </div>
    </v-stepper>
  </v-container>
</template>

<script>
export default {
  props: ["steps"],
  data() {
    return {
      e6: 1,
      complete: true
    };
  },
  methods: {
    changeComplate() {
      this.complete = !this.complete;
    }
  }
};
</script>

<style lang="scss" scorped>
.v-stepper {
  &__step {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    .v-ripple__container {
      display: none !important;
    }
  }
  &__step--active &__label {
    background: #ffccbc;
    border-radius: 24px !important;
    padding: 10px 16px !important;
  }
}

.theme--dark.v-stepper {
  background: transparent !important;
  .v-stepper__step--active .v-stepper__label {
    text-shadow: 0px 0px 0px #000000 !important;
    color: black !important;
  }
}
</style>
