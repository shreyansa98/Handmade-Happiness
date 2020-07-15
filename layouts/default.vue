<template>
  <div>
    <navigation v-if="showNavigation">
    <Navbar />
    </navigation>
    <nuxt />
    <navigation v-if="showNavigation">
    <!-- <Footer /> -->
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
  color: #1E3D45;
  /* background-image: linear-gradient(#424242, #f7f7f7); */
  background-image: linear-gradient(#E4DDF0, #DDF0DD);
  /* font-family: 'Architects Daughter', cursive; */
  font-family: 'Exo', sans-serif;;
  /* background-color: #ebebeb; */
}
</style>