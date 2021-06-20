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
      />
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
