<template>
  <body class="">
  <main class="main-content  mt-0">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
              <div class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center" style="background-image: url('../assets/img/illustrations/illustration-signup.jpg'); background-size: cover;">
              </div>
            </div>
            <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
              <div class="card card-plain">
                <div class="card-header">
                  <h4 class="font-weight-bolder">Sign Up</h4>
                  <p class="mb-0">Enter your email and password to register</p>
                </div>
                <div class="card-body">
                  <form role="form">
                    <div class="input-group input-group-outline mb-3">
                      <input type="text" v-model="account.name" class="form-control" placeholder="Name">
                    </div>
                    <b v-if="errors.name" class="text-sm text-danger">{{ errors.name.join(', ') }}</b>

                    <div class="input-group input-group-outline mb-3">
                      <input type="email" v-model="account.email" class="form-control" placeholder="Email">
                    </div>
                    <b v-if="errors.email" class="text-danger text-sm">{{ errors.email.join(', ') }}</b>
                    <div class="input-group input-group-outline mb-3">
                      <input type="password" v-model="account.password" class="form-control" placeholder="Password">
                    </div>
                    <b v-if="errors.password" class="text-sm text-danger mt-0 pt-0">{{ errors.password.join(', ') }}</b>
                    <div class="text-center">
                      <button type="button" @click="register" class="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Sign Up</button>
                    </div>
                  </form>
                </div>
                <div class="card-footer text-center pt-0 px-lg-2 px-1">
                  <p class="mb-2 text-sm mx-auto">
                    Already have an account?
                    <router-link :to="{name: 'Login'}">
                      Sign in
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  </body>
</template>

<script>
export default {
  name: "Register",
  data () {
    return {
      account: {
        email: '',
        password: '',
        name: ''
      },
      errors: {eamil: [], name: [], password: []}
    }
  },
  methods: {
    register () {
      this.axios.post('/register', this.account).then(response => {
        if(response.data.data === 'success') {
          this.$notify({text: "Registration has been Created", type: 'success'})
        }else {
          this.$notify({text: "Some thing wrong", type: 'danger'})
        }
      }).catch((err) => {
        this.errors = err.response.data.errors
        this.$notify({text: "Some thing wrong", type: 'error'})
      })
    }
  }
}
</script>

<style scoped>

</style>