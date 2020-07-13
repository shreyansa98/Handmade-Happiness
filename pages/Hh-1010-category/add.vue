<template>
    <main>
        <div class="container-fluid c-section">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="a-spacing-top-medium"></div>
                    <h2>Add a new Category</h2>
                    <form>
                        <div class="a-spacing-top-medium">
                            <label>Type</label>
                            <input class="a-input-text"  style="width: 100%" v-model="type" />

                            <label class="choosefile-button">
                            <input type="file" @change="onFileSelected" />
                            </label>
                            <p>{{fileName}}</p>
                        </div>
                        <hr />

                        <!-- Button -->
                            <div class="a-spacing-top-large">
                                <span class="a-button-register">
                                    <span class="a-button-inner">
                                        <span class="btn btn-small btn-dark" @click="onAddCategory">
                                            Add Category
                                        </span>
                                    </span>
                                </span>
                            </div>
                    </form>
                     
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
            let response = await $axios.$get("/api/categories");
            return {
                categories: response.categories
            }
        } catch(err){
             console.log(err);
        }
    },

    data() {
        return{
        type: "",
        selectedFile: null,
        fileName: null
        }
    },
    methods: {
        onFileSelected(){
            this.selectedFile = event.target.files[0];
            this.fileName = event.target.files[0].name
        },
        async onAddCategory() {
            try{
                let data = new FormData();
                data.append("type", this.type);
                data.append("photo", this.selectedFile, this.selectedFile.name);
                let response = await this.$axios.$post("/api/categories", data);

        
                 await this.categories.push(data);
                    this.$router.push("/Hh-1010-category");
            } catch (err) {
                console.log(err);
            }
        }
    }
    
}
</script>