<template>
  <div class="support-form">
    <Title v-if="supportForm.headline" class="support-form__title">{{
      supportForm.headline
    }}</Title>
    <div v-if="supportForm.description" class="support-form__description">
      {{ supportForm.description }}
    </div>
      :submit="submit"
      :fields="supportForm.support_form"
      v-model="form"
      v-if="!submitted"
