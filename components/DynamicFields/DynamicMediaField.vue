<template>
  <div>
    <div class="file-input-wrapper" v-if="fileInput">
      <v-file-input
        class="file-input"
        :placeholder="label + (required && markRequired ? ' *' : '')"
        :value="value"
        @input="$emit('input', $event)"
        :rules="rules"
        outlined
        prepend-icon=""
        @change="handleFileChange"
        ref="fileInput"
        append-icon="$upload"
        @click:append="$refs.fileInput.$el.querySelector('input').click()"
      >
      </v-file-input>
    </div>
    <div class="uploader-wrapper" v-else>
      <div class="uploader__label" v-if="showLabel && label">
        {{ label
        }}<span v-if="required && markRequired" class="radio-group__required"
          >*</span
        >
      </div>
      <v-btn
        @click="remove"
        color="red"
        v-if="value"
        fab
        small
        class="uploader__delete"
      >
        <v-icon color="white">$close</v-icon>
      </v-btn>
      <label class="uploader" @drop.prevent="drop" @dragover.prevent>
        <div class="uploader__placeholder">
          {{
            (value && value.name) ||
              label + (required && markRequired ? " *" : "")
          }}
        </div>
        <input @change="handleChange" class="uploader__input" type="file" />
      </label>
      <v-text-field
        ref="validation"
        class="uploader__validation"
        :value="value"
        type="hidden"
        hide-details="auto"
        :rules="rules"
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  props: {
    value: [typeof window === "undefined" ? Object : window.File, Object],
    placeholder: String,
    ratio: {
      type: Number,
      default: 580 / 320
    },
    circle: Boolean,
    position: {
      type: String,
      default: "center"
    },
    rules: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: "cover"
    },
    required: Boolean,
    markRequired: Boolean,
    label: String,
    showLabel: Boolean,
    fileInput: Boolean
  },
  methods: {
    handleChange(event) {
      if(event.target.files.length == 0) return;
      const file = event.target.files[0];
      file.uuid = uuidv4();

      if (file) this.$emit("input", file);
    },
    handleFileChange(file) {
      if(!file) return;
      file.uuid = uuidv4();
      if (file) this.$emit("input", file);
    },
    drop(event) {
      const file = event.dataTransfer.files[0];
      this.$emit("input", file);
    },
    remove() {
      this.$emit("input", null);
    }
  }
};
</script>

<style scoped lang="scss">
.file-input {
  cursor: pointer;
  &__icon {
    cursor: pointer;
  }
  &::v-deep.v-text-field--enclosed .v-input__append-inner {
    margin-top: 12px;
  }
}
.uploader {
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  border: 2px dashed rgba(0, 0, 0, 0.38);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  height: 100px;

  &-wrapper {
    position: relative;
    margin-bottom: 30px;
  }

  &__label {
    font-weight: bold;
  }

  &__delete {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 1;
  }

  &__validation {
    &:not(.v-input--has-state) {
      display: none !important;
    }
    padding: 0 !important;
    &::v-deep {
      .v-input__slot {
        display: none !important;
      }
    }
  }

  &:hover {
    border-color: rgba(0, 0, 0, 0.3);
  }

  &__placeholder {
    font-size: 24px;
    text-transform: uppercase;
    opacity: 0.4;
    font-weight: bold;
  }

  &__upload-btn {
    background: #f5f5f5e0 !important;
  }

