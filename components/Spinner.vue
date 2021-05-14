<template>
  <client-only>
      <HollowDotsSpinner
        :animation-duration="1000"
        :size="100"
        :color="activeTheme.primary_color"
      />
    </div>
  </client-only>
</template>

<script>
export default {
