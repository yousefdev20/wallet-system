<template>
  <div>
    <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
      <div class="sidenav-header">
        <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
        <a class="navbar-brand m-0" href="javascript:void">
          <h5 class="text-center">
            <span class="ms-1 font-weight-bold text-white text-capitalize">ingot brokerage</span>
          </h5>
        </a>
      </div>
      <hr class="horizontal light mt-0 mb-2">
      <div class="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-white" :class="{'active bg-gradient-info': tab==1 }" @click="go({name: 'Admin.Dashboard'})" href="javascript: void">
              <span class="nav-link-text ms-1">Dashboard</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" :class="{'active bg-gradient-info': tab==2 }" @click="go({name: 'Admin.Dashboard.User'})" href="javascript: void">
              <span class="nav-link-text ms-1">Users</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" :class="{'active bg-gradient-info': tab==3 }" @click="go({name: 'Admin.Dashboard.Transaction'})" href="javascript: void">
              <span class="nav-link-text ms-1">Transactions</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" :class="{'active bg-gradient-info': tab==4 }" @click="go({name: 'Admin.Dashboard.PaymentGateway'})" href="javascript: void">
              <span class="nav-link-text ms-1">Payment gateways</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "appDrawerAdmin",
  data () {
    return {
      tab: 1,
    }
  },
  methods: {
    go (route) {
      this.$router.push(route)
      switch (route.name) {
        case 'Admin.Dashboard':
          this.tab = 1
          break;
        case 'Admin.Dashboard.User':
          this.tab = 2
          break;
        case 'Admin.Dashboard.Transaction':
          this.tab = 3
          break;
        case 'Admin.Dashboard.PaymentGateway':
          this.tab = 4
          break;
      }
    }
  }
}
</script>

<style scoped>

</style>