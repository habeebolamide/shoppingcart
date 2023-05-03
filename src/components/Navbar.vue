<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <!-- <a class="navbar-brand" href="/">Navbar</a> -->
            <router-link to="/" class="navbar-brand mx-4">ShopIt</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="cart-icon-container" @click="redirect()">
                    <b-icon class="my-2 my-lg-0" icon="cart" font-scale="1.5"></b-icon>
                    <span class="badge">{{ cartItemsCount }}</span>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "NavBar",

    computed :{
        cartItemsCount(){
            return this.$store.state.cartItemsCount
        }
    },
    methods:{
        redirect(){
            this.$router.push({name:"cart"})
        }
    }
}
</script>
<style scoped>
.cart-icon-container {
    position: absolute;
    display: inline-block;
    right: 39px;
}

.cart-icon-container .badge {
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 12px;
  font-weight: bold;
  background-color: red;
  color: white;
  padding: 2px 5px;
  border-radius: 50%;
}

.fa-shopping-cart {
  font-size: 24px;
  color: black;
}

</style>