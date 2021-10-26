<template>
  <v-form
    @submit.prevent="submitCallback"
    v-model="valid"
    ref="form"
    class="dynamic-form"
    :disabled="disabled"
  >
    <div :key="field.uuid" v-for="field in fields">
      <component
        :is="`Dynamic${field.type}`"
        v-bind="field"
        v-model="form.data[field.uuid]"
        :rules="rulesForField(field)"
        :mark-required="markRequired"
        v-show="showField(field)"
        :label="field.label"
        :show-label="showLabel"
        :addon-data="addonData(field)"
        :file-input="field.file_input"
      ></component>
    </div>
    <div
      class="dynamic-form__description"
      v-if="description"
      v-html="description"
    ></div>
    <div class="dynamic-form__buttons">
      <Button
        class="btn_back-to-login"
        :refs="$refs"
        v-if="showBackToLogin && !currentUser"
        @click="$emit('backToLogin')"
      >
        Already a member?
      </Button>
      <Button :refs="$refs" type="submit" :disabled="!valid || loading">
        <span v-if="loading">
          <v-progress-circular
            :size="16"
            :width="2"
            indeterminate
          ></v-progress-circular>
          <span style="margin-left: 10px"> Uploading... </span>
        </span>
        <span v-else>
          {{ btnText || "Submit" }}
        </span>
      </Button>
    </div>
  </v-form>
</template>

<script>
import DynamicCheckbox from "./DynamicCheckbox";
import DynamicEmailField from "./DynamicEmailField";
import DynamicHtmlBlock from "./DynamicHtmlBlock";
import DynamicNumberField from "./DynamicNumberField";
import DynamicRadio from "./DynamicRadio";
import DynamicTextArea from "./DynamicTextArea";
import DynamicTextField from "./DynamicTextField";
import DynamicMediaField from "./DynamicMediaField";
import DynamicPasswordField from "./DynamicPasswordField";
import DynamicLinkField from "./DynamicLinkField";
import DynamicFileField from "./DynamicFileField";

export default {
  props: {
    fields: Array,
    value: Object,
    submit: Function,
    markRequired: Boolean,
    showLabel: Boolean,
    description: String,
    btnText: String,
    disabled: Boolean,
    showBackToLogin: Boolean,
  },
  data() {
    return {
      valid: true,
      loading: false,
      form: { ...this.value },
      pdfOrDocTypes: [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
        "application/vnd.ms-word.document.macroEnabled.12",
        "application/vnd.ms-word.template.macroEnabled.12",
      ]
    };
  },
  methods: {
    async submitCallback() {
      this.loading = true;
      try {
        await this.submit();
      } finally {
        this.loading = false;
      }
    },
    showField(field) {
      if (!field.conditional) return true;

      const conditionalField = this.fields.find(
        (f) => f.uuid == field.conditional_uuid
      );
      if (conditionalField.type == "Radio") {
        const conditionalFormOption = conditionalField.options.find((o) => {
          return o.uuid == this.form.data[field.conditional_uuid];
        });
        const conditionalFormValue = conditionalFormOption
          ? conditionalField.options.find((o) => {
              return o.uuid == this.form.data[field.conditional_uuid];
            }).uuid
          : "Option not found";
        return field.conditional_value.includes(conditionalFormValue);
      } else if (conditionalField.type == "Checkbox") {
        return (
          field.conditional_value == this.form.data[field.conditional_uuid]
        );
      } else {
        const conditionalFormValue = this.form.data[field.conditional_uuid];
        const validValues = field.conditional_value.split(",").map((v) => {
          const value = v.trim();
          switch (value) {
            case "true":
              return true;
            case "false":
            default:
              return value;
          }
        });
        return validValues.includes(conditionalFormValue);
      }
    },
    addonData(field) {
      if (field.tpe == "EmailField")
        return this.currentProject.addon_emailpasswordlogin_data;
      else return false;
    },
    rulesForField(field) {
      const rules = field.required ? [this.$rules.required] : [];
      if(field.file_size_limit) {
        const value = this.value.data[field.uuid];
        rules.push( value => {
          return !value || value.size < field.file_size_limit * 1000000 || `File size cannot exceed ${field.file_size_limit} MB.`;
        });
      }
      if(field.allowed_file_types && field.allowed_file_types != "all") {
        const value = this.value.data[field.uuid];
        switch (field.allowed_file_types) {
          case 'images':
            rules.push( value => {
              return !value || value.type.startsWith('image/') || `File type must be an image.`;
            });
            break;
          case 'videos':
            rules.push( value => {
              return !value || value.type.startsWith('video/') || `File type must be a video.`;
            });
            break;
          case 'images_or_videos':
            rules.push( value => {
              return !value || value.type.startsWith('image/') || value.type.startsWith('video/') || `File type must be an image or video.`;
            });
            break;
          case 'pdf_or_doc':
            rules.push( value => {
              return !value || this.pdfOrDocTypes.includes(value.type)|| `File type must be a pdf or Word doc.`;
            });
            break;
        }
      }
      return rules;
    }
  },
  watch: {
    form: {
