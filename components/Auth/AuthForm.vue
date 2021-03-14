<template>
  <div class="auth-wrapper">
    <div class="auth">
      <div>
        <div class="auth-admin-title">
            iU Creator Login
          </span>
        </div>
        <v-form @submit.prevent="login" ref="form" :disabled="disabled">
          <TextField
            v-model="loginForm.email"
            block
            :rules="[$rules.required]"
            label="Email"
            type="email"
            name="email"
          />
          <TextField
            :rules="[$rules.required]"
            v-model="loginForm.password"
            block
            label="Password"
            type="password"
            name="password"
          />
          <div class="auth-footer">
            <div><Button block :refs="$refs" type="submit">Log In</Button></div>
            <nuxt-link to="/forgot-password" class="forgot-password-link">
              Forgot password?
            </nuxt-link>
          </div>
        </v-form>
      </div>
    </div>

    <EmailValidationModal
      :opened="areYouSureDialog"
