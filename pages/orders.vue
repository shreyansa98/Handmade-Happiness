<template>
  <!--MAIN-->
  <main>
    <!--YOUR ORDER-->
    <div class="container-fluid your-order">
      <div class="row">
        <div class="col-xl-2 col-lg-1 col-md-12"></div>
        <div class="col-xl-8 col-lg-9 col-md-12">
          <div class="a-spacing-large a-spacing-top-small a-subheader a-breadcrumb mt-2">
                    <small>Your Account > </small>
                  <small class="a-color-state">Your Orders</small>
          </div>
          <h3>Order history</h3>

          <div class="orderContent a-spacing a-spacing-top-medium" v-for="order in orders" :key="order._id">
            <div class="orderContentHeader p-2 mt-2 border-bottom" style="background: #F7F7F7">
              <div class="row">
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  <div class="a-row">
                    <span class="a-size-mini a-color-secondary">Total</span>
                    <br />
                    <span class="a-size-base a-text-bold a-color-secondary">Rs {{order.totalPrice}}</span>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-3">
                  <div class="a-row">
                    <span class="a-size-mini a-color-secondary">Ship To</span>
                    <br />
                    <!-- Owner's name -->
                    <a href="/address" class="a-size-base a-link-normal">
                      {{ $auth.$state.user.name }}
                    </a>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-5 text-right">
                  <div class="a-row">
                    <span class="a-size-mini a-color-secondary">ORDER # {{order._id}}</span>
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <!-- Orders body -->
            <div class="orderContentBodyAlt">
              <div class="a-row">
                <h6
                  class="a-size-medium a-text-bold mt-2"
                  style="color: #111 !important;font-family: 'MyWebFont',Arial,sans-serif !important; "
                >
                  <!-- Estimated Delivery -->
                  Estimated Delivery - {{ order.estimatedDelivery}}
                </h6>
              </div>
              <!-- List of products from order -->
              <div v-for="product in order.products" :key="product._id">
                <div class="a-spacing-base"></div>
                <div class="row">
                  <div class="col-xl-2 col-lg-2 col-2">
                    <!-- Product's image -->
                    <a href="#">
                      <img :src="product.productID.photo" class="img-fluid" style="width: 100px;" />
                    </a>
                  </div>
                  <div class="col-xl-10 col-lg-10 col-10">
                    <div class="a-row">
                      <span class="a-size-small">
                        <!-- Product title -->
                        <a href="#">{{ product.productID.title }}</a>
                      </span>
                    </div>
                    <div class="a-row">
                      <span class="a-size-mini a-color-secondary">Sold by: Handmade Happiness</span>
                    </div>
                    <div class="a-row">
                      <!-- Product quantity -->
                      <span
                        class="a-size-mini"
                        style="color: #111; font-weight: 400;"
                      >Quantity: {{ product.quantity }}</span>
                    </div>
                    <div class="a-row">
                      <!-- Product price -->
                      <span class="a-size-mini a-color-price">Rs {{ product.productID.price }}</span>
                    </div>
                  </div>
                </div>
                <hr/>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-1 col-md-12"></div>
      </div>
    </div>
    <!--/YOUR ORDER-->
  </main>
  <!--/MAIN-->
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("/api/orders");

      // console.log(response.products[0].owner.address);
      // console.log(response.products[1].owner.address);

      return {
        orders: response.products
      };
    } catch (err) {
      console.log(err);
    }
  }
};
</script>