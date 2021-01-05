<template>
  <div class="d-inline-flex">
    <div class="d-inline-flex flex-column align-center">
      <div
        class="v-item-group theme--light v-btn-toggle v-btn-toggle--rounded d-inline-flex"
      >
        <v-btn
          large
          outlined
          @click="onPersonMinus"
          class="rounded-l-xl center-piece"
        >
          <v-icon class="red--text">fa-minus</v-icon>
        </v-btn>

        <div class="center-piece">{{ setPortion }}</div>

        <v-btn
          large
          depressed
          @click="onPersonPlus"
          class="center-piece rounded-r-xl"
        >
          <v-icon class="red--text">fa-plus</v-icon>
        </v-btn>
      </div>
      <span>Persons</span>
    </div>
    <v-btn
      icon
      color="green"
      depressed
      class="my-1 ml-6"
      v-if="portionConfirmer"
      @click="onConfirmPortion"
    >
      <v-icon>mdi-check</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    portion: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data() {
    return {
      setPortion: this.portion,
      confirmedPortion: true
    };
  },
  methods: {
    onPersonPlus() {
      this.setPortion++;
      this.confirmedPortion = false;
    },
    onPersonMinus() {
      if (this.setPortion === 0) return;
      this.setPortion--;
      this.confirmedPortion = false;
    },
    onConfirmPortion() {
      this.confirmedPortion = true;
      //   I need to emit a comfirmed value to the db
    }
  },
  computed: {
    portionConfirmer() {
      if (this.setPortion == this.portion) return false;
      else {
        return !this.confirmedPortion;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.center-piece {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 40px !important;
  background-color: #f5f5f5;
  color: #000000;
  border-color: rgba(0, 0, 0, 0.12) !important;
  border-style: solid;
  border-width: thin;
  opacity: 0.8;
  padding: 0 12px;
  font-size: 1.5rem;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
