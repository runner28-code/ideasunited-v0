<template>
  <div
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
