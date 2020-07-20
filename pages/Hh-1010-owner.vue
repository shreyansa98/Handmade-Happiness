<template>
    <main>
        <div class="container-fluid c-section">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="a-spacing-top-medium"></div>
                    <h2>Add a new Owner</h2>
                    <form>
                        <div class="a-spacing-top-medium">
                            <label>Name</label>
                            <input class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"  style="width: 100%" v-model="name" />
                        </div>

                        <div class="a-spacing-top-medium">
                            <label>About</label>
                            <input class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"  style="width: 100%" v-model="about" />
                        </div>

                         <!-- Photo -->
                            <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px" class="mt-2">Add Photo</label>
                                <div class="a-row a-spacing-top-medium">
                                    <label class="choosefile-button">
                                        <input type="file" @change="onFileSelected" />
                                        <p style="margin-top: -70px">
                                           {{ fileName}}
                                        </p>
                                    </label>
                                </div>
                            </div>

                        <!-- Button -->
                            <div class="a-spacing-top-large mt-2">
                                        <span class="btn btn-sm btn-dark" @click="onAddOwner">
                                            Add Owner
                                </span>
                            </div>
                    </form>
                    <br>
                    <ul class="list-group-item" style="background: rgba(0,0,0,0.1); border-radius: 10px">
                        <li v-for="owner in owners" :key="owner._id">{{owner.name}}</li>
                    </ul>
                     
                </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    async asyncData({$axios}) {
        try{
            let response = await $axios.$get("/api/owners");
            return {
                owners: response.owners
            }
        } catch(err){
             console.log(err);
        }
    },

    data() {
        return {name: "",
        about: "",
        selectedFile: null,
        fileName: ""
        }
    },
    methods: {
        onFileSelected(event) {
            this.selectedFile = event.target.files[0];
            this.fileName = event.target.files[0].name;
        },
        async onAddOwner() {
            try{
                let data = new FormData();
                data.append("name", this.name);
                data.append("about", this.about);
                data.append("photo", this.selectedFile, this.selectedFile.name)
                let response = await this.$axios.$post("/api/owners", data);

        
                    this.owners.push({name: this.name});
            } catch (err) {
                console.log(err);
            }
        }
    }
    
}
</script>