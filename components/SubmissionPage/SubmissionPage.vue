<template>
  <div class="submission-page">
    <div class="submission-page__container">
        @close="formDialog = false"
        :id="submissionForm.id"
        :submissionForm="submissionForm"
