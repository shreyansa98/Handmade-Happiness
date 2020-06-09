<template>
<body>
  
  <!--SHIPPING ADDRESS-->
  <div class="container-fluid">
    <b-navbar toggleable="lg" type="dark" variant="dark">
    <a href="/"><img src="/img/logo.png" alt="logo" class="img-fluid" style="width: 280px; height: 38px"/></a>
    </b-navbar>

      <div class="container">
    <div class="shipping-address">
      
      <div class="a-row">
        <div class="a-size-large a-text-bold a-spacing-mini">Review your order</div>
        <div class="a-row a-spacing-small a-size-mini"></div>
      </div>
      <div class="row">
        <div class="col-xl-9 col-lg-8 col-md-9 col-sm-12">
          <div class="a-row a-spacing-large"></div>
          <div class="spc-top a-box a-spacing-small">
            <div class="a-box-inner">
              <div class="row">
                <div class="col-xl-4 col-lg-6 col-sm-6 col-6">
                  <div class="a-spacing-base">
                    <div class="a-row">
                      <strong>
                        Shipping address
                        <small>
                          <a href="/address">Change</a>
                        </small>
                      </strong>
                    </div>
                    <div class="a-row">
                      <div class="displayAddressDiv">
                        <!-- User's address -->
                        <ul class="displayAddressUL">
                          <li>{{$auth.$state.user.address.fullName}}</li>
                          <li>{{$auth.$state.user.address.houseNumber}}</li>
                          <li>{{$auth.$state.user.address.streetAddress}}</li>
                          <li>{{$auth.$state.user.address.city}}</li>
                          <li>{{$auth.$state.user.address.country}},</li>
                          <li>{{$auth.$state.user.address.pincode}}</li>
                          <li>
                            Phone:
                            <span dir="ltr">{{$auth.$state.user.address.phoneNumber}}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="spc-orders a-box">
            <div class="a-box-inner">
              <div class="shipping-group">
                <!-- Estimated delivery -->
                <div
                  class="a-row a-color-state a-text-bold a-size-medium a-spacing-small"
                >Estimated delivery: {{estimatedDelivery}}</div>
                <div class="row">
                  <!-- Cart -->
                  <div class="col-xl-6 col-lg-7 col-sm-6 col-12">
                    <div class="a-row a-spacing-base" v-for="product in getCart" :key="product._id">
                      <div class="row">
                        <!-- Product's photo -->
                        <div class="col-sm-12 col-lg-4 col-4">
                          <img :src="product.photo" style="width: 100px;" />
                        </div>
                        <!-- Product's Title -->
                        <div class="col-sm-12 col-lg-8 col-8">
                          <div class="a-row">
                            <strong>{{product.title}}</strong>
                          </div>
                          <!-- Product's owner name -->
                          <div class="a-row a-size-small">by {{product.owner.name}}</div>
                          <div class="a-row">
                            <!-- Product's price -->
                            <span class="a-color-price a-spacing-micro">
                              <strong dir="ltr">Rs {{product.price * product.quantity}}</strong>
                            </span>
                          </div>
                          <div class="a-row">
                            <span class="availability a-color-success">In Stock.</span>
                          </div>
                          <div class="a-row">
                            <!-- Product's quantity -->
                            <strong>Quantity: {{product.quantity}}</strong>
                          </div>
                          <div
                            class="a-row a-color-secondary a-size-small"
                          >Sold by:&nbsp;HandmadeHappiness.com, Inc</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-5 col-sm-6 col-12">
                    <div class="a-row shipping-speeds">
                      <fieldset>
                        <span class="shipping-speeds-title a-size-medium">
                          <b>Choose a delivery option:</b>
                        </span>
                        <!-- Delivery option -->
                        <div class="a-spacing-mini wednesday">
                          <!-- Shipping normal -->
                          <input type="radio" name="order0" checked="check" @change="onChooseShipping('normal')" />
                          <span class="a-radio-label">
                            <span class="a-color-success">
                              <strong>Averages 7 business days</strong>
                            </span>
                            <br />
                            <span
                              class="a-color-secondary"
                            >Rs 50&nbsp;-&nbsp;Standard Shipping</span>
                          </span>
                        </div>
                        <br />
                        <div class="a-spacing-mini tuesday">
                          <!-- Shipping fast -->
                          <input type="radio" name="order0" @change="onChooseShipping('fast')" />
                          <span class="a-radio-label">
                            <span class="a-color-success">
                              <strong>Averages 3 business days</strong>
                            </span>
                            <br />
                            <span class="a-color-secondary">Rs 150&nbsp;-&nbsp;Fast track Shipping</span>
                          </span>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-3 col-sm-12 pl-0">
          <div class="a-box-group">
            <div class="a-box a-first">
              <div class="a-box-inner">
                <div class="a-row a-spacing-micro">
                    <span @click="onPurchase" class="a-button-place-order">Place your order</span>
                </div>
                <div class="a-row a-spacing-small a-size-small a-text-center">
                  By placing your order, you agree to HandmadeHappiness's
                  <a href="#">privacy notice</a>
                  and
                  <a href="#">conditions of use</a>.
                </div>
                <div class="a-row">
                  <h3 class="a-spacing-micro a-size-base">Order Summary</h3>
                  <div class="order-summary" style="font-size: 12px;">
                    <div class="row">
                      <!-- Cart's total price -->
                      <div class="col-sm-6">Items:</div>
                      <div class="col-sm-6 text-right">INR Rs {{getCartTotalPrice}}</div>
                    </div>
                    <div class="row">
                      <!-- Shipping cost -->
                      <div class="col-sm-6">Shipping & handling:</div>
                      <div class="col-sm-6 text-right">Rs {{shippingPrice}}</div>
                    </div>
                    <div class="row mt-2">
                      <div class="col-sm-6"></div>
                      <div class="col-sm-6 text-right">
                        <hr />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="a-color-price a-size-medium a-text-bold">Order total:</div>
                      </div>
                      <div class="col-sm-6 text-right">
                        <!-- Total Price with Shipping -->
                        <div class="a-color-price a-size-medium a-text-bold">Rs {{getCartTotalPriceWithShipping}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="a-row a-spacing-small a-spacing-top-small">
        <p class="a-color-secondary a-size-mini">
          Do you need help? Explore our
          <a href="#">Help pages</a> or
          <a href="#">contact us</a>
        </p>
        <p
          class="a-color-secondary a-size-mini"
        >For an item sold by HandmadeHappiness.com: When you click the "Place your order" button, we'll contact you on your phone number for futher process of payment. As of now we are not accepting payment via any payment gateways. You will be directed on the payment process once we reach out to you. Your contract to purchase an item will not be complete until we contact you notifying you that the item has been shipped.</p>
        <div class="a-color-secondary a-size-mini">
          <p class="a-color-secondary a-size-mini">
            We do not accept any return or exchange of the products. Please adhere to this rules strictly
            <br />
            <br />Go to the
            <a href="/">HandmadeHappiness.com homepage</a> without completing your order.
          </p>
        </div>
      </div>
      <hr />
      <p class="a-size-small a-text-center a-color-secondary" data-testid>
        <a href="#">Conditions of Use</a> |
        <a href="#">Privacy Notice</a> © 2020, HandmadeHappiness.com, Inc.
      </p>
    </div>
    </div>
  </div>
</body>

</template>

<script>
import {mapGetters} from "vuex";
export default {
  layout: "none",
  async asyncData ({$axios, store}) {
      try{
          let response = await $axios.$post('/api/shipment', {shipment: "normal"});

          store.commit('setShipping', { price: response.shipment.price, estimatedDelivery: response.shipment.estimated})

          return{
              shippingPrice: response.shipment.price ,
              estimatedDelivery: response.shipment.estimated
          }
      } catch(err){

      }
  },
  computed: {
      ...mapGetters(["getCart", "getCartTotalPrice", "getCartTotalPriceWithShipping", "getEstimatedDelivery", "getAddress"])
      },
  methods: {
      async onChooseShipping(shipment){
          try{
                let response = await this.$axios.$post('/api/shipment', {shipment: shipment});

                this.$store.commit('setShipping', { price: response.shipment.price, estimatedDelivery: response.shipment.estimated})

                    this.shippingPrice = response.shipment.price;
                    this.estimatedDelivery = response.shipment.estimated;
            } catch(err){
                console.log(err);
            }
      },
      async onPurchase() {
      try {
        let user = await this.$axios.get("/api/auth/user");
        console.log(user.data.user.address);
        let response = await this.$axios.$post("/api/orders", {
          totalPrice: this.getCartTotalPriceWithShipping,
          cart: this.getCart,
          estimatedDelivery: this.getEstimatedDelivery,
          country: user.data.user.address.country,
          fullName: user.data.user.address.fullName,
          houseNumber: user.data.user.address.houseNumber,
          streetAddress: user.data.user.address.streetAddress,
          city: user.data.user.address.city,
          state: user.data.user.address.state,
          pincode: user.data.user.address.pincode,
          phoneNumber: user.data.user.address.phoneNumber,
          deliveryInstructions: user.data.user.address.deliveryInstructions,
          securityCode: user.data.user.address.securityCode
        });
        
        if (response.success) {
          // Do something like redirecting to the home page
          this.$store.commit("clearCart");
          this.$router.push("/orders");
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
