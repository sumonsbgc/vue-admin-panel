<template>
  <aside class="left-sidebar" id="left-sidebar" v-if="open">
    <div class="sidebar-brand">
      <router-link :to="{ name: 'Dashboard' }" class="brand-logo">
        <img src="../assets/images/admin-logo.svg" alt="" />
        <span class="text-white text-lg">Dashboard</span>
      </router-link>
      <!-- <div class="front-link mr-2"></div> -->
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["open"],
};
</script>
