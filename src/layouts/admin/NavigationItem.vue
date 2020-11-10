<template>
  <router-link class="mb-3" :to="link" tag="li">
    <font-awesome-icon :v-if="icon" :icon="icon" class="mr-2"/>
    <span>{{ name }}</span>
  </router-link>
</template>
<script>
export default {
  name: 'navigation-item',
  props: {
    name: String,
    link: String,
    icon: {
      type: String,
      optional: true
    }
  }
}
</script>
