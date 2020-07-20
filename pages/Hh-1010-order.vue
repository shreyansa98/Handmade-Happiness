<template>
  <!--MAIN-->
  <main>
    <!--YOUR ORDER-->
    <div class="container">
      <div class="row">
          <div class="a-spacing-large a-spacing-top-small a-subheader a-breadcrumb">
          <div class="row">
              <h1 class="a-spacing-medium" style="text-align: center">All Orders</h1>
          </div>

          <div class="orderContent a-spacing a-spacing-top-medium mt-2" v-for="order in orders" :key="order._id">
            <div class="orderContentHeader p-2 mt-2 border-bottom haha" style="border-radius: 10px">
              <div class="row">
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  <div class="a-row">
                    <span class="a-size-mini a-color-secondary">Total Amount</span>
                    <br />
                    <span class="a-size-base a-text-bold a-color-secondary">Rs {{order.totalPrice}}</span>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-4 col-md-4 col-sm-4 col-3">
                  <div class="a-row">
                    <span class="a-size-mini a-color-secondary">SHIP TO</span>
                    <br />
                    <!-- Owner's name -->
                      {{ order.owner.name }}
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-5 text-right">
                  <div class="a-row">
                    <span class="a-size-mini a-color-secondary">ORDER # {{order._id}}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Orders body -->
            <div class="orderContentBodyAlt p-2" style="background: rgba(0,0,0,0.1); border-radius: 10px">
              <div class="a-row">

                <h3>{{ order.owner.name }}</h3>
                <h6
                  class="a-size-medium a-text-bold"
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
                </div><hr/>
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