<template>
  <v-stepper v-model="e6" vertical class="elevation-0">
    <!--  -->
    <div v-for="(step, index) in steps" :key="step">
      <v-stepper-step
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
    <v-btn @click="complete = !complete">Step by step</v-btn>
  </v-stepper>
</template>

<script>
export default {
  props: ["steps"],
  data() {
    return {
      e6: 1,
      // steps: [1, 2, 3, 4, 5, 6],
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

<style lang="scss">
.v-stepper {
  &__step {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    &:hover {
      background-color: khaki;
    }
  }
  &__step--active &__label {
    background: khaki;
    border-radius: 24px !important;
    padding: 10px 16px !important;
  }
}
</style>
