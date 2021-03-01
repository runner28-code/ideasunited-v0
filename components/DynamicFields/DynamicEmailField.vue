  <v-text-field
    type="email"
    :placeholder="label + (required && markRequired ? ' *' : '')"
    :value="value"
