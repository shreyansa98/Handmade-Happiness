 <template>
    <div class="container">
      <div class="dp-container">   
        <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mt-5 d-none d-md-block">
            <div class="row" v-for="category in categories" :key="category._id">
              <nuxt-link :to="`/categories/${category._id}`" class="btn btn-small" style="width: 100%; text-align: left; background: none; outline: none"><img :src="category.photo" style="width: 40px; height: 40px; border-radius: 50%"><h4 class="pl-3" style="display: inline">{{category.type}}</h4></nuxt-link>
            </div>
          </div>

          <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 mt-5">
            <div class="row row-cols-1 row-cols-md-3">
              <div class="col mb-4" v-for="product in products" :key="product._id">
                <div class="card" style="width: 12rem;">
                            <img :src="product.photo" class="card-img-top">
                            <div class="card-body" style="background-color: beige">
                                <h5 class="card-title">
                                    <nuxt-link :to="`/products/${product._id}`">
                                                {{product.title}}
                                    </nuxt-link>
                                </h5>
                                <p class="card-text">
                                            <no-ssr>
                                                <star-rating :rating="product.averageRating" :show-rating="false" :glow="1" :border-width="1" :rounded-corners="true" :read-only="true" :star-size="18" :star-points="[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17]">

                                                </star-rating>
                                            </no-ssr>
                                </p>
                                <p class="card-text"><small class="text-muted">by {{product.owner.name}}</small></p>
                                        <template v-if="$auth.$state.loggedIn">
                                        <template v-if="$auth.$state.user.address">
                                            <p class="card-text"><small class="text-muted">Ships to {{$auth.$state.user.address.city}}</small></p>
                                        </template>
                                        </template>
                                        <p class="card-text">Rs {{product.price}}</p>
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
  }
}

</script>