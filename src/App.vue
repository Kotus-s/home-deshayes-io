<template>
  <div id="app">
    <component :is="layout">
      <slot></slot>
    </component>
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'admin') + '-layout'
    }
  }
}
</script>
