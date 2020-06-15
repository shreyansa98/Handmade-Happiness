<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <nuxt-link class="navbar-brand" to="/"><img src="https://handmade-happiness-v1.s3.ap-south-1.amazonaws.com/logo.png" alt="logo" class="img-fluid" style="width: 240px; height: 33px"/></nuxt-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
    <div class="navbar-nav mr-auto"></div>
    <form class="form-inline my-2 my-lg-0">
      <Search />
    </form>
    <div class="navbar-nav mr-auto"></div>
    <ul class="navbar-nav">
      <li class="nav-item">
                <template v-if="$auth.$state.loggedIn">
                    <template v-if="$auth.$state.user.address">
                        <nuxt-link to="/address" class="nav-link">
                        Deliver to - {{$auth.$state.user.address.city}}
                        </nuxt-link>
                    </template>
                    <template v-else>
                        <nuxt-link to="/address" class="nav-link">
                            Add Address
                        </nuxt-link>
                    </template>
                
                </template>
                <template v-else>
                    <nuxt-link to="/login" class="nav-link">
                        Deliver to
                    </nuxt-link>
                </template>
        <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
      </li>
      <li class="nav-item">
        <template v-if="$auth.$state.loggedIn">
                    <nuxt-link to="/profile" class="nav-link">
                        Hello, {{$auth.$state.user.name}}
                    </nuxt-link>
                </template>
                <template v-else>
                    <nuxt-link to="/login" class="nav-link">
                        Hello Sign in
                    </nuxt-link>
                </template>
      </li>
      <template v-if="$auth.$state.loggedIn">
          <li class="nav-item">
              <nuxt-link to="/orders" class="nav-link">Orders</nuxt-link>
          </li>
      </template>
      <li class="nav-item">
          <template v-if="$auth.$state.loggedIn">
            <nuxt-link class="nav-link mr-2" to="/cart">Cart({{getCartLength}})</nuxt-link>
          </template>
          <template v-else>
              <nuxt-link class="nav-link mr-2" to="/cart">Cart</nuxt-link>
          </template>
      </li>
    </ul>
    
    
  </div>
</nav>
<!-- <div> -->
  <!-- <b-navbar toggleable="lg" type="dark" variant="dark"> -->

      <!-- <Slidebar/> -->

    <!-- 

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav> -->

      <!-- Right aligned nav items -->
      <!-- <b-navbar-nav class="ml-auto">
            <Search />
      </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
            
            <div class="nav-tools">
                <span class="icp-nav-link-border"> </span>
                
            </div>
            <div class="nav-tools">
                <span class="icp-nav-link-border"> </span>
                <nuxt-link to="/orders" class="nav-a nav-a-2 nav-single-row-link">
                <span class="nav-line-1"></span>
                <span class="nav-line-2">Orders</span>
                </nuxt-link>
            </div>
            <div class="nav-tools">
                <span class="icp-nav-link-border"> </span>
                <nuxt-link to="/cart" class="nav-a nav-a-2" id="nav-cart">
                <span aria-hidden="true" class="nav-line-1"></span>
                <span aria-hidden="true" class="nav-line-2">Cart</span>
                <span class="nav-cart-icon nav-sprite"></span>
                <template v-if="$auth.$state.loggedIn">
                <span id="nav-cart-count" aria-hidden="true" class="nav-cart-count nav-cart-0">{{getCartLength}}</span>
                </template>
                <template v-else>
                    <span id="nav-cart-count" aria-hidden="true" class="nav-cart-count nav-cart-0">0</span>
                </template>
                </nuxt-link>
            </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div> -->

    
</template>



<script>
import {  mapGetters } from "vuex";
import Slidebar from "./Slidebar";
import Search from '~/components/Search';
export default {
    components: {
        Search,
        Slidebar
    },
    computed: {
        ...mapGetters(["getCartLength"])
    }
    
}
</script>