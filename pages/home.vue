<template>
  <main class="container mt-5">

        <!-- Main Content -->
        <div class="container mt-5">
          <br/>
          <template>
            <div role="tablist" v-for="category in categories" :key="category._id">
              <div class="card mb-3" style="border-width: 0; background: rgba(255,255,255,0.02)">
              <div class="row justify-content-center">
                <div class="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-2" style="background: none"></div>
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-7 p-2" style="background: none">
                  <img :src="category.photo" class="card-img" style="border-radius: 20%; width: 135px; height: 135px;">
                </div>
                <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-6" style="background: none">
                  <div class="card-body">
                    <h3 class="card-title mt-md-4 mt-sm-2 pb-0 mb-0" style="color: #e85e1a;">{{category.type}}</h3>
                    <p class="card-text"><small class="text-muted"><a :href="`/categories/${category._id}`" style="color: #e85e1a;">Explore all the {{category.type}}.</a></small></p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </template>
          <br/>
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
      console.log('hello');
      let response =  await $axios.$get("/api/products");
      console.log('hello');
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