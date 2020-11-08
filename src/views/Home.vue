<template>
  <div class="el-row">
    <div class="el-col-24 mb-8">
      <h3 class="heading heading--shaped">
        Home
      </h3>
    </div>
    <div class="el-col-24">
      <el-button class="el-button--primary el-button--hoverable" @click="drawer = !drawer">
        Open drawer
      </el-button>
      <el-button class="el-button--primary" @click="drawer = !drawer">
        Open drawer
      </el-button>
      <el-button class="el-button--secondary el-button--translatable" @click="drawer = !drawer">
        Open drawer
      </el-button>
      <el-button class="el-button--secondary el-button--hoverable el-button--translatable" @click="drawer = !drawer">
        Open drawer
      </el-button>
      <el-drawer id="admin-drawer" :visible.sync="drawer" :with-header="false">
        <div class="el-drawer__content">
          <header class="flex align-start justify-between mb-4">
            <h4 class="heading heading--bold">Titre</h4>
            <div>
              <font-awesome-icon class="cursor-pointer size-3 hover-y-translate" @click="drawer = !drawer" icon="times" role="img"/>
            </div>
          </header>
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
    return {
      drawer: true
    }
  }
}
</script>
