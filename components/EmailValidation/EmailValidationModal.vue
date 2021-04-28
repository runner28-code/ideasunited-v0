<template>
  <v-dialog max-width="500" v-model="opened">
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
