<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      return (this.$router.meta && this.$router.meta.layout || 'admin') + '-layout'
    }
  }
}
</script>
