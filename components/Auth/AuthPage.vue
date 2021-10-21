<template>
  <div
    class="auth-page"
    :style="{
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
  width: 100%;
  min-height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-size: cover;
}
