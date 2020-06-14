<template>
  <div>
    <hr />
    <div class="reviewsMedley">
      <div class="row">

        <div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <!-- Total Customer reviews -->
                  <h4>{{product.reviews.length}} customer reviews</h4>
                <div class="cr-widget-ACR">
                  <span>
                    <star-rating :rating="product.averageRating" :show-rating="false" :glow="1" :border-width="1" :rounded-corners="true" :read-only="true" :star-size="18" :star-points="[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17]">
                    </star-rating>
                    <p>
                      <small>{{product.averageRating.toFixed(1)}} Stars out of 5</small>
                    </p>
                  </span>
                </div>
            </div>

            <template>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <b-card no-body>

                  <b-card-body
                    id="nav-scroller"
                    ref="content"
                    style="position:relative; height:300px; overflow-y:scroll; width: 100%;"
                  >
                <div class="reviews-image-gallery">
                  <h5>Customer images</h5>
                  <!-- Review Images -->
                  <div class="a-row a-spacing-top-small"></div>
                  <div class="a-spacing-small a-spacing-top-small">
                    
                    <img class="img-fluid" width="22.5%" v-for="review in reviews" :key="review._id" :src="review.photo" style="padding-top: 5px"/>
                  </div>
                </div>
                </b-card-body>
    </b-card>
  </div>
            </template>
<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <h4 class="mt-2">Review this product</h4>
          <div class="a-row a-spacing-large">Share your thoughts with other customers</div>
          <div class="a-row">
            <!-- Link to another Review page -->
            <span class="a-button-base writeReviewButton cm-cr-button-wide">
              <span class="a-button-inner">
                <nuxt-link :to="`/reviews/${product._id}`" class="a-button-text">Write a customer review</nuxt-link>
              </span>
            </span>
          </div>

                    <div class="clearfix">
            <div class="float-left">
              <hr class="mt-4 a-spacing-large" />
            </div>
          </div>
</div>

<template>
  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-5">
    <b-card no-body>

      <b-card-body
        id="nav-scroller"
        ref="content"
        style="position:relative; height:300px; overflow-y:scroll; width: 100%;"
      >
          <div class="cr-widget-focalreviews">
            <div class="card-padding">
              <!-- Reviews -->
              <div class="review-body" v-for="review in reviews" :key="review._id">
                <div class="genome-widget">
                  <a href="#">
                    <div class="profile-avatar">
                      <img
                        src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"
                      />
                    </div>
                    <!-- Review Owner -->
                    <div class="profile-content">
                      <span class="a-profile-name"><small>{{review.user.name}}</small></span>
                    </div>
                  </a>
                </div>
                <div class="a-row">
                  <!-- Review Star -->
                  <div class="review-title">{{review.headline}}</div>
                  <no-ssr>
                                   <star-rating :rating="review.rating" :show-rating="false" :glow="1" :border-width="1" :rounded-corners="true" :read-only="true" :star-size="9" :star-points="[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17]">

                                   </star-rating>
                                 </no-ssr>
                  <!-- <a href="#">
                    <i class="fas fa-star" v-for="i in review.rating" :key="i"></i> 
                  </a> -->
                  <!-- Review Headline -->
                  
                </div>
                <div class="review-data">
                  <div
                    style="width: 1px !important; height: 15px !important; background-color: #ddd; display: inline-block; margin: 0px 5px -3px 5px;"
                  ></div>
                  <span class="avp-badge a-color-state">Verified Purchase</span>
                </div>
                <!-- Review Body -->
                <div class="review-body mt-2 mb-2">
                  <span>{{review.body }}</span>
                </div>
                <hr style="margin-top: 10px;" />
              </div>
              <!-- Reviews -->
            </div>
          </div>
          <div class="review-footer">
            <div class="a-row">
              <span class="a-button a-button-base writeReviewButton" id="a-autoid-15">
                <span class="a-button-inner">
                    <nuxt-link :to="`/reviews/${product._id}`" class="a-button-text" role="button">Write a customer review</nuxt-link>
                </span>
              </span>
            </div>
          </div>
</b-card-body>
    </b-card>
  </div>
</template>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
    props: ["product", "reviews"],
    components: {
      StarRating
    }
    
    
};
</script>