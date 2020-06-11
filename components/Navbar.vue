<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">

      <!-- <Slidebar/> -->

    <a href="/"><img src="https://handmade-happiness-v1.s3.ap-south-1.amazonaws.com/logo.png" alt="logo" class="img-fluid" style="width: 280px; height: 38px"/></a>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
            <Search />
      </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
            
            <div class="nav-global-location" right>
                <span class="icp-nav-link-border"> </span>
                <template v-if="$auth.$state.loggedIn">
                    <template v-if="$auth.$state.user.address">
                        <nuxt-link to="/address" class="nav-a nav-a-2">
                            <div class="nav-sprite" id="nav-packard-glow-loc-icon"></div>
                            <div id="glow-ingress-block">
                                <span class="nav-line-1" id="glow-ingress-line1">Deliver to</span>
                                <span class="nav-line-2" id="glow-ingress-line2">{{$auth.$state.user.address.city}}</span>
                            </div>
                        </nuxt-link>
                    </template>
                    <template v-else>
                        <nuxt-link to="/address" class="nav-a nav-a-2">
                            <div class="nav-sprite" id="nav-packard-glow-loc-icon"></div>
                            <div id="glow-ingress-block">
                                <span class="nav-line-1" id="glow-ingress-line1">Add Address</span>
                            </div>
                        </nuxt-link>
                    </template>
                
                </template>
                <template v-else>
                    <nuxt-link to="/login" class="nav-a nav-a-2">
                
                    <div class="nav-sprite" id="nav-packard-glow-loc-icon"></div>
                    <div id="glow-ingress-block">
                        <span class="nav-line-1" id="glow-ingress-line1">Deliver to</span>
                    </div>
                    </nuxt-link>
                </template>
            </div>
            
            <div class="nav-tools">
                <span class="icp-nav-link-border"> </span>
                <template v-if="$auth.$state.loggedIn">
                    <nuxt-link to="/profile" class="nav-a nav-a-2" id="nav-link-accountList" tabindex="0">
                        <span class="nav-line-1">Hello,</span>
                        <span class="nav-line-2">
                            {{$auth.$state.user.name}}
                        </span>
                    </nuxt-link>
                </template>
                <template v-else>
                    <nuxt-link to="/login" class="nav-a nav-a-2" id="nav-link-accountList" tabindex="0">
                        <span class="nav-line-1">Hello Sign in</span>
                        <span class="nav-line-2">
                            Account &amp; Lists
                            <span class="nav-icon nav-arrow" style="visibility: visible"></span>
                        </span>
                    </nuxt-link>
                </template>
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
</div>

    
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