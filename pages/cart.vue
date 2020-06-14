<template>
  <!--MAIN-->
  <main>
    <!--SHOPPING CART-->
    <div class="shopping-cart mt-3">
      <div class="container c-section">
        <div class="row">
            <div class="c-section a-spacing-top-base">
              <div class="a-row sc-cart-header sc-compact-bottom">
                <h2>Shopping Cart</h2>
              </div>
              <form action="#" method="post">
                <div class="sc-list-head">
                  <div class="text-right a-spacing-top-micro">
                    <h6 class="a-color-secondary mr-4">Price</h6>
                  </div>
                </div>
                <!-- List of the item -->
                <div class="border mb-4 p-2">
                <div class="sc-list-body" v-for="product in getCart" :key="product._id">
                  <div class="sc-list-item-border">
                    <div class="a-row a-spacing-top-base a-spacing-base">
                      <div class="row">
                        <!-- Product's Image -->
                        <div class="col-sm-2 col-2">
                          <a href="#" class="a-link-normal">
                            <img :src="product.photo" class="img-fluid w-100" />
                          </a>
                        </div>
                        <div class="col-sm-8 col-8">
                          <!-- Product's Title -->
                          <div class="a-spacing-mini">
                            <h5
                              class="a-link-normal a-size-medium a-text-bold"
                            >{{product.title}}</h5>
                          </div>
                          <div class="sc-action-links">
                            <select @change="onChangeQuantity($event, product)">
                              <option v-for="i in 10" :key="i" :value="i" :selected="checkQty(product.quantity,i)">Qty: &nbsp;{{i}}</option>
                            </select>
                            &nbsp;&nbsp;
                            <span>|</span>
                            &nbsp;
                            <!-- Delete button -->
                            <span class="a-size-small">
                              <a href="#" @click="$store.commit('removeProduct', product)">Delete</a>
                            </span>
                            &nbsp;
                            &nbsp;
                          </div>
                        </div>
                        <div class="col-sm-2 col-2 tr sm-txt-r">
                          <!-- Product's Price -->
                          <p class="a-spacing-small">
                            <h6
                              class="a-size-medium a-color-price sc-price sc-white-space-nowrap sc-product-price sc-price-sign a-text-bold float-right"
                            >Rs {{ product.price * product.quantity }}</h6>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                   <hr style="margin-top: 10px;" />
                </div>
                </div>
                <!-- List of the item -->

                <div class="text-right">
                  <!-- Cart Subtotal -->
                  <h6 class="a-spacing-none a-spacing-top-mini">
                    <span class="a-size-medium">Subtotal ({{getCartLength}} item)</span>
                    <span class="a-color-price a-text-bold">
                      <!-- Cart Total Price -->
                      <span class="a-size-medium a-color-price">Rs {{getCartTotalPrice}}</span>
                    </span>
                  </h6>
                </div>
              </form>
            </div>
            <a href="/placeorder" class="btn btn-light btn-small mx-auto mb-4">Proceed to checkout</a>

        </div>
      </div>
    </div>
    <!--/SHOPPING CART-->
  </main>
  <!--/MAIN-->
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCart", "getCartTotalPrice", "getCartLength"])
  },
  methods: {
    onChangeQuantity(event, product){
      let qty = parseInt(event.target.value);
      this.$store.commit("changeQty", {product, qty});
    },
    checkQty(prodQty, qty){
      if(parseInt(prodQty) === parseInt(qty)){
        return true;
      } else{
        return false;
      }
    }
  }
}
</script>


