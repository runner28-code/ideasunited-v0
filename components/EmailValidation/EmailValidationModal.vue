<template>
  <v-dialog max-width="500" v-model="opened">
    <v-card class="email-validation__dialog">
      <v-btn class="close" icon @click="close()">
        <v-icon size="30">$close</v-icon>
      </v-btn>
      <Title>Are you sure?</Title>
      <p class="email-validation__message" >An email in this form appears to have a typo in it.</p>
      <div v-if="suggestions && suggestions.length" class="email-validation__suggestions">
        <div v-for="(suggestion, sidx) in suggestions" :key="sidx" v-show="!suggestion.accepted">
          Did you mean {{`${suggestion.local}@${suggestion.suggestion}`}}? <a @click="useSuggestion(suggestion)">Use this email.</a>
        </div>
      </div>
      <Button
        large
        @click="yesImSure()"
        >Yes, I'm Sure</Button
      >
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    opened: Boolean,
    suggestions: [Array, Object],
    form: Object
  },
  methods: {
    useSuggestion(suggestion) {
      const suggested_email = `${suggestion.local}@${suggestion.suggestion}`
      for (var key in this.form.data){
        if (this.form.data[key] == suggestion.email) {
          this.form.data[key] = suggested_email;
          this.$set(suggestion, 'accepted', true);
        }
      }
      if(this.form.email == suggestion.email) {
        this.form.email = suggested_email;
        this.$set(suggestion, 'accepted', true);
      }
      if(this.suggestions.filter((s) => !s.accepted).length == 0) {
        this.$emit('close');
        this.form.email_validation_options = {};
        this.$emit('submit');
    },
    close(){
      this.$emit('close');
    },
