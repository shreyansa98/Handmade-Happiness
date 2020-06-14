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
                <small>Your Account > Your Address > New Address</small>
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
                    <input type="text" class="a-input-text" style="width: 100%;" v-model="fullName" required />
                  </div>
                  <!-- house Number -->
                  <div class="form-group">
                    <label style="margin-bottom: 0px;">House Number</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%;"
                      placeholder="Flat/House Number"
                      v-model="houseNumber"
                      required
                    />
                  </div> 
                    <!-- Street Address -->
                    <div class="form-group">
                    <label style="margin-bottom: 0px;">Street Address</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%;"
                      placeholder="Street and number, P.O. box, c/o."
                      v-model="streetAddress"
                      required
                    />
                  </div>
                  <!-- City -->
                  <div class="form-group">
                    <label style="margin-bottom: 0px;">City</label>
                    <input type="text" class="a-input-text" style="width: 100%;" v-model="city" required/>
                  </div>
                  <!-- State -->
                  <div class="form-group">
                    <label style="margin-bottom: 0px;">State / Province / Region</label>
                    <input type="text" class="a-input-text" style="width: 100%;" v-model="state" required/>
                  </div>
                  <!-- Zip Code -->
                  <div class="form-group">
                    <label style="margin-bottom: 0px;">Pin Code</label>
                    <input type="text" class="a-input-text" style="width: 100%;" v-model="pincode" required/>
                  </div>
                  <!-- Phone Number -->
                  <div class="form-group">
                    <label style="margin-bottom: 0px;">Phone Number</label>
                    <input type="text" class="a-input-text" style="width: 100%;" v-model="phoneNumber" required/>
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
                      placeholder="Provide details such as building description, a nearby landmark, or other navigation instructions"
                      style="height:6em; width: 100%;"
                      v-model="deliveryInstructions" required
                    ></textarea>
                  </div>
                  <!-- Security code -->
                  <div class="form-group">
                    <label
                      style="margin-bottom: 0px;"
                    >Do we need a security code or a call box number to access this building?</label>
                    <input type="text" class="a-input-text" style="width: 100%;" placeholder="1234" v-model="securityCode" required/>
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
                        <span class="btn btn-dark btn-small mt-3" style="width: 100%" @click="onAddAddress">Add address</span>
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
    async asyncData({$axios}){
        try{
            let response = await $axios.$get("/api/countries");

            return{
                countries: response
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
        async onAddAddress() {
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

            let response = await this.$axios.$post("/api/addresses", data);

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