<template>
  <div
    :class="{
      'registration-form-hidden': currentUser && currentUser.confirmed
