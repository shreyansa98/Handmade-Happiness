 <template>
  <main class="container mx-auto">
    <div class="a-spacing-large"></div>

    <div class="container-fluid browsing-history">
      <div class="row">
          <h1 class="mx-auto mt-2">All Products</h1>
          <!-- Button -->
          <nuxt-link to="/Hh-1010-products" class="btn btn-sm btn-block mt-2" style="outline: none; border-radius: 20px; background: rgba(0,0,0,0.3)">Add a new Product</nuxt-link>
          <nuxt-link to="/Hh-1010-category" class="btn btn-sm btn-block mt-2" style="outline: none; border-radius: 20px; background: rgba(0,0,0,0.3)">Add a new Category</nuxt-link>
          <nuxt-link to="/Hh-1010-owner" class="btn btn-sm btn-block mt-2" style="outline: none; border-radius: 20px; background: rgba(0,0,0,0.3)">Add a new Owner</nuxt-link>
          <nuxt-link to="/Hh-1010-order" class="btn btn-sm btn-block mt-2" style="outline: none; border-radius: 20px; background: rgba(0,0,0,0.3)">View orders</nuxt-link>
      </div>
    </div>

    <div class="col-12 mt-5">
            <div class="row row-cols-1 row-cols-md-3">
              <div class="col mb-4" v-for="product in products" :key="product._id">
                
                <div class="card text-dark h-100 haha" style="border-width: 0; border-radius: 10px; background: none;">
                            <img :src="product.photo" class="card-img-top" style="border-radius: 10px">
                            <div class="card-body" style="text-align: center; border-radius: 10px; background: none; color: #1E3D45">
                                <h5 class="card-title" style="color: #1E3D45">
                                    
                                                {{product.title}}
                                    
                                </h5>
                                <p class="card-text" style="float: right">
                                            <no-ssr>
                                                <star-rating :rating="product.averageRating" :show-rating="false" :glow="1" :border-width="1" :rounded-corners="true" :read-only="true" :star-size="18" :star-points="[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17]">

                                                </star-rating>
                                            </no-ssr>
                                </p>
                                        <p class="card-text">Rs {{product.price}}</p>
                                        <nuxt-link :to="`/Hh-1010-products/${product._id}`" class="btn btn-sm btn-block mt-2" style="outline: none; border-radius: 20px; background: rgba(0,0,0,0.3)">Update</nuxt-link>
                                                    <button type="button" name="submit.add-to-cart" class="btn btn-sm btn-block mt-2" style="outline: none; border-radius: 20px; background: rgba(0,0,0,0.3)" @click="onDeleteProduct(product._id, index  )">Delete</button>
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
  //asyncData is fetching data before nuxt page is loading on the browser
  //It is good for SEO becausse the data will be loaded first
  async asyncData({$axios}) {
    try{
      let response = await $axios.$get("/api/products");
      console.log(response);
      return {
        products: response.products
      }
    } catch (err) {

    }
  },
  methods: {
    async onDeleteProduct(id, index){
      try{
        let  response = await this.$axios.$delete(`/api/products/${id}`);

        if(response.status){
          this.products.splice(index, 1);
        }
      } catch(err){
        console.log(err);
      }
    }
  }
}
</script>
<style scoped>
.haha{
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}
a:hover{
  text-decoration: none;
}
.haha:hover > *{
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transform: scale(0.98);
}
</style>
 