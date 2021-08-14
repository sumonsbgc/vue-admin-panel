<template>
  <div id="kr-wrapper">
    <Sidebar :open="showSidebar"></Sidebar>
    <main
      class="main-content"
      id="main-content"
      :class="{ 'full-content': !showSidebar }"
    >
      <Header @toggle_Sidebar="showSidebar = !showSidebar"></Header>
      <div class="content" id="content">
        <router-view />
      </div>
      <Footer></Footer>
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Sidebar,
    Header,
    Footer,
  },
  data() {
    return {
      showSidebar: true,
    };
  },

  methods: {
    displaySidebar: () => {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>
