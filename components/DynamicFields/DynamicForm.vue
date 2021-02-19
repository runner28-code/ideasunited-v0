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
