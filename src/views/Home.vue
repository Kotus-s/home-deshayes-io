<template>
  <div class="grid grid-flow-row grid-cols-1">
    <div class="col-span-12 mb-8">
      <h3 class="heading heading--shaped">
        Home
      </h3>
    </div>
    <div class="col-span-12">
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

      <el-button v-for="index in 150" :key="index" disabled class="el-button--secondary">
        Big button Disabled {{ index }}
      </el-button>

      <el-drawer id="admin-drawer" :visible.sync="drawer" :with-header="false">
        <div class="el-drawer__content flex flex-col">
          <header class="flex items-start justify-between mb-4">
            <h4 class="heading heading--bold">Titre</h4>
            <div>
              <font-awesome-icon class="cursor-pointer text-xl transform transition-transform hover:-translate-y-1" @click="drawer = !drawer" icon="times" role="img"/>
            </div>
          </header>
          <main class="flex-grow">
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
      drawer: false
    }
  }
}
</script>
