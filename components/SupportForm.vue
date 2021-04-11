<template>
  <div class="support-form">
    <Title v-if="supportForm.headline" class="support-form__title">{{
      supportForm.headline
    }}</Title>
      {{ supportForm.description }}
    </div>
    <DynamicForm
      :submit="submit"
      :fields="supportForm.support_form"
      v-model="form"
      v-if="!submitted"
      :btn-text="supportForm.btn_text"
    />
    <div v-else class="support-form__submitted">
      Thank you! We will process your request and reply to you shortly.
    </div>
  </div>
</template>
