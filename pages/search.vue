<template>
  <main class="listingPage">
    <div class="container-fluid">
      <div class="row">
        <!-- Sidebar -->
        <div class="col-xl-2 col-lg-3 md-4 col-sm-4">

        </div>

        <!-- Main Content -->
        <div class="col-xl-10 col-lg-9 md-8 col-sm-9">

          <div class="mainResults">
              <div class="s-result-item celwidget" v-for="product in products" :key="product._id">
                <div class="s-item-container mt-2">

                  <div>
                    <div class="row">
                       <!-- Image -->
                       <div class="col-sm-3 text-center">
                         <a href="#">
                           <img :src="product.photo" style="width: 150px" class="img-fluid"/>
                         </a>
                       </div>

                       <div class="col-sm-9">
                         <div class="a-row a-spacing-small">
                           <!-- Title and Date -->
                           <nuxt-link :to="`/products/${product.objectID}`" class="a-link-normal">
                             <h4 class="a-size-medium">
                               {{product.title}}
                             </h4>
                           </nuxt-link>
                         </div>
<div class="col-sm-5">
                               <div class="a-row a-spacing-mini">
                                 <!-- Star Ratings -->
                                 <no-ssr>
                                   <star-rating :rating="product.averageRating" :show-rating="false" :glow="1" :border-width="1" :rounded-corners="true" :read-only="true" :star-size="18" :star-points="[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17]">

                                   </star-rating>
                                 </no-ssr>
                               </div>
                             </div>

                         <div class="row">
                           <div class="col-sm-7">

                             <!-- Price -->
                             <div class="a-row a-spacing-none">
                                 <span class="a-offscreen">Rs {{product.price}}</span>
                             </div>

                             <!-- Ratings -->
                             
                           </div>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
                <hr/>
              </div>
          </div>


        </div>


      </div>
    </div>

  </main>
  
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating
  },
  watchQuery: ["title"],
  async asyncData({ $axios, query }) {
    try {
      let products = await $axios.$post("/api/search", { title: query.title });
      return {
        products
      };
    } catch (err) {
      console.log(err);
    }
  }
}
</script>