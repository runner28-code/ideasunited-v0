<template>
    type="text"
    :placeholder="label + (required && markRequired ? ' *' : '')"
    v-model="localValue"
