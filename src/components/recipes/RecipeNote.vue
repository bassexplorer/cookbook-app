<template>
  <v-card
    class="mx-auto"
    :class="disableNotes ? 'note-card' : ''"
    flat
    max-height="500"
    max-width="344"
    color="transparent"
  >
    <v-card-title class="display-1 primary--text"> My Notes </v-card-title>
    <v-sheet class="rounded-xl" outlined>
      <v-card-text>
        <div class="text-body-1" v-if="!edit">
          <span v-if="noteCopy === '' && !disableNotes">
            Add notes to your saved recipe. Maybe it can help you later! :)
            <br />
            (A little bit more sugar..etc)
          </span>
          <span v-if="disableNotes">
            You need to save this recipe as a favorite before you can add notes.
          </span>
          {{ noteCopy }}
        </div>
        <v-textarea
          v-if="edit"
          name="input-7-1"
          :disabled="disableNotes"
          label="Edit notes"
          v-model="noteCopy"
          hint="Anything that can help you next time!"
        ></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-btn
          outlined
          rounded
          :disabled="disableNotes"
          @click.prevent="onEdit"
          v-if="!edit"
        >
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
    },
    disableNotes: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      edit: false,
      noteCopy: this.notes,
      changedNote: ""
    };
  },
  methods: {
    onEdit() {
      this.edit = true;
      this.$emit("editing", this.edit);
      this.changeNote = this.noteCopy;
    },
    onCancel() {
      this.edit = false;
      this.$emit("editing", this.edit);
      this.noteCopy = this.changedNote;
    },
    onSave() {
      this.edit = false;
      this.changedNote = this.noteCopy;
      this.$emit("note-changed", this.changedNote);
      this.$emit("editing", this.edit);
    }
  }
};
</script>

<style lang="scss" scoped>
.theme--light.v-sheet--outlined {
  border: thin solid #0000007e;
}
.theme--light.v-sheet,
.theme--dark.v-sheet {
  background-color: transparent;
}
.theme--dark.v-sheet--outlined {
  border: thin solid #ffffff7e;
}

.theme--light .note-card {
  filter: grayscale(1) brightness(1.2);
}

.theme--dark .note-card {
  span {
    color: #ffffff7e;
  }
  .v-card__title {
    color: #ffffff7e !important;
  }
}
</style>
