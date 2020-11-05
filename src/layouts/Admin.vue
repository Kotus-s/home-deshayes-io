<template>
  <div id="__admin">
    <div class="el-row">
      <div id="__sidebar" class="el-col el-col-5 p-8">
        <main>
          <ul v-for="route in routes" v-bind:key="route.path">
            <navigation-item :name="route.name" :link="route.path" :icon="route.icon" />
          </ul>
        </main>
      </div>
      <main id="__content" class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-19">
        <slot/>
      </main>
    </div>
  </div>
</template>
<script>
import NavigationItem from "@/layouts/admin/NavigationItem";
import { routes } from '@/router'

export default {
  components: {
    NavigationItem
  },
  data: function() {
    return {
      routes
    }
  }
}
</script>
