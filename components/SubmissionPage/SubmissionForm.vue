<template>
  <div class="submission-form">
    <div class="submission-form__form">
      <client-only>
        <div v-if="submissionForm.state != 'submitted'">
          <div v-html="submissionForm.submissionForm"></div>
        <div
          v-else-if="
            submissionForm.anon || (currentUser && currentUser.confirmed)
          "
        >
          <div class="text-center" v-if="!eligible">
            <Eligibles :value="submissionForm.eligibilities" />
            <br />
            <div>
              Looks like you don't meet an eligibility requirement for this
