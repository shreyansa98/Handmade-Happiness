<template>
    <div class="{ activeclass: isActive }">
    <b-button variant="outline-dark" @click="toggle" style="width: 100%">{{category.type}}</b-button>
    <div v-show="isActive" class="item-desc">
        <div class="mainResults">
                <ul class="s-result-list">
                  <li class="s-result-item celwidget" v-for="product in products" :key="product._id">
                      <div v-if="product.category.type === category.type">
                        <div class="s-item-container">
                        <!-- Best Seller -->
                        <div class="a-row a-spacing-small"></div>
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
                                <nuxt-link :to="`/products/${product._id}`" class="a-link-normal">
                                    <h2 class="a-size-medium">
                                    {{product.title}}
                                    <span class="a-letter-space"></span>
                                    <span class="a-letter-space"></span>
                                    </h2>
                                </nuxt-link>
                                </div>

                                <!-- Chefs name -->
                                <div class="a-row a-spacing-small">
                                <span class="a-small-size a-color-secondary">by</span>
                                <span class="a-small-size a-color-secondary">
                                    <a href="#" class="a-link-normal a-text-normal">{{product.owner.name}}</a>
                                </span>
                                </div>

                                <!-- Shipment -->
                                <template v-if="$auth.$state.loggedIn">
                                <template v-if="$auth.$state.user.address">
                                <div class="a-row">
                                <span class="a-small-size">Ships to {{$auth.$state.user.address.city}}</span>
                                </div>
                                </template>
                                </template>

                                <div class="row">
                                <div class="col-sm-7">

                                    <!-- Price -->
                                    <div class="a-row a-spacing-none">
                                    <a href="#" class="a-link-normal a-text-normal">
                                        <span class="a-offscreen">Rs {{product.price}}</span>
                                        <span class="a-color-base sx-zero-spacing">
                                        <span class="sx-price sx-price-large">
                                            <sup class="sx-price-currency">Rs</sup>
                                            <span class="sx-price-whole">{{product.price}}</span>
                                            <sup class="sx-price-fractional">00</sup>
                                        </span>
                                        </span>
                                    </a>
                                    </div>

                                    <!-- Ratings -->
                                    <div class="col-sm-5">
                                    <div class="a-row a-spacing-mini">
                                        <!-- Star Ratings -->
                                        <no-ssr>
                                        <star-rating :rating="product.averageRating" :show-rating="false" :glow="1" :border-width="1" :rounded-corners="true" :read-only="true" :star-size="18" :star-points="[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17]">

                                        </star-rating>
                                        </no-ssr>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                  </li>
                </ul>
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