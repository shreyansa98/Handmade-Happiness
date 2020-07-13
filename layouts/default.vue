<template>
  <div>
    <navigation v-if="showNavigation">
    <Navbar />
    </navigation>
    <nuxt />
    <navigation v-if="showNavigation">
    <Footer />
    </navigation>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
export default {
  data() {
this.$route.path === '/' ? this.showNavigation = false : this.showNavigation = true
},
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
html{
  min-height: 100%
}
body {
  font-size: 13px;
  line-height: 19px;
  color: #111;
  background-image: linear-gradient(#e9dbff, #fff4db);
}
</style>
