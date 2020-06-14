<template>
  <!--MAIN-->
  <main>
    <!--REGISTER ADDRESS-->
    <div class="registerAddress mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-sm-3"></div>
          <div class="col-sm-6">
            <div class="a-section a-spacing-medium">
              <div class="a-subheader a-breadcrumb a-spacing-small">
                <small>Your Account > Your Address > Update Address</small>
              </div>
            </div>
            <div class="a-section">
              <h4>Add a new address</h4>
              <br/>
              <form>
                <div class="a-spacing-medium form-group">
                  <!-- Country / Region -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px;">Country/Region:</label>
                    <select class="a-select-option ml-4" v-model="country">
                      <option v-for="country in countries" :key="country.aplha2code" :value="country.name" >{{country.name}}</option>
                      <option></option>
                    </select>
                  </div>
                  <br/>
                  <!-- Full name -->
                  <div class="form-group">
                    <label style="margin-bottom: 0px;">Full Name</label>
                    <input type="text" class="a-input-text" style="width: 100%;" v-model="fullName" :placeholder="address.fullName" />
                  </div>
                  <!-- house Number -->
                  <div class="form-group">
                    <label style="margin-bottom: 0px;">House Number</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%;"
                      :placeholder="address.houseNumber"
                      v-model="houseNumber"
                    />
                  </div> 
                    <!-- Street Address -->
                    <div class="form-group">
                    <label style="margin-bottom: 0px;">Street Address</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%;"
                      v-model="streetAddress"
                      :placeholder="address.streetAddress"
                    />
                  </div>
                  <!-- City -->
                  <div class="form-group">
                    <label style="margin-bottom: 0px;">City</label>
                    <input type="text" class="a-input-text" style="width: 100%;" v-model="city" :placeholder="address.city"/>
                  </div>
                  <!-- State -->
                  <div class="form-group">
                    <label style="margin-bottom: 0px;">State / Province / Region</label>
                    <input type="text" class="a-input-text" style="width: 100%;" v-model="state" :placeholder="address.state"/>
                  </div>
                  <!-- Zip Code -->
                  <div class="form-group">
                    <label style="margin-bottom: 0px;">Pin Code</label>
                    <input type="text" class="a-input-text" style="width: 100%;" v-model="pincode" :placeholder="address.pincode"/>
                  </div>
                  <!-- Phone Number -->
                  <div class="form-group">
                    <label style="margin-bottom: 0px;">Phone Number</label>
                    <input type="text" class="a-input-text" style="width: 100%;" v-model="phoneNumber" :placeholder="address.phoneNumber"/>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                      <span class="a-size-mini">May be used to assist delivery</span>
                    </div>
                  </div>
                  <div class="a-spacing-base form-group">
                    <h3>Add delivery instructions</h3>
                  </div>
                  <!-- Delivery Instruction -->
                  <div class="form-group">
                    <label
                      style="margin-bottom: 0px;"
                    >Do we need additional instructions to find this address?</label>
                    <textarea
                      :placeholder="address.deliveryInstructions"
                      style="height:6em; width: 100%;"
                      v-model="deliveryInstructions"
                    ></textarea>
                  </div>
                  <!-- Security code -->
                  <div class="form-group">
                    <label
                      style="margin-bottom: 0px;"
                    >Do we need a security code or a call box number to access this building?</label>
                    <input type="text" class="a-input-text" style="width: 100%;" :placeholder="address.securityCode" v-model="securityCode"/>
                  </div>

                  <div class="a-spacing-top-medium"></div>
                  <hr />
                  <div class="a-spacing-top-medium">
                    <span>
                      <b>Make sure your address is correct</b>
                    </span>
                  </div>
                  <div>
                    <span>If the address contains typos or other errors, your package may be undeliverable.</span>
                  </div>
                  <div class="a-spacing-top-large">
                        <span class="btn btn-dark btn-small mt-3" style="width: 100%" @click="onUpdateAddress">Update address</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-sm-3"></div>
        </div>
      </div>
    </div>
    <!--/REGISTER ADDRESS-->
  </main>
  <!--/MAIN-->
</template>

             

  

<script>
export default {
    async asyncData({$axios, params}){
        try{
            let response = $axios.$get("/api/countries");
            let singleAddress = $axios.$get(`/api/addresses/${params.id}`);

            let [countriesResponse, addressResponse] = await Promise.all([
                response,
                singleAddress
            ]);

            return{
                countries: countriesResponse,
                address: addressResponse.address
            }
        } catch(err){
            console.log(err);
        }
    },
    data(){
        return{
            country: "India",
            fullName: "",
            houseNumber: "",
            streetAddress: "",
            city: "",
            state: "",
            pincode: "",
            phoneNumber: "",
            deliveryInstructions: "",
            securityCode: ""
        }
    },
    methods: {
        async onUpdateAddress() {
            try{
                let data = {
                country: this.country,
                fullName: this.fullName,
                houseNumber: this.houseNumber,
                streetAddress: this.streetAddress,
                city: this.city,
                state: this.state,
                pincode: this.pincode,
                phoneNumber: this.phoneNumber,
                deliveryInstructions: this.deliveryInstructions,
                securityCode: this.securityCode
            };

            let response = await this.$axios.$put(`/api/addresses/${this.$route.params.id}`, data);

            if(response.success){
                this.$router.push("/address");
            }
            } catch(err){
                console.log(err);
            }
            
        }
    }
}
</script>