<template>
  <main class="listingPage">
        <div class="container">
          <br/>
          <a href="/Hh-1010-category/add" class="btn btn-small btn-dark">Add a new Category</a>
          <template>
            <div role="tablist" v-for="category in categories" :key="category._id" class="col-12">
              <div class="card mb-3" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img :src="category.photo" class="card-img">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{category.type}}</h5>
                    <p class="card-text"><small class="text-muted"><a :href="`/Hh-1010-category/${category._id}`">Edit</a></small></p>
                    <p class="card-text"><small class="text-muted"><a href="#" @click="onDeleteCategory(category._id, index)">Delete</a></small></p>
                  </div>
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