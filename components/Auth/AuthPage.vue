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

export default {};
</script>

<style scoped lang="scss">
