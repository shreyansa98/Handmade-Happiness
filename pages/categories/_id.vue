 <template>
    <div class="container">
      <div class="dp-container">   
        <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 d-none d-md-block" style="margin-top: 15%">
            <!-- <div class="p-0" style="height: 15%; background: #ff5638; opacity: 0.2"></div> -->
            <div class="row haha my-3" v-for="category in categories" :key="category._id" style="border-radius: 10px">
              <nuxt-link :to="`/categories/${category._id}`" class="btn btn-small" style="width: 100%; text-align: left; background: none; outline: none">
                <img :src="category.photo" style="width: 40px; height: 40px; border-radius: 50%"><h5 class="pl-3" style="display: inline; color: #1E3D45">{{category.type}}</h5>
              </nuxt-link>
            </div>
            <!-- <div class="p-0" style="height: 35%; background: #ff5638; opacity: 0.2"></div> -->
          </div>

          <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 mt-5">
            <div class="row row-cols-1 row-cols-md-3">
              <div class="col mb-4" v-for="product in products" :key="product._id">
                
                <div class="card text-dark h-100 haha" style="border-width: 0; border-radius: 10px; background: none;">
                  <nuxt-link :to="`/products/${product._id}`">
                            <img :src="product.photo" class="card-img-top" style="border-radius: 10px">
                  </nuxt-link>
                            <div class="card-body" style="text-align: center; border-radius: 10px; background: none; color: #1E3D45">
                                <nuxt-link :to="`/products/${product._id}`">
                                <h5 class="card-title" style="color: #1E3D45">
                                    
                                                {{product.title}}
                                    
                                </h5>
                                </nuxt-link>
                                <p class="card-text" style="float: right">
                                            <no-ssr>
                                                <star-rating :rating="product.averageRating" :show-rating="false" :glow="1" :border-width="1" :rounded-corners="true" :read-only="true" :star-size="18" :star-points="[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17]">

                                                </star-rating>
                                            </no-ssr>
                                </p>
                                <p class="card-text"><small class="text-muted">by {{product.owner.name}}</small></p>
                                        <p class="card-text">Rs {{product.price}}</p>
                                        <template v-if="$auth.$state.loggedIn">
                                        <div class="a-button-stack" @click="addProductToCart(product)">
                                                    <button type="button" name="submit.add-to-cart" class="btn btn-sm btn-block mt-2" style="outline: none; border-radius: 20px; background: rgba(0,0,0,0.3)">Add to Cart</button>
                                        </div>
                                        </template>
                            </div>
                        </div>
              </div>
            </div>
          </div>


        </div>

    </div>
    </div>
  
</template>


<script>
import { mapActions } from "vuex";
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating
  },

  async asyncData({$axios, params}){
    try{
      let cat =  await $axios.$get(`/api/categories/${params.id}`);
      let allCat = await $axios.$get("/api/categories");
      
      return{
        products: cat.products,
        categories: allCat.categories
      }
    } catch(err){
      console.log(err);
    }
  },
    methods: {
        ...mapActions(["addProductToCart"])
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