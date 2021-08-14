<template>
  <header>
    <div class="collapse-menu ml-3" id="header-collapse-menu" @click=$emit("toggleSidebar")>
      <img src="../assets/images/list.svg" alt="" />
    </div>
    <ul class="nav-menu" id="header-nav-menu">
      <li>
        <router-link to="/">
          <img
            src="http://naviesoft.test/assets/images/menu/dashboard.svg"
            alt=""
          />
          <span>Dashboard</span>
        </router-link>
      </li>
      <li>
        <router-link to="/sales">
          <img
            src="http://naviesoft.test/assets/images/menu/sales.svg"
            alt=""
          />
          <span>Sales</span>
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
