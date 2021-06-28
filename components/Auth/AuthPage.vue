<template>
  <div
    class="auth-page"
    :style="{
      backgroundImage: activeTheme.splash_screen.url
        ? `url(${activeTheme.splash_screen.url})`
        : null
    }"
  >
  </div>
</template>

<script>
export default {};
</script>

