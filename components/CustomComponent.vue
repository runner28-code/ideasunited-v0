<template>
  <div class="custom-sfc">
    <component
      :key="key"
      v-if="loaded"
    ></component>
  </div>
</template>

<script>
import Vue from "vue";
import Spinner from "./Spinner";
import { v4 as uuidv4 } from "uuid";

