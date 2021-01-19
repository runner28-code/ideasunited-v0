<template>
    <NotFound v-if="status == 404" />
    <NotAuthorized v-else-if="status == 403" />
