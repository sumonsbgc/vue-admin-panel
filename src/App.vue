<template>
  <div id="kr-wrapper">
    <Sidebar></Sidebar>
    <main class="main-content" id="main-content">
      <Header></Header>
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
};
</script>
