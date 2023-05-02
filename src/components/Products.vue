<template>
  <div>
      <Navbar/>
    <div class="container mt-5">
        <div class="row">
          <div class="col-md-4 mb-2" v-for="product in products" :key="product.id">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" style="max-height:10rem;" :src=product.src alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">{{ product.name }}</h5>
                  <p class="card-text">price: $ {{ product.price }}</p>
                  <div class="row">
                    <div class="col-md-6">
                       <a href="#" class="btn btn-primary mr-5" @click="addToCart(product)">Add to cart</a>
                    </div>
                    <div class="col-md-6">
                      <a href="#" class="btn btn-danger" @click="removeItem(product)">RemoveItem</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  </div>
    
</template>

<script>
import Navbar from "./Navbar";
export default {
  name: 'ProductsPage',
  components:{
    Navbar
  },
  computed:{
    products(){
      return this.$store.state.products
    }
  },
  methods:{
    addToCart(product){
      // console.log(product);
      // this.$store.commit("addToCart")
      this.$store.dispatch("addToCart",product)
    },
    removeItem(product){
      this.$store.dispatch("removeItem",product)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
