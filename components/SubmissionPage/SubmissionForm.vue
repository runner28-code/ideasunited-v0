<template>
  <div class="submission-form">
    <div class="submission-form__form">
      <client-only>
        <div v-if="submissionForm.state != 'submitted'">
          <div v-html="submissionForm.submissionForm"></div>
        </div>
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
              opportunity. If you think you're seeing this in error, let us know
              and we'll make it right!
            </div>
            <div>
              <br />
              <Button @click="supportDialog = true">Contact Us</Button>
            </div>
          </div>
          <div v-else>
            <DynamicForm
