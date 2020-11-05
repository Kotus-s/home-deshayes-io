<template>
  <router-link class="no-decoration" :to="link" v-slot="{ href, isExactActive  }">
    <a :href="href">
      <li :class="{'active': isExactActive, 'mb-3': true}">
        <font-awesome-icon :v-if="icon" :icon="icon" class="mr-2"/>
        {{ name }}
      </li>
    </a>
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
