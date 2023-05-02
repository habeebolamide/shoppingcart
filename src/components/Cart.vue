<template>
    <div>
        <Navbar />
        <div class="container mb-5 mt-4">
            <div class="row">
                <div class="col-md-4">
                    <h2>Summary</h2>
                    <div class="row">
                        <div class="col-md-6">
                            <h4>
                                Total:
                            </h4>
                        </div>
                        <div class="col-md-6">
                            <h4>
                                {{ totalPrice }}
                            </h4>
                        </div>
                        <div class="col-md-6">
                            <h4>
                                Shipping:
                            </h4>
                        </div>
                        <div class="col-md-6">
                            <h4>100</h4>
                        </div>
                        <hr class="mt-4">
                        <div class="col-md-6">
                            <h4>Subtotal :</h4>
                        </div>
                        <div class="col-md-6">
                            <h4>
                                {{ totalPrice + 100 }}
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-7">
                    <h2>Cart</h2>
                    <div class="card">
                        <div class="card-body">
                            <ul>
                                <li style="list-style-type: none;" v-for="item in cartItems " :key="item.id">
                                    <img :src=item.src class="mx-4" width="50px" height="50px" alt="" style="border-radius: 50%;">
                                    <span class="h4 mx-3">{{item.name}}</span>
                                    <button class="mx-1" @click="addItem(item)">+</button>
                                    <span>{{ item.quantity }}</span>
                                    <button class="mx-1" @click="removeItem(item)">-</button>
                                    <span class="h4 mx-5">{{ item.price }}</span>
                                    <hr>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button class="btn btn-success mt-4">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
        <EmptyCart v-if="totalPrice != 0" />
    </div>
</template>
<script>
import Navbar from "./Navbar";
import EmptyCart from "./EmptyCart.vue";
export default {
    name: "carT",
    components: {
        Navbar,
        EmptyCart
    },
    computed: {
        cartItems() {
            return this.$store.state.cartItems;
        },
        totalPrice() {
            let price = 0
            this.$store.state.cartItems.map(el => {
                price += el['quantity'] * el['price']
            })
            return price
        }
    },
    methods:{
    addItem(product){
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