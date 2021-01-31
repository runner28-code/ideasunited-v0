<template>
    <AuthRegisterForm v-if="!currentUser" />
    <div 
      v-if="currentUser"
