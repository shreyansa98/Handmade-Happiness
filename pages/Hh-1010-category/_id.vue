<template>
<body>
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="a-section">
                        <div class="a-spacing-top-medium"></div>
                        <h2 style="text-align: center">Update {{category.type}}</h2>
                        <form>
                            <!-- Title -->
                            <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px">Type</label>
                                <input type="text" class="a-input-text" style="width: 100%" v-model="type" :placeholder="category.type"/>
                            </div>

                            <!-- Photo -->
                            <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px">Add Photo</label>
                                <div class="a-row a-spacing-top-medium">
                                    <label class="choosefile-button">
                                        <input type="file" @change="onFileSelected" />
                                        <p style="margin-top: -70px">
                                           {{ fileName}}
                                        </p>
                                    </label>
                                </div>
                            </div>
                            <hr>
                            <!-- Button -->
                            <div class="a-spacing-top-large">
                                <span class="a-button-register">
                                    <span class="a-button-inner">
                                        <span class="btn btn-small btn-dark" @click="onUpdateProduct">
                                            Update Category
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
    </main>
    </body>
</template>

<script>
export default {
    async asyncData({ $axios, params}){
        try{
            let getCategory = await $axios.$get(`/api/categories/${params.id}`);

            // const [catResponse] = await Promise.all([
            //     category
            // ]);

            return {
                category: getCategory.category
            }
        } catch (err){
            console.log(err);
        }
    },

    data() {
        return {
            type: "",
            selectedFile: null,
            fileName: ""
        }
    },

    methods: {
        onFileSelected(event) {
            this.selectedFile = event.target.files[0];
            this.fileName = event.target.files[0].name;
        },

        async onUpdateProduct() {
            let data = new FormData();
            data.append("type", this.type);
            data.append("photo", this.selectedFile, this.selectedFile.name);

            let result = await this.$axios.$put(`/api/categories/${this.$route.params.id}`, data);

            this.$router.push("/Hh-1010-category");
        }
    }
    
}
</script>