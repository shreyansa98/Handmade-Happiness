<template>
  <!--MAIN-->
  <main>
    <!--YOUR ORDER-->
    <div class="container your-order">
      <div class="row">
          <div class="a-spacing-large a-spacing-top-small a-subheader a-breadcrumb">
          <div class="row">
            <div class="col-md-6 col-sm-5 col-12">
              <h1 class="a-spacing-medium">All Orders</h1>
            </div>
            <nuxt-link to="/Hh-1010-index" class="a-button-history margin-right-10">Go to home page</nuxt-link>
          </div>
          <div class="a-row a-spacing-medium custom-view-options">
            <ul class="a-unordered-list a-nostyle a-horizontal">
              <li role="tab">
                <span class="a-list-item"></span>
              </li>
              <li class="selected" role="tab">
                <span class="a-list-item">
                  <span class="item">Orders</span>
                </span>
              </li>
            </ul>
          </div>

          <div class="orderContent a-spacing a-spacing-top-medium" v-for="order in orders" :key="order._id">
            <div class="orderContentHeader">
              <div class="row">
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  <div class="a-row">
                    <span class="a-size-mini a-color-secondary">Total Amount to be recieved</span>
                    <br />
                    <span class="a-size-base a-text-bold a-color-secondary">Rs {{order.totalPrice}}</span>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-4 col-md-4 col-sm-4 col-3">
                  <div class="a-row">
                    <span class="a-size-mini a-color-secondary">SHIP TO</span>
                    <br />
                    <!-- Owner's name -->
                    <a href class="a-size-base font-weight-bold a-link-normal">
                      {{ order.owner.name }}
                      <i class="far fa-chevron-down"></i>
                    </a>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-5 text-right">
                  <div class="a-row">
                    <span class="a-size-mini a-color-secondary">ORDER # {{order._id}}</span>
                    <br />
                    <a href="#" class="a-size-base font-weight-bold a-link-normal">Order Details</a>
                    &nbsp;
                    <div
                      style="display: inline-block; background-color: #ddd; height: 15px; width: 2px; margin-bottom: -3px;"
                    ></div>&nbsp;
                    <a href="#" class="a-size-base font-weight-bold a-link-normal">Invoice</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Orders body -->
            <div class="orderContentBodyAlt">
              <div class="a-row">
                <h1
                  class="a-size-medium a-text-bold"
                  style="color: #111 !important;font-family: 'MyWebFont',Arial,sans-serif !important; "
                >
                  <!-- Estimated Delivery -->
                  Estimated Delivery - {{ order.estimatedDelivery}}
                </h1>
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
                    <br />
                    <div class="a-row">
                        
                        {{order.fullName}} - {{order.houseNumber}}, {{order.streetAddress}}, {{order.city}}, {{order.state}}, {{order.country}} - {{order.pincode}}
                    </div>
                    <div class="a-row">
                        Phone Numbe: {{order.phoneNumber}}
                    </div>
                    <div class="a-row">
                        Delivery Instructions: {{order.deliveryInstructions}}, Security Code: {{order.securityCode}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      let response = await $axios.$get("/api/order");
      // console.log(response.products[0].owner.address);
      // console.log(response.products[1].owner.address);

      return {
        orders: response.order
      };
    } catch (err) {
      console.log(err);
    }
  }
};
</script>