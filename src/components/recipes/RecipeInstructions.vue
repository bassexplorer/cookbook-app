<template>
  <v-stepper v-model="e6" vertical class="elevation-0">
    <!--  -->
    <div v-for="step in steps" :key="step">
      <v-stepper-step
        :step="step"
        editable
        :complete="complete"
        class="d-inline-flex"
        edit-icon="mdi-check"
        complete-icon="mdi-check"
      >
        <span>This is the {{ step }}. in the line.</span>
      </v-stepper-step>
    </div>
    <v-btn @click="complete = !complete">Overview</v-btn>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      e6: 1,
      steps: [1, 2, 3, 4, 5, 6],
      complete: false
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
