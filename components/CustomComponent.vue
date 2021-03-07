<template>
  <div class="custom-sfc">
    <component
      :key="key"
      :is="customComponent.sfc_name"
    ></component>
  </div>
</template>

<script>
import Vue from "vue";
import Spinner from "./Spinner";
import { v4 as uuidv4 } from "uuid";

export default {
