<template>
  <v-card
    class="mx-auto"
    flat
    max-height="500"
    max-width="344"
    color="transparent"
  >
    <v-card-title class="display-1 text--primary"> My Notes </v-card-title>
    <v-sheet class="rounded-xl" outlined>
      <v-card-text>
        <div class="text--primary" v-if="!edit">
          <span v-if="notes === ''">
            Add notes to your saved recipe. Maybe it can help you later! :)
            <br />
            (A little bit more sugar..etc)
          </span>
          {{ notes }}
        </div>
        <v-textarea
          v-if="edit"
          name="input-7-1"
          label="Edit notes"
          v-model="notes"
          hint="Anything that can help you next time!"
        ></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-btn outlined rounded @click.prevent="onEdit" v-if="!edit">
          <v-icon>mdi-pencil</v-icon>
          Edit
        </v-btn>
        <v-btn outlined rounded @click.prevent="onCancel" v-if="edit">
          Cancel
        </v-btn>
        <v-btn outlined rounded @click.prevent="onSave" v-if="edit">
          <v-icon>mdi-check</v-icon>
          Save
        </v-btn>
      </v-card-actions>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  props: {
    notes: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      edit: false,
      changedNote: ""
    };
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from);

    if (this.edit) {
      const userWantsToLeave = confirm(
        "Are you sure? You have unsaved changes!"
      );
      next(userWantsToLeave);
    } else {
      next();
    }
  },
  methods: {
    onEdit() {
      this.edit = true;
      this.changeNote = this.notes;
    },
    onCancel() {
      this.edit = false;
      this.notes = this.changedNote;
    },
    onSave() {
      this.edit = false;
      this.changedNote = this.notes;
    }
  }
};
</script>

<style lang="scss" scoped>
.theme--light.v-sheet--outlined {
  border: thin solid rgba(0, 0, 0, 0.493);
}
.theme--light.v-sheet {
  background-color: transparent;
}
</style>
