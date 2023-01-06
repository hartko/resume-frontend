<template>
  <div id="app">
    <AppHeader> </AppHeader>

    <router-view />
    <AppFooter> </AppFooter>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    AppHeader: Header,
    AppFooter: Footer,
  },
};
</script>

<style>
#app {
  font-family: "Courier New";
  text-align: center;
  color: white;
}
</style>
