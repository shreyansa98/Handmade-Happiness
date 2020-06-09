export const state = () => ({
    //State
    cart: [],
    cartLength: 0,
    shippingPrice: 0,
    shippingEstimatedDelivery:  "",
    address: {}
    
})

export const actions = {
     addProductToCart({state, commit}, product){
         const cartProduct = state.cart.find(prod => prod._id === product._id);
         if(!cartProduct){
             commit("pushProductToCart", product);
         } else {
             commit("incrementProductQty", cartProduct);
         }

         commit("incrementCartLength");
     }
};

export const mutations = {
    pushProductToCart(state, product) {
        product.quantity = 1;
        state.cart.push(product);
    },
    incrementProductQty(state, product) {
        product.quantity++;
        let indexOfProduct = state.cart.indexOf(product);
        state.cart.splice(indexOfProduct, 1, product);
    },
    incrementCartLength(state) {
        state.cartLength = 0;
        if(state.cart.length > 0) {
            state.cart.map(product => {
                state.cartLength += product.quantity; 
            });
        }
    },
    // 1. Find the product in the cart
    // 2. Change the quantity of the product
    // 3. Update the length of the cart
    // 4. Replace the old product with the updated product
    changeQty(state, {product, qty}){
        let cartProduct = state.cart.find(prod => prod._id === product._id);
        cartProduct.quantity = qty;

        state.cartLength = 0;
        if(state.cart.length > 0) {
            state.cart.map(product => {
                state.cartLength += product.quantity; 
            });
        }

        let indexOfProduct = state.cart.indexOf(cartProduct);
        state.cart.splice(indexOfProduct, 1, cartProduct);

         
    },
    // 1. remove the product quantity from the cartLength
    // 2. get the index of the product we want to delete
    // 3. remove that product by using splice
    removeProduct(state, product) {
        state.cartLength -= product.quantity;
        let indexOfProduct = state.cart.indexOf(product);
        state.cart.splice(indexOfProduct, 1);
    },

    setShipping(state, {price, estimatedDelivery}){
        state.shippingPrice = price;
        state.shippingEstimatedDelivery = estimatedDelivery;
    },
    
    // setShippingAddress(state, {country, fullName, houseNumber, streetAddress, city, state, pincode, phoneNumber, deliveryInstructions, securityCode}){
    //     state.address.shippingCountry = country;
    //     state.address.shippingFullName = fullName;
    //     state.address.shippingHouseNumber = houseNumber;
    //     state.address.shippingStreetAddress = streetAddress;
    //     state.address.shippingCity = city;
    //     state.address.shippingState = state;
    //     state.address.shippingPincode = pincode;
    //     state.address.shippingPhoneNumber = phoneNumber;
    //     state.address.shippingDeliveryInstructions = deliveryInstructions;
    //     state.address.securityCode = securityCode;
    // },

    clearCart(state){
        state.cart = [];
        state.cartLength = 0;
        state.shippingPrice = 0;
        state.shippingEstimatedDelivery =  "";
    }
};

export const getters  = {
    getCartLength(state){
        return state.cartLength;
    },
    getCart(state){
        return state.cart;
    },
    getCartTotalPrice(state){
        let total = 0;
        state.cart.map(product => {
            total += product.price * product.quantity
        });

        return total;
    },
    getCartTotalPriceWithShipping(state){
        let total = 0;
        state.cart.map(product => {
            total += product.price * product.quantity
        });

        return total + state.shippingPrice;
    },
    getEstimatedDelivery(state) {
        return state.shippingEstimatedDelivery;
    },
    getAddress(state) {
        return state.address;
    }
}