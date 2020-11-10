<template>
  <div id="__admin">
    <div class="el-row">
      <div id="__sidebar" class="el-col el-col-5 p-8">
        <main>
          <ul>
            <navigation-item v-for="route in routes" v-bind:key="route.path" :name="route.name" :link="route.path" :icon="route.icon" />
          </ul>
        </main>
      </div>
      <main id="__content" class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-19 py-10 px-12">
        <transition name="fading" mode="out-in">
          <router-view></router-view>
        </transition>
      </main>
    </div>
    <nav id="__mobile-navbar">
      <ul>
        <navigation-item class="mt-3" v-for="route in routes" v-bind:key="route.path" :name="route.name" :link="route.path" :icon="route.icon" />
      </ul>
    </nav>
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
