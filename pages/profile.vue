<template>
    <main>
        <div class="container-fluid c-section">
            <div class="row mt-3">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="a-spacing-top-medium"></div>
                    <h2>Profile Page</h2>
                    <!-- <a href="#" @click="onLogout">Logout</a> -->
                    <form>
                        <!-- Name -->
                        <div class="a-spacing-top-medium mt-2">
                            <label class="a-form-label">Name</label>
                            <input class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"  style="width: 100%" v-model="name" :placeholder="$auth.$state.user.name" />
                        </div>

                        <!-- Email -->
                        <div class="a-spacing-top-medium mt-2">
                            <label class="a-form-label">Email</label> 
                            <input class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"  style="width: 100%" v-model="email" :placeholder="$auth.$state.user.email" />
                        </div>

                        <!-- Password -->
                        <div class="a-spacing-top-medium mt-2">
                            <label class="a-form-label">Password</label>
                            <input class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"  style="width: 100%" v-model="password" placeholder="******"/>
                        </div>

                        <!-- Button -->
                            <div class="a-spacing-top-large mt-4">
                                <button class="btn btn-dark btn-small" @click="onUpdateProfile">Update Profile</button>
                                <button class="btn btn-dark btn-small" @click="onLogout">Logout</button>
                            </div>
                            
                    </form>
                    <br>
                     
                </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
    </main>
</template>

<script>
export default {

    data() {
        return{
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        async onUpdateProfile(){
            let data = {
                name: this.name,
                email: this.email,
                password: this.password
            }
            try{
                let response = await this.$axios.$put('/api/auth/user', data);

                if(response){
                    this.name = "";
                    this.email = "";
                    this.password = "";

                    await this.$auth.fetchUser();
                }
            } catch(err){
                console.log(err);
            }
        },

        async onLogout(){
            await this.$auth.logout();
            // this.$router.push("/");
            res.redirect('/');
        },
        
    
}
}

</script>