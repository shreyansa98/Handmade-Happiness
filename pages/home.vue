<template>
  <main class="container mt-5">
    <div class="row row-cols-1 row-cols-md-3 mt-10">
      <div class="col mb-4" v-for="category in categories" :key="category._id">
        <nuxt-link :to="`/categories/${category._id}`">
        <div class="card h-100 text-dark haha" style="border-width: 0; border-radius: 10px; background: none;">
          <img :src="category.photo" class="card-img-top" style="border-radius: 10px">
          <h3 class="card-body mb-0" style="text-align: center; border-radius: 10px; background: none; color: #1E3D45">
            {{category.type}}
            <!-- <h3 class="card-title" style="text-align: center">{{category.type}}</h3> -->
          </h3>
        </div>
        </nuxt-link>
      </div>
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
  }
}

</script>
<style>
.haha{
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}
.haha:hover > *{
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
a:hover{
  text-decoration: none;
}
</style>