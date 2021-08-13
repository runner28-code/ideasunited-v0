<template>
  <div
    class="auth-page"
      backgroundImage: activeTheme.splash_screen.url
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
  width: 100%;
  min-height: 100%;
