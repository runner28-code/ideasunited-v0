<template>
  <component
    :is="item.link ? 'a' : 'div'"
    target="_blank"
    class="text-block__item-wrapper"
