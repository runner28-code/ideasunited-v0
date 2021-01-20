<template>
  <div class="submission-form">
    <div class="submission-form__form">
      <client-only>
        <div v-if="submissionForm.state != 'submitted'">
