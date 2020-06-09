<template>
  <main class="listingPage">

        <!-- Main Content -->
        <div class="container">
          <!-- <FeaturedProduct /> -->
          <br/>
          <template>
            <div role="tablist" v-for="category in categories" :key="category._id">
              <Toggle :category="category" :products="products"/>
              <br/>
            </div>
          </template>
        </div>

  </main>
  
</template>

<script>
import StarRating from "vue-star-rating";
import FeaturedProduct from "~/components/FeaturedProduct";
import Toggle from "~/components/Toggle";
export default {
  components: {
    FeaturedProduct,
    StarRating,
    Toggle
  },

  async asyncData({$axios}){
    try{
      let response =  await $axios.$get("/api/products");
      let cat =  await $axios.$get("/api/categories");

      console.log(response.products);
      
      return{
        products: response.products,
        categories: cat.categories
      }
    } catch(err){
      console.log(err);
    }
  }
}
</script>