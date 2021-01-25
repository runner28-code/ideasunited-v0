<template>
  <component
    :is="item.link ? 'a' : 'div'"
    :href="item.link"
    target="_blank"
