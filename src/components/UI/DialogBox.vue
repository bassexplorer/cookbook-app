<template>
  <v-dialog v-model="show" max-width="350">
    <v-card>
      <v-card-title class="headline">
        <slot name="title"></slot>
      </v-card-title>

      <v-card-text>
        <slot name="context"></slot>
      </v-card-text>

      <v-card-actions>
        <slot name="action">
          <v-btn class="px-5" rounded outlined @click.stop="show = false">
            Close
          </v-btn>
        </slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>

<style lang="scss"></style>
