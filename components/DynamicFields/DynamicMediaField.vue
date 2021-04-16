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
