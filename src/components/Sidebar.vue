<template>
  <aside class="left-sidebar" id="left-sidebar">
    <div class="sidebar-brand">
      <router-link :to="{ name: 'Dashboard' }" class="brand-logo">
        <img src="../assets/images/admin-logo.svg" alt="" />
        <span class="text-white text-lg">Dashboard</span>
      </router-link>
      <!-- <div class="front-link mr-2"></div> -->
      <div class="collapse-menu mr-4" id="sidebar-collapse-menu">
        <img src="../assets/images/list-white.svg" alt="" />
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>
