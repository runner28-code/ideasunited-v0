<template>
  <div class="submission-page">
    <div class="submission-page__container">
      <SubmissionForm
        @close="formDialog = false"
        :id="submissionForm.id"
