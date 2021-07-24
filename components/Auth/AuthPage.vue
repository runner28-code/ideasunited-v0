<template>
  <div
    class="auth-page"
    :style="{
        ? `url(${activeTheme.splash_screen.url})`
        : null
    }"
  >
    <AuthForm @disableAuth="$emit('disableAuth', $event)" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.auth-page {
