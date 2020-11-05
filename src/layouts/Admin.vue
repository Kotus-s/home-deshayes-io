<template>
  <div id="__admin">
    <div class="el-row">
      <div id="__sidebar" class="el-col el-col-5 p-8">
        <main>
          <ul>
            <router-link class="no-decoration" to="/" v-slot="{ href, isActive }">
              <a :href="href">
                <li :class="{'active': isActive, 'mb-3': true}">
                  <font-awesome-icon icon="coffee" class="mr-2"/>
                  Home
                </li>
              </a>
            </router-link>
            <router-link class="no-decoration" to="/test" v-slot="{ href, isActive }">
              <a :href="href">
                <li :class="{'active': isActive, 'mb-3': true}">
                  <font-awesome-icon icon="coffee" class="mr-2"/>
                  Test
                </li>
              </a>
            </router-link>
          </ul>
        </main>
      </div>
      <main id="__content" class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-19">
        <slot/>
      </main>
    </div>
  </div>
</template>
