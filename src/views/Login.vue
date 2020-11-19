<template>
  <div class="login-container">
    <div class="el-row el-row--flex items-center justify-center">
      <div class="el-col el-col-20 el-col-sm-18">
        <div class="card">
          <div class="card__title text-center">
            <h2 class="heading heading--shaped">
              Login
            </h2>
          </div>
          <div class="card__inner">
            <el-form>
              <el-form label-position="top" label-width="100px" v-model="formData">
                <el-form-item label="E-mail">
                  <el-input class="el-input--primary" v-model="formData.email"></el-input>
                </el-form-item>
                <el-form-item label="Password">
                  <el-input class="el-input--primary" v-model="formData.password" show-password></el-input>
                </el-form-item>
                <el-button class="mt-2 el-button el-button--success el-button--translatable el-button--right">
                  Login
                </el-button>
              </el-form>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function() {
    return {
      formData: {
        email: "",
        password: ""
      }
    }
  }
}
</script>
