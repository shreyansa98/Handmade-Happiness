<template>
    <main>
        <!-- Breadcrumbs -->
        <div class="a-spacing-top-medium"></div>
        <div class="container">
            <div class="wayfinding-breadcrumbs-container">
                <ul class="a-unordered-list a-horizontal a-size-small">
                    <li>
                        <span class="a-list-item" >
                            <a href="#" class="link-normal a-color-tertiary">{{product.category.type}}</a>
                        </span>
                    </li>
                    <li>
                         <span class="a-list-item">></span>
                    </li>
                    <li>
                        <span class="a-list-item" >
                            <a href="#" class="link-normal a-color-tertiary">{{product.title}}</a>
                        </span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="container">
            <div class="dp-container">
                <div class="row">
                    <!-- First 3 Grid: Product Image and Chef's Section -->
                    <div class="col-lg-3 col-md-4 col-sm-4">
                        <div class="leftCol">
                            <!-- Image -->
                            <div class="imgBlock">
                                <div class="eBooksimg">
                                    <img :src="product.photo" class="img-fluid" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <!-- Middle 6 grid: Description -->
                    <div class="col-lg-6 col-md-8 col-sm-8">
                        <div class="centerCol">
                            <!-- Product Title -->
                            <div class="titleDiv">
                                <h1 class="productTitle">
                                    <span class="largeTitle">{{product.title}}</span>
                                </h1>
                            </div>
                            <div class="reviewGroup">
                                <no-ssr>
                                   <star-rating :rating="product.averageRating" :show-rating="false" :glow="1" :border-width="1" :rounded-corners="true" :read-only="true" :star-size="18" :star-points="[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17]">

                                   </star-rating>
                                 </no-ssr>
                            </div>
                            <hr style="margin-top: 10px;" />
                            <!-- Description -->
                            <div class="bookDescription">
                                <div class="bookDescriptionInner">
                                    {{product.description}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Last 3 grid: Buying section -->
                    <div class="col-lg-3 col-md-12 col-sm-12">
                        <div class="combinedBuyBox">
                            <div class="buyBox">
                                <div class="a-section">
                                    <div class="clearfix">

                                        <!-- Product Price -->
                                        <div class="float-right">
                                            <span class="a-size-medium a-color-price offer-price a-text-normal">
                                                Rs {{product.price}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                 <div class="a-section a-spacing-small a-spacing-top-micro">
                                     <div class="row">
                                         <span class="a-color-base buyboxShippingLabel"></span>
                                     </div>
                                 </div>
                                 <div class="a-section a-spacing-small">
                                     <div class="a-section a-spacing-none">
                                         <span class="a-size-medium a-color-success">In Stock</span>
                                     </div>
                                     <div class="a-section a-spacing-mini">Ships from and sold by HandmadeHappiness.com</div>
                                 </div>

                                 <div class="a-section">
                                     <div class="a-button-stack" @click="addProductToCart(product)">
                                          <span class="a-spacing-small a-button-primary a-button-icon">
                                              <span class="a-button-inner">
                                                  <i class="a-icon a-icon-cart"></i>
                                                  <input type="submit" name="submit.add-to-cart" class="a-button-input"/>
                                                   <span class="a-button-text">Add to Cart</span>
                                              </span>
                                          </span>
                                     </div>
                                     <template v-if="getCartLength">
                                                  <nuxt-link to="/cart">
                                     <div class="a-button-stack">
                                          <span class="a-spacing-small a-button-primary a-button-icon">
                                              <span class="a-button-inner">
                                                  <i class="a-icon a-icon-buynow"></i>

                                                  
                                                  <input type="submit" name="submit.add-to-cart" class="a-button-input"/>
                                                   <span class="a-button-text">Buy Now</span>
                                                   
                                              </span>
                                          </span>
                                     </div>
                                     </nuxt-link>
                                                   </template>
                                 </div>

                                 <hr />
                                 <template v-if="$auth.$state.loggedIn">
                                <span class="a-declarative">
                                    <nuxt-link to="/address" class="a-link-normal">
                                        <div class="a-row a-spacing-mini">
                                            <i class="fal fal-map-market-alt"></i>
                                            <span class="a-size-small">Deliver to {{$auth.$state.user.address.city}}</span>
                                        </div>
                                    </nuxt-link>
                                </span>
                                </template>
                                <br/>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>

                <ReviewSection :product="product" :reviews="reviews"/>
            </div>
        </div>


    </main>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import StarRating from "vue-star-rating";
import ReviewSection from "~/components/ReviewSection"
export default {
    components: {
        ReviewSection,
        StarRating
    },
    async asyncData({$axios, params}){
        try{
            let singleProduct = $axios.$get(`/api/products/${params.id}`);
            let manyReviews = $axios.$get(`/api/reviews/${params.id}`);

            const [productResponse, reviewsResponse] = await Promise.all([
                singleProduct, manyReviews
            ]);
            return {
                product: productResponse.product,
                reviews: reviewsResponse.reviews
            }
             
        } catch(err){
            console.log(err);
        }
    },
    methods: {
        ...mapActions(["addProductToCart"])
    },
    computed: {
        ...mapGetters(["getCartLength"])
    }
}
</script>