<template>
    <div class="{ activeclass: isActive }">
    <b-button variant="outline-dark" @click="toggle" style="width: 100%">{{category.type}}</b-button>
    <div v-show="isActive" class="item-desc">
        <div class="container">
        <div class="card-group">
                  <div v-for="product in products" :key="product._id">
                      
                      <div v-if="product.category.type === category.type">
                          <div class="card mt-2 mb-2 ml-4" style="width: 18rem;">
                            <img :src="product.photo" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">
                                    <a :href="`/products/${product._id}`">
                                                {{product.title}}
                                     </a>
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
    data(){
        return {
            isActive: false
        }
    },
    components: {
        StarRating
    },
    props: ["category", "products"],

    methods: {

      toggle: function () {
        this.isActive = !this.isActive;
      }

    }
}
</script>