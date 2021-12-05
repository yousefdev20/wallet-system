<template>
  <div style="background: #f0f2f5 !important; height: 100vh">
    <div v-if="!$route.meta.isRoot">
      <template v-if="!$route.meta.public">
        <app-drawer />
        <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg" style="margin-inline-start: 17.125rem">
          <app-navbar></app-navbar>
          <div class="container-fluid py-4">
            <router-view :key="$route.fullPath"></router-view>
          </div>
        </main>
      </template>
      <template v-else>
        <router-view :key="$route.fullpath"></router-view>
      </template>
    </div>
    <div v-else>
      <app-drawer-admin />
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg" style="margin-inline-start: 17.125rem">
        <app-navbar-admin></app-navbar-admin>
        <div class="container-fluid py-4">
          <router-view :key="$route.fullPath"></router-view>
        </div>
      </main>
    </div>
    <notifications position="bottom right" type="success"/>
  </div>
</template>
<script>
import AppDrawer from "./components/client/appDrawer";
import AppNavbar from "./components/client/appNavbar";

import AppDrawerAdmin from "./components/admin/appDrawer";
import AppNavbarAdmin from "./components/admin/appNavbar";

require('../public/assets/css/material-dashboard.min.css')

export default {
  components: {AppDrawer, AppNavbar, AppDrawerAdmin, AppNavbarAdmin}
}
</script>