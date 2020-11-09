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
      <el-button class="el-button--success" @click="drawer = !drawer">
        Open drawer
      </el-button>
      <el-button class="el-button--danger el-button--translatable" @click="drawer = !drawer">
        Open drawer
      </el-button>
      <el-button class="el-button--warning el-button--hoverable el-button--translatable" @click="drawer = !drawer">
        Open drawer
      </el-button>
      <el-button disabled class="el-button--secondary el-button--hoverable el-button--translatable el-button--focusable" @click="drawer = !drawer">
        Open drawer
      </el-button>
      <el-drawer id="admin-drawer" :visible.sync="drawer" :with-header="false">
        <div class="el-drawer__content flex flex-column">
          <header class="flex align-start justify-between mb-4">
            <h4 class="heading heading--bold">Titre</h4>
            <div>
              <font-awesome-icon class="cursor-pointer size-3 hover-y-translate" @click="drawer = !drawer" icon="times" role="img"/>
            </div>
          </header>
          <main class="self-grow">
            Content
          </main>
          <footer>
            <el-button @click="drawer = !drawer" class="el-button--white el-button--translatable el-button--bold el-button--full el-button--uppercase" style="--text-color:var(--primary-color)">
              <font-awesome-icon icon="check-circle" class="text-success" />
              Save the data
            </el-button>
          </footer>
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
