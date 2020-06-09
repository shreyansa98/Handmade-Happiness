 <template>
  <main>
    <div class="a-spacing-large"></div>

    <div class="container-fluid browsing-history">
      <div class="row">
        <div class="col-sm-8 col-8">
          <h1 class="a-size-large a-spacing-none a-text-normal">All Products</h1>
          <div class="a-spacing-large"></div>
          <!-- Button -->
          <nuxt-link to="/Hh-1010-products" class="a-button-buy-again">Add a new Product</nuxt-link>
          <nuxt-link to="/Hh-1010-category" class="a-button-history margin-right-10">Add a new Category</nuxt-link>
          <nuxt-link to="/Hh-1010-owner" class="a-button-history margin-right-10">Add a new Owner</nuxt-link>
          <nuxt-link to="/Hh-1010-order" class="a-button-history margin-right-10">View orders</nuxt-link>

          <!-- Listing page -->
        </div>
      </div>
    </div>
  
  <div class="a-spacing-large"></div>
  <div class="container-fluid browsing-history">
    <div class="row">
      <div v-for="(product, index) in products" 
      :key="product._id" 
      class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 br bb">
        <div class="history-box">
          <!-- Product Image -->
          <a href="#" class="a-link-normal">
            <img :src="product.photo" class="img-fluid">
          </a>
          <!-- Product Title -->
          <div class="a-spacing-top-base asin-title">
            <span class="a-text-normal">
              <div class="p13n-sc-truncated">{{product.title}}</div>
            </span>
          </div>

        <!-- Product Rating -->
        <div class="a-row">
          <a href="#">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </a>
          <span class="a-letter-space"></span>
        </div>

        <!-- Product Price -->
        <div class="a-row">
          <span class="a-size-base a-color-price">
            <span class="p13n-sc-price">Rs {{product.price}}</span>
          </span>
        </div>

        <!-- Product Button -->
        <div class="a-row">
          <nuxt-link :to="`/Hh-1010-products/${product._id}`" class="a-button-history margin-right-10">Update</nuxt-link>
          <a href="#" class="a-button-history margin-right-10" @click="onDeleteProduct(product._id, index  )">Delete</a>
        </div>
      </div>
      
    </div>
  </div>
  </div>
  </main>
</template>

<script>

export default {
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

<style> 
</style>
