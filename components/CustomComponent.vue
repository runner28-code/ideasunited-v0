<template>
  <div class="custom-sfc">
    <component
      :key="key"
      v-if="loaded"
    ></component>
  </div>
</template>

<script>
