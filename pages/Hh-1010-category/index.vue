<template>
  <main class="listingPage">
        <div class="container">
          <br/>
          <a href="/hh/Hh-1010-category/add" class="btn btn-small btn-dark mb-5" style="border-radius: 20px; width: 100%">Add a new Category</a>
          <template>
            <div role="tablist" v-for="category in categories" :key="category._id" class="col-12 mx-auto" style="background: rgba(0,0,0,0.1); border-radius: 10px">
              <div class="row my-2">
                <div class="col-md-4">
                  <img :src="category.photo" class="card-img" style="border-radius: 10px; width: 200px; height: 200px;">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h3 class="card-title">{{category.type}}</h3>
                    <p class="card-text"><small class="text-muted"><a :href="`/Hh-1010-category/${category._id}`" class="btn btn-sm btn-dark" style="border-radius: 20px; width: 100%">Edit</a></small></p>
                    <p class="card-text"><small class="text-muted"><a href="#" @click="onDeleteCategory(category._id, index)" class="btn btn-sm btn-dark" style="border-radius: 20px; width: 100%">Delete</a></small></p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>

  </main>
  
</template>

<script>
export default {

  async asyncData({$axios}){
    try{
      let cat =  await $axios.$get("/api/categories");
      
      return{
        categories: cat.categories
      }
    } catch(err){
      console.log(err);
    }
  },
  methods: {
    async onDeleteCategory(id, index) {
             try{
                 let response = await this.$axios.$delete(`/api/categories/${id}`);
                 if(response.status) {
                     this.categories.splice(index, 1);
                 }
             } catch(err){
                 this.message = err.message;
                 console.log(err);
             }
        },
  }
}

</script>